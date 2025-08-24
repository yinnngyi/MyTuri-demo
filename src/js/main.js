(function () {

  // Collapsible functionality
  $('.card-header.clickable').on('click', function () {
    const $card = $(this).closest('.collapsible');
    const $content = $card.find('.card-content');
    const $icon = $(this).find('.collapse-icon');

    if ($card.hasClass('collapsed')) {
      // Expand
      $card.removeClass('collapsed').addClass('expanded');
      $content.slideDown(300);
      $icon.attr('data-lucide', 'chevron-up');
    } else {
      // Collapse
      $card.removeClass('expanded').addClass('collapsed');
      $content.slideUp(300);
      $icon.attr('data-lucide', 'chevron-down');
    }

    // Recreate icons after changing data-lucide attribute
    setTimeout(() => {
        lucide.createIcons();
      }, 100);
  });

  /* ------------------------------------------------ */

  const $chatContainer = $('.chat-messages');
  // 打字效果：逐字顯示文字
  function typeText($element, text, speed = 50) {
    return new Promise(resolve => {
      // 把字串丟給 DOMParser 解析成 DOM 結構
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${text}</div>`, "text/html");
      const nodes = Array.from(doc.body.firstChild.childNodes);

      let nodeIndex = 0;
      let charIndex = 0;

      function typeNext() {
        if (nodeIndex >= nodes.length) {
          resolve();
          return;
        }

        const node = nodes[nodeIndex];

        if (node.nodeType === Node.TEXT_NODE) {
          // 文字節點 → 逐字輸出
          const chars = node.textContent;
          if (charIndex < chars.length) {
            $element.html($element.html() + chars.charAt(charIndex));
            charIndex++;
            setTimeout(typeNext, speed);
          } else {
            nodeIndex++;
            charIndex = 0;
            typeNext();
          }
        } else {
          // HTML 或 MathML → 整塊直接插入
          $element.append(node.cloneNode(true));
          nodeIndex++;
          typeNext();
        }
      }

      typeNext();
    });
  }
  

  // 播放音訊
  function playAudio(src) {
    return new Promise(resolve => {
      const audio = new Audio(`audio/${src}`);
      console.log(`Playing audio: audio/${src}`);
      audio.onended = resolve;
      audio.onerror = resolve; // 若音訊失敗也繼續流程
      audio.play();
    });
  }

  // 顯示一則訊息
  async function showMessage(msg) {
    const type = msg.speaker;
    const $template = $(`.message-block.message-${type}`).first();
    const $newMessage = $template.clone().hide();
    const $textElement = $newMessage.find('p');

    $textElement.text('');
    $('.chat-messages').append($newMessage);
    $chatContainer.scrollTop($chatContainer[0].scrollHeight);

    let typingPromise;
    let audioPromise = Promise.resolve();

    switch (type) {
      case 'UnvoicedNote':
        $textElement.text(msg.text);
        $chatContainer.scrollTop($chatContainer[0].scrollHeight);
        typingPromise = new Promise(resolve => {
          $newMessage.fadeIn(300, resolve);
        });
        $chatContainer.scrollTop($chatContainer[0].scrollHeight);
        break;

      case 'Turi':
        typingPromise = typeText($textElement, msg.text);  
        $newMessage.show();
        $newMessage.find('.audio-icon').addClass('show');
        $chatContainer.scrollTop($chatContainer[0].scrollHeight);
        if (msg.audio) {
          audioPromise = playAudio(msg.audio);
        }
        break;

      case 'student':
        $textElement.html(msg.text);
        $newMessage.show();
        $chatContainer.scrollTop($chatContainer[0].scrollHeight);
        break;

      default:
        console.warn(`Unknown message type: ${type}`);
        break;
    }

    await Promise.all([typingPromise, audioPromise]);

    $chatContainer.scrollTop($chatContainer[0].scrollHeight);

    if (type === 'UnvoicedNote') {
      await new Promise(resolve => setTimeout(resolve, 500));
    } else {
      $newMessage.find('.audio-icon').addClass('pause');
      await new Promise(resolve => setTimeout(resolve, 500));
      $newMessage.find('.audio-icon').removeClass('show pause');
    }

    $chatContainer.scrollTop($chatContainer[0].scrollHeight);

    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // 顯示一組訊息（greeting、intro、feedback）
  async function runLessonMessages(messages) {
    if (!Array.isArray(messages) || messages.length === 0) {
      return; // 沒東西就直接結束
    }
    for (const msg of messages) {
      if (msg.image) {
        const $img = $('<img>', {
          class: 'concept-image',
          src: `images/${msg.image}`,
          alt: 'concept image'
        });
        $('.notes-section .card-content').empty();
        $('.app-loader').removeClass('hidden').fadeIn(100);
        setTimeout(() => {
          $('.app-loader').fadeOut(200, () => {
            $('.notes-section .card-content').html($img).fadeIn(500);
          });
        }, 300);
      }
      await showMessage(msg);
    }
  }  

  // 課程流程



  async function runLesson(data) {
    // 1. greeting
    await runLessonMessages(data.greeting);

    // 2. concepts
    let currentConcept = 0;
    async function runConcept(conceptIndex) {
      const concept = data.concepts[conceptIndex];
      // 3. intro
      await runLessonMessages(concept.intro);

      // 4. Choice
      return new Promise(resolve => {
        function showOptions(conceptIndex) {
          const concept = data.concepts[conceptIndex];

          // 4.1 Choice Button
          $('#choicePopup').empty();
          concept.options.forEach((option, i) => {
            const $btn = $('<button>', {
              class: 'action-btn choice-btn',
              html: `<span class="choice">${option.label}.</span>${option.text}`
            }).attr('data-concepts', conceptIndex)
              .attr('data-options', i);
            if (option.isCorrect) {
              $btn.data('correct', true);
            }
            $('#choicePopup').append($btn);
            $('body').addClass('show-choice');
            $chatContainer.scrollTop($chatContainer[0].scrollHeight);
          });

          // 5. Click
          $('.choice-btn').off('click').on('click', async function () {
            const c = $(this).data('concepts');
            const o = $(this).data('options');
            const option = data.concepts[c].options[o];

            // 5.1 hide choicePopup
            $('body').removeClass('show-choice');
            $chatContainer.scrollTop($chatContainer[0].scrollHeight);

            // 5.2 play audio
            await playAudio('SFX_Select_01.mp3');

            // 5.3 show student Msg
            const studentMsg = [{
              speaker: 'student',
              text: `<span class="choice">${option.label}.</span>${option.text}`,
            }];
            await runLessonMessages(studentMsg);

            // 5.4 feedback
            const turiFeedbacks = option.feedback.turi;
            const noteFeedbacks = option.feedback.note;

            let messagesToShow = [];
            if (Array.isArray(turiFeedbacks) && turiFeedbacks.length > 0) {
              const randomTuri = turiFeedbacks[Math.floor(Math.random() * turiFeedbacks.length)];
              messagesToShow.push(randomTuri);
            }
            if (Array.isArray(noteFeedbacks) && noteFeedbacks.length > 0) {
              messagesToShow = messagesToShow.concat(noteFeedbacks);
            }
            await runLessonMessages(messagesToShow);

            // 5.5 isCorrect
            if (option.isCorrect) {
              // ✅
              currentConcept++;
              if (currentConcept < data.concepts.length) {
                await runConcept(currentConcept);
                resolve();
              } else {
                resolve();
              }
            } else {
              // ❌
              await runLessonMessages(concept.reteach);
              await runLessonMessages(concept.redo);
              showOptions(conceptIndex);
              $chatContainer.scrollTop($chatContainer[0].scrollHeight);
            }
          });
        }
        showOptions(conceptIndex);
      });
    }

    // 2. concepts
    await runConcept(currentConcept);

    // 3. End
    await runLessonMessages(data.close);
  }

  /* ------------------------------------------------ */

  // 啟動流程
  $('#startLessonBtn').on('click', function () {
    $('#startPopup').hide();
    setTimeout(() => {
      runLesson(lessonData); // ✅ 修正：傳整個 lessonData
    }, 500);
  });
    
  /* ------------------------------------------------ */

  // Action button interactions
  $('.action-btn, .menu-btn').on('click', function () {
    const buttonText = $(this).text().trim();
    // Add visual feedback
    $(this).addClass('active');
    setTimeout(() => {
      $(this).removeClass('active');
    }, 200);
  });

  // Handle window resize to maintain layout
  $(window).on('resize', function () {
    // Ensure proper height calculations on resize
    const windowHeight = $(window).height();
    const headerHeight = $('.header').outerHeight();
    const remainingHeight = windowHeight - headerHeight;
    $('.main-content').css('height', remainingHeight + 'px');
  });

  // Initial height calculation
  $(window).trigger('resize');
})();