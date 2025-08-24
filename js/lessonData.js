// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"eUlnC":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9582912b57fff79c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"iHzNv":[function(require,module,exports,__globalThis) {
window.lessonData = {
    "greeting": [
        {
            "speaker": "Turi",
            "text": "Welcome back. Today\u2019s mission: spot linear functions fast \u2014 no tricks, just clean reasoning.",
            "audio": "Greetings/M1_Greet_1.mp3"
        },
        {
            "speaker": "Turi",
            "text": "Think of it like speed-dating with graphs \u2014 you\u2019ll know in seconds if it\u2019s linear or not.",
            "audio": "Greetings/M1_Greet_2.mp3"
        },
        {
            "speaker": "UnvoicedNote",
            "text": "In live mode, Turi makes sure students are ready before beginning."
        },
        {
            "speaker": "Turi",
            "text": "You\u2019ll see equations and graphs. Your job: decide if they\u2019re linear and explain why.",
            "audio": "Greetings/M1_Greet_3.mp3"
        },
        {
            "speaker": "UnvoicedNote",
            "text": "In live mode, you can answer by voice or typing.",
            "audio": "Greetings/M1_Greet_4.mp3"
        }
    ],
    "concepts": [
        {
            "id": "A",
            "intro": [
                {
                    "speaker": "Turi",
                    "text": "First, the core idea: A line is linear if it has the <b>same slope everywhere</b>.",
                    "audio": "Concept A/M1_CA_1.mp3",
                    "image": "M1_CA.png"
                },
                {
                    "speaker": "Turi",
                    "text": `In equations, that\u{2019}s <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math></span> \u{2014} one x, power of 1, nothing fancy. That one x tells us it\u{2019}s a linear line.`,
                    "audio": "Concept A/M1_CA_2.mp3"
                },
                {
                    "speaker": "Turi",
                    "text": "On a graph, that\u2019s a straight line with no curves and no surprises.",
                    "audio": "Concept A/M1_CA_3.mp3"
                },
                {
                    "speaker": "Turi",
                    "text": "Try one. Pick the linear equation \u2014 I\u2019ll ask \u201Cwhy\u201D after.",
                    "audio": "Concept A/M1_CA_4.mp3"
                },
                {
                    "speaker": "UnvoicedNote",
                    "text": "In live mode, Turi may ask follow-up questions to keep you thinking."
                },
                {
                    "speaker": "Turi",
                    "text": "Which equation is linear?",
                    "audio": "Concept A/M1_CS1_Prompt.mp3"
                }
            ],
            "options": [
                {
                    "label": "A",
                    "text": `<span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn></math></span>`,
                    "isCorrect": true,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": "Exactly. One x, power of 1. That\u2019s linear.",
                                "audio": "Choice 1 Responses/M1_CS1_A_C1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": `Spot on. It fits <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math></span> perfectly.`,
                                "audio": "Choice 1 Responses/M1_CS1_A_C2.mp3"
                            }
                        ]
                    }
                },
                {
                    "label": "B",
                    "text": `<span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mn>2</mn></mrow></msup><mo>\u{2212}</mo><mn>4</mn></math></span>`,
                    "isCorrect": false,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": `Not linear. <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msup><mi>x</mi><mrow><mn>2</mn></mrow></msup></math></span> curves the graph.`,
                                "audio": "Choice 1 Responses/M1_CS1_B_W1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": "Nope, quadratic means slope keeps changing.",
                                "audio": "Choice 1 Responses/M1_CS1_B_W2.mp3"
                            }
                        ],
                        "note": [
                            {
                                "speaker": "UnvoicedNote",
                                "text": "In live mode, Turi can show helpful examples."
                            }
                        ]
                    }
                },
                {
                    "label": "C",
                    "text": `<span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></math></span>`,
                    "isCorrect": false,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": `Not quite. <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mn>1</mn><mi>x</mi></mfrac></math></span> bends and never straightens.`,
                                "audio": "Choice 1 Responses/M1_CS1_C_W1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": "Nope, reciprocal graphs split and curve.",
                                "audio": "Choice 1 Responses/M1_CS1_C_W2.mp3"
                            }
                        ],
                        "note": [
                            {
                                "speaker": "UnvoicedNote",
                                "text": "In live mode, Turi can show helpful examples."
                            }
                        ]
                    }
                },
                {
                    "label": "D",
                    "text": "The one that looks nicest.",
                    "isCorrect": false,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": "Cute, but squinting doesn\u2019t straighten curves.",
                                "audio": "Choice 1 Responses/M1_CS1_D_J1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": "Funny, but the graph\u2019s still curved.",
                                "audio": "Choice 1 Responses/M1_CS1_D_J2.mp3"
                            }
                        ],
                        "note": [
                            {
                                "speaker": "UnvoicedNote",
                                "text": "In live mode, Turi sometimes uses humor to keep students engaged."
                            }
                        ]
                    }
                }
            ],
            "reteach": [
                {
                    "speaker": "Turi",
                    "text": `Linear means the same slope everywhere. If you see <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msup><mi>x</mi><mrow><mn>2</mn></mrow></msup></math></span> or <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mn>1</mn><mi>x</mi></mfrac></math></span> , slope changes \u{2014} not linear.`,
                    "audio": "Choice 1 Responses/M1_CS1_Reteach.mp3"
                }
            ],
            "redo": [
                {
                    "speaker": "Turi",
                    "text": "Let\u2019s try that again \u2014 which equation is linear?",
                    "audio": "Choice 1 Responses/M1_CS1_Redo.mp3"
                },
                {
                    "speaker": "UnvoicedNote",
                    "text": "In live mode, Turi may re-ask until the concept is clear."
                }
            ]
        },
        {
            "id": "B",
            "intro": [
                {
                    "speaker": "Turi",
                    "text": "If you know a line is linear, two points are enough to determine the slope.",
                    "audio": "Concept B/M1_CB_1.mp3",
                    "image": "M1_CB.png"
                },
                {
                    "speaker": "Turi",
                    "text": "Moreover, once you find the slope, you can write the whole equation if you know the y-intercept, or b value.",
                    "audio": "Concept B/M1_CB_2.mp3"
                },
                {
                    "speaker": "Turi",
                    "text": `Look at the example question. The line is linear and it goes through points <b>(1,
                    2)</b> and <b>(3,
                    6)</b>. Slope is <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>m</mi><mo>=</mo><mfrac><mrow><mpadded height="8.6pt" depth="3pt" width="0"><mrow></mrow></mpadded><mstyle displaystyle="false" scriptlevel="0"><mrow><mn>6</mn><mo>\u{2212}</mo><mn>2</mn></mrow></mstyle></mrow><mrow><mpadded height="8.6pt" depth="3pt" width="0"><mrow></mrow></mpadded><mstyle displaystyle="false" scriptlevel="0"><mrow><mn>3</mn><mo>\u{2212}</mo><mn>1</mn></mrow></mstyle></mrow></mfrac><mo>=</mo><mfrac><mrow><mpadded height="8.6pt" depth="3pt" width="0"><mrow></mrow></mpadded><mstyle displaystyle="false" scriptlevel="0"><mrow><mn>4</mn></mrow></mstyle></mrow><mrow><mpadded height="8.6pt" depth="3pt" width="0"><mrow></mrow></mpadded><mstyle displaystyle="false" scriptlevel="0"><mrow><mn>2</mn></mrow></mstyle></mrow></mfrac><mo>=</mo><mn>2</mn></math></span>.`,
                    "audio": "Concept B/M1_CB_3.mp3"
                },
                {
                    "speaker": "Turi",
                    "text": `Since the line goes through (0,
                    0), y-intercept is 0. Therefore, the equation of the line is: <span><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>0</mn></math></span> or <span><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi></math></span>. Done.`,
                    "audio": "Concept B/M1_CB_4.mp3"
                },
                {
                    "speaker": "Turi",
                    "text": "Your turn: A straight line goes through points <b>(2,5)</b> and <b>(4,9)</b>. What\u2019s the slope?",
                    "audio": "Concept B/M1_CB_Prompt.mp3",
                    "image": "M1_CB_Q.png"
                },
                {
                    "speaker": "UnvoicedNote",
                    "text": "In live mode, students can ask for more time or let Turi know they\u2019re still working. Turi will wait, but repeated requests or prolonged idling will be flagged as possible off-task behavior."
                }
            ],
            "options": [
                {
                    "label": "A",
                    "text": `<span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>m</mi><mo>=</mo><mn>1</mn></math></span>`,
                    "isCorrect": false,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": `Not quite. Slope is rise over run. `,
                                "audio": "Concept B/M1_CB_A_W1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": "Close, you calculated rise/run wrong. Rise is vertical and run is horizontal.",
                                "audio": "Concept B/M1_CB_A_W2.mp3"
                            }
                        ]
                    }
                },
                {
                    "label": "B",
                    "text": `<span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>m</mi><mo>=</mo><mn>2</mn></math></span>`,
                    "isCorrect": true,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": `Correct. Rise is 4, run is 2, slope is 2. `,
                                "audio": "Concept B/M1_CB_B_C1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": `Nice. Slope is <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mrow><mpadded height="8.6pt" depth="3pt" width="0"><mrow></mrow></mpadded><mstyle displaystyle="false" scriptlevel="0"><mrow><mn>4</mn></mrow></mstyle></mrow><mrow><mpadded height="8.6pt" depth="3pt" width="0"><mrow></mrow></mpadded><mstyle displaystyle="false" scriptlevel="0"><mrow><mn>2</mn></mrow></mstyle></mrow></mfrac><mo>=</mo><mn>2</mn></math></span>.`,
                                "audio": "Concept B/M1_CB_B_C2.mp3"
                            }
                        ]
                    }
                },
                {
                    "label": "C",
                    "text": `<span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>m</mi><mo>=</mo><mfrac><mrow><mpadded height="8.6pt" depth="3pt" width="0"><mrow></mrow></mpadded><mstyle displaystyle="false" scriptlevel="0"><mrow><mn>1</mn></mrow></mstyle></mrow><mrow><mpadded height="8.6pt" depth="3pt" width="0"><mrow></mrow></mpadded><mstyle displaystyle="false" scriptlevel="0"><mrow><mn>2</mn></mrow></mstyle></mrow></mfrac></math></span>`,
                    "isCorrect": false,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": `Not quite. You flipped rise/run.`,
                                "audio": "Concept B/M1_CB_C_W1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": "Nope, slope is rise over run, not the other way.",
                                "audio": "Concept B/M1_CB_C_W2.mp3"
                            }
                        ]
                    }
                },
                {
                    "label": "D",
                    "text": "No slope, too tired.",
                    "isCorrect": false,
                    "feedback": {
                        "note": [
                            {
                                "speaker": "UnvoicedNote",
                                "text": "In live mode, Turi may steer the student back on track if jokes continue."
                            }
                        ]
                    }
                }
            ],
            "redo": [
                {
                    "speaker": "Turi",
                    "text": "Try again. What\u2019s the slope for between points <b>(2,5)</b> and <b>(4,9)</b>?",
                    "audio": "Concept B/M1_CB_Redo.mp3"
                },
                {
                    "speaker": "UnvoicedNote",
                    "text": "In live mode, Turi guides students toward the right answer before moving on."
                }
            ]
        },
        {
            "id": "C",
            "intro": [
                {
                    "speaker": "Turi",
                    "text": "Last check: equations can be written in many forms \u2014 still linear if the slope stays constant.",
                    "audio": "Concept C/M1_CC_1.mp3"
                },
                {
                    "speaker": "Turi",
                    "text": `For examples: <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>\u{2212}</mo><mn>3</mn><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></math></span> or <math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mn>2</mn><mi>x</mi><mo>\u{2212}</mo><mi>y</mi><mo>=</mo><mn>4</mn></math>. Different look, same slope rule.`,
                    "audio": "Concept C/M1_CC_2.mp3"
                },
                {
                    "speaker": "UnvoicedNote",
                    "text": "In live mode, Turi can adjust the amount of algebra shown."
                },
                {
                    "speaker": "Turi",
                    "text": "Which of these is <b>not</b> linear?",
                    "audio": "Concept C/M1_CC_Prompt.mp3",
                    "image": "M1_CC_Q.png"
                },
                {
                    "speaker": "UnvoicedNote",
                    "text": "In live mode, students can ask for more time, and Turi will wait."
                }
            ],
            "options": [
                {
                    "label": "A",
                    "text": `<span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><mo>\u{2212}</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>7</mn></math></span>`,
                    "isCorrect": false,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": "Nope, that is still linear. The slope is \u22125",
                                "audio": "Concept C/M1_CC_A_W1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": `Not quite. It fits <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>b</mi></math></span>, so it\u{2019}s linear.`,
                                "audio": "Concept C/M1_CC_A_W2.mp3"
                            }
                        ]
                    }
                },
                {
                    "label": "B",
                    "text": `<span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mn>3</mn><mi>y</mi><mo>\u{2212}</mo><mn>6</mn><mi>x</mi><mo>=</mo><mn>12</mn></math></span>`,
                    "isCorrect": false,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": `Nope, you can rearrange to <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn></math></span> , which is linear.`,
                                "audio": "Concept C/M1_CC_B_W1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": "Not quite. This is just in standard form, still linear.",
                                "audio": "Concept C/M1_CC_B_W2.mp3"
                            }
                        ]
                    }
                },
                {
                    "label": "C",
                    "text": `<span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>y</mi><mo>=</mo><mn>4</mn><msup><mi>x</mi><mrow><mn>2</mn></mrow></msup><mo>+</mo><mn>1</mn></math></span>`,
                    "isCorrect": true,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": `NCorrect. <span><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msup><mi>x</mi><mrow><mn>2</mn></mrow></msup></math></span> makes it quadratic, not linear.`,
                                "audio": "Concept C/M1_CC_C_C1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": "Exactly. Squared x makes it quadratic, so it\u2019s out.",
                                "audio": "Concept C/M1_CC_C_C2.mp3"
                            }
                        ]
                    }
                }
            ],
            "reteach": [
                {
                    "speaker": "Turi",
                    "text": `Linear means no exponents other than 1, no variables multiplied together. `,
                    "audio": "Concept C/M1_CC_Reteach.mp3"
                },
                {
                    "speaker": "UnvoicedNote",
                    "text": "In live mode, Turi can handle unexpected answers appropriately."
                }
            ],
            "redo": [
                {
                    "speaker": "Turi",
                    "text": "Try again \u2014 which of these is <b>not</b> linear?",
                    "audio": "Concept C/M1_CC_Redo.mp3"
                },
                {
                    "speaker": "UnvoicedNote",
                    "text": "In live mode, this re-ask would be open-ended, and Turi would guide the student until correct before moving on."
                }
            ]
        },
        {
            "id": "Quick Fire",
            "intro": [
                {
                    "speaker": "Turi",
                    "text": "Before we wrap \u2014 True or False: All linear equations have the same slope.",
                    "audio": "Quick Fire/M1_QF_Intro.mp3"
                }
            ],
            "options": [
                {
                    "label": "True",
                    "text": '',
                    "isCorrect": true,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": "Nope, slope depends on the equation. Linear just means slope is constant within one equation.",
                                "audio": "Quick Fire/M1_QF_A_W1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": `Not quite. Different lines can have different slopes. Constant slope only applies within a single equation.`,
                                "audio": "Quick Fire/M1_QF_A_W2.mp3"
                            }
                        ]
                    }
                },
                {
                    "label": "False",
                    "text": '',
                    "isCorrect": true,
                    "feedback": {
                        "turi": [
                            {
                                "speaker": "Turi",
                                "text": "Exactly. Slope varies between different lines, but stays constant within one.",
                                "audio": "Quick Fire/M1_QF_A_W1.mp3"
                            },
                            {
                                "speaker": "Turi",
                                "text": `Correct. Each linear equation has its own slope.`,
                                "audio": "Quick Fire/M1_QF_A_W2.mp3"
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "close": [
        {
            "speaker": "Turi",
            "text": "And that\u2019s it for today\u2019s run. In live mode, we\u2019d dive into tougher problems next. Keep that brain warmed up!",
            "audio": "Quick Fire/M1_QF_Close.mp3"
        },
        {
            "speaker": "UnvoicedNote",
            "text": "In live mode, students answer in their own words. Turi adapts to their pace, keeps them engaged, and guides them back on track until the concept clicks"
        }
    ]
};

},{}]},["eUlnC","iHzNv"], "iHzNv", "parcelRequire94c2", {})

//# sourceMappingURL=lessonData.js.map
