// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"quizScript.js":[function(require,module,exports) {
// Change Newsletter Link Here:
var MediumLink = 'https://medium.com/@Learn2EarnNow/l2e-edition-54-newsletter-862eff2bf99b';

// Change Questions Here:
var quizQuestions = [{
  Q: 'What is the ticker symbol for Bitcoin?'
}, {
  Q: 'Why do we keep an eye on the global macro landscape?'
}, {
  Q: 'Who is Jerome Powell?'
}, {
  Q: 'Why is Jerome so important in the current environment?'
}, {
  Q: 'Why is inflation bad for the economy?'
}, {
  Q: 'Are you bullish or bearish?'
}];

// No Need to Touch Below -- No Need to Touch Below -- No Need to Touch Below

// code for the label and input elements looping over total questionsn above
var phoneForMediumLink = document.querySelector('.mediumLink');
phoneForMediumLink.href = MediumLink;
var editionLink = MediumLink.slice(MediumLink.indexOf('edition-'));
// Change the 10 to an 11 once we get into the triple digits for the edition value
var editionNumber = editionLink.substring(8, 10);
var editionText = document.querySelector('.editionText');
editionText.appendChild(document.createTextNode("Edition ".concat(editionNumber, " Quiz")));
var quizEndNewsletterEdition = document.querySelector('.newsletterEdition');
quizEndNewsletterEdition.appendChild(document.createTextNode(editionNumber));
var earnedPCCElement = document.querySelector('.earnedPCC');
var earnedPCC = quizQuestions.length * 50;
earnedPCCElement.appendChild(document.createTextNode(earnedPCC));

// form inputs and label creation
var formData = document.querySelector('.injectedQuestions');
var addQuestionOne = 1;
for (var i = 0; i < quizQuestions.length; i++) {
  // label creation
  var labelElement = document.createElement('label');
  var labelText = document.createTextNode(quizQuestions[i].Q);
  labelElement.appendChild(labelText);
  formData.appendChild(labelElement);

  //input creation
  var inputElement = document.createElement('input');
  var inputName = 'answer' + [i];
  var nameValue = addQuestionOne + parseInt([i]);
  inputElement.name = 'answer' + nameValue;
  inputElement.setAttribute('type', 'text');
  var placeHolderValue = addQuestionOne + parseInt([i]);
  inputElement.placeholder = "Answer ".concat(placeHolderValue);
  inputElement.required = true;
  formData.appendChild(inputElement);
}
;

// Animations for the Learn to Earn page
var benefitsText = document.querySelector('.benefitsText');
var newsletterArrow = document.querySelector('.newsletterArrow');
var L2ELandingPageOptions = {
  rootMargin: "-180px",
  threshold: 0
};

// For the arrow animation
var newsletterArrowObserver = new IntersectionObserver(function (entries, newsletterArrowObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      newsletterArrow.style.opacity = '1';
      newsletterArrow.style.transform = 'rotate(0deg) scale(1) translateX(0em)';
    }
  });
}, L2ELandingPageOptions);
newsletterArrowObserver.observe(newsletterArrow);

// For the benefits text animation
var benefitsTextObserver = new IntersectionObserver(function (entries, benefitsTextObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      benefitsText.style.transform = 'translateX(2em)';
      benefitsText.style.opacity = '1';
    }
  });
}, L2ELandingPageOptions);
benefitsTextObserver.observe(benefitsText);

// Starting the quiz code
var startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startQuiz);
function startQuiz() {
  // scroll user to top of page
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  // removing the landing page
  var landingPage = document.querySelector('.learnToEarnInfoContainer');
  landingPage.style.opacity = '0';
  landingPage.style.transform = 'translateY(-100%)';

  // adding the quiz container in
  var quizQuestionContainer = document.querySelector('.quizQuestionContainer');
  quizQuestionContainer.style.minHeight = '100vh';
  quizQuestionContainer.style.height = 'auto';

  //removing the landing page display to none
  setTimeout(removeLandingPage, 1000);
  function removeLandingPage() {
    landingPage.style.display = 'none';
  }
  ;

  //adding the form with gradual animation for smooth transition
  setTimeout(addQuiz, 1200);
  function addQuiz() {
    var quizQuestionDiv = document.querySelector('.quizQuestionDiv');
    quizQuestionDiv.style.transform = 'translateY(0em)';
    quizQuestionDiv.style.opacity = '1';
    var form = document.querySelector('form');
    form.style.display = 'flex';
    var editionTextDiv = document.querySelector('.editionTextDiv');
    editionTextDiv.style.opacity = '1';
    editionTextDiv.style.transform = 'translateY(0em)';
  }
}
;

// Code for the form submission to the Google Sheet
var quizForm = document.querySelector('.quizForm');
window.addEventListener("load", function () {
  var form = document.querySelector('.quizForm');
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data
    }).then(function () {
      // This is the code that triggers once the user submits the form
      var quizQuestionContainer = document.querySelector('.quizQuestionContainer');
      quizQuestionContainer.style.transform = 'translateY(-100%)';
      var completionPageContainer = document.querySelector('.completionPageContainer');
      completionPageContainer.style.display = 'flex';
      setTimeout(quizEnd, 1000);
      function quizEnd() {
        quizQuestionContainer.style.display = 'none';
        var quizCompletionText = document.querySelector('.quizCompletionText');
        quizCompletionText.style.opacity = '1';
        quizCompletionText.style.transform = 'translateY(0em)';
      }
    });
  });
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65086" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","quizScript.js"], null)
//# sourceMappingURL=/quizScript.b3ce4037.js.map