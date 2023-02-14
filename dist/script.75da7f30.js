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
})({"script.js":[function(require,module,exports) {
// Hero Text Animation Section
setTimeout(function () {
  var firstWhiteLettering = document.querySelector('.firstWhiteLettering');
  firstWhiteLettering.style.opacity = '1';
  firstWhiteLettering.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
}, "1000");
setTimeout(function () {
  var secondWhiteLettering = document.querySelector('.secondWhiteLettering');
  secondWhiteLettering.style.opacity = '1';
  secondWhiteLettering.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
  var secondredLetter = document.querySelector('.secondredLetter');
  secondredLetter.style.marginLeft = '0em';
}, "2000");
setTimeout(function () {
  var thirdWhiteLettering = document.querySelector('.thirdWhiteLettering');
  thirdWhiteLettering.style.opacity = '1';
  thirdWhiteLettering.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
  var thirdredLetter = document.querySelector('.thirdredLetter');
  thirdredLetter.style.marginLeft = '0em';
}, "3000");
setTimeout(function () {
  var headerCTAlink = document.querySelector('.heroCTALink');
  headerCTAlink.style.opacity = '1';
  headerCTAlink.style.transform = 'translateY(0em)';
}, "4500");

// Hero Heading Parallax Effect
var heroHeadingContainer = document.querySelector('.heroHeadingContainer');
var heroHeadingOptions = {
  rootMargin: "0px",
  threshold: 0
};
var heroHeadingObserver = new IntersectionObserver(function (entries, heroHeadingObserver) {
  entries.forEach(function (entry) {
    function headingParallax() {
      var windowHeight = window.innerHeight;
      var windowScrolled = window.scrollY;
      var parallaxValue = windowScrolled / 15;
      heroHeadingContainer.style.transform = "translateY(".concat(parallaxValue, "px)");
    }
    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', headingParallax);
    } else {
      document.removeEventListener('scroll', headingParallax);
    }
  });
}, heroHeadingOptions);
heroHeadingObserver.observe(heroHeadingContainer);

// Our Vision animation text
var crossoverText = document.querySelectorAll('.crosspageText');
var crossoverOptions = {
  rootMargin: "0px",
  threshold: "0"
};
var crossoverObserver = new IntersectionObserver(function (entries, crossoverObserver) {
  entries.forEach(function (entry) {
    function crossoverAnimation() {
      crossoverText.forEach(function (text) {
        var windowScroll = window.innerHeight;
        var scrollValue = text.getBoundingClientRect();
        var scrollY_value = scrollValue.top;
        var parallaxValue = 25 - (windowScroll - scrollY_value) / 11;
        text.style.transform = "translateX(".concat(parallaxValue, "%)");
        var textOpacity = (windowScroll - scrollY_value) / 20 / 35;
        text.style.opacity = "".concat(textOpacity);
      });
    }
    if (entry.isIntersecting) {
      document.addEventListener('scroll', crossoverAnimation);
    } else {
      document.removeEventListener('scroll', crossoverAnimation);
      crossoverText.forEach(function (text) {
        text.style.transform = 'translateX(0em)';
      });
    }
    if (window.innerWidth > 600) {
      crossoverAnimation();
    }
  });
}, crossoverOptions);
crossoverText.forEach(function (text) {
  crossoverObserver.observe(text);
});

// Animation for the Our Vision heading and paragraph
var visonTextContainer = document.querySelector('.visonTextContainer');
var ourVisionOptions = {
  rootMargin: "0px",
  threshold: 0
};
var ourVisionTextObserver = new IntersectionObserver(function (entries, ourVisionTextObserver) {
  entries.forEach(function (entry) {
    function ourVisionTextAnimation() {
      var windowScroll = window.innerHeight;
      var scrollValue = visonTextContainer.getBoundingClientRect();
      var scrollY_value = scrollValue.top;
      var parallaxValue = 25 - (windowScroll - scrollY_value) / 5;
      visonTextContainer.style.transform = "translateY(".concat(parallaxValue, "px)");
    }
    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', ourVisionTextAnimation);
    } else {
      document.removeEventListener('scroll', ourVisionTextAnimation);
    }
  });
}, ourVisionOptions);
ourVisionTextObserver.observe(visonTextContainer);

// Animation for the iphones

var phoneAnimationOptions = {
  rootMargin: "0px",
  threshold: 0
};

// The social media iPhone scrolling list
var phoneListOne = document.querySelector('.phoneListOne');
var phoneListOneObserver = new IntersectionObserver(function (entries, phoneListOneObserver) {
  entries.forEach(function (entry) {
    function phoneListOneScrolling() {
      var imageElementRect = phoneListOne.getBoundingClientRect();
      var imageElementY = imageElementRect.top;
      var windowHeight = window.innerHeight;
      var parallaxValue = (imageElementY - windowHeight) / 4;
      phoneListOne.style.transform = "translateY(".concat(parallaxValue, "px)");
    }
    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', phoneListOneScrolling);
    } else {
      document.removeEventListener('scroll', phoneListOneScrolling);
    }
  });
}, phoneAnimationOptions);
phoneListOneObserver.observe(phoneListOne);

// The Discord iPhone scrolling list
var phoneListTwo = document.querySelector('.phoneListTwo');
function phoneListTwoScrolling() {
  var imageElementRect = phoneListTwo.getBoundingClientRect();
  var imageElementY = imageElementRect.top;
  var windowHeight = window.innerHeight - 2000;
  var parallaxValue = (imageElementY - windowHeight) / -1;
  phoneListTwo.style.transform = "translateY(".concat(parallaxValue, "px)");
}
var phoneListTwoObserver = new IntersectionObserver(function (entries, phoneListTwoObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', phoneListTwoScrolling);
    } else {
      document.removeEventListener('scroll', phoneListTwoScrolling);
    }
  });
}, phoneAnimationOptions);
phoneListTwoObserver.observe(phoneListTwo);
if (window.innerWidth > 600) {
  phoneListTwoScrolling();
}

// how to participate panel parallax scroll
var gettingStartedPanel = document.querySelector('.gettingStartedpanel');
var gettingStartedOptions = {
  rootMargin: "0px",
  threshold: 0
};
var gettingStartedObserver = new IntersectionObserver(function (entries, gettingStartedObserver) {
  entries.forEach(function (entry) {
    function gettingStartedPanelParallax() {
      var windowHeight = window.innerHeight;
      var panelRect = gettingStartedPanel.getBoundingClientRect();
      var panelTop = panelRect.top;
      var parallaxValue = (panelTop - windowHeight) / 7;
      gettingStartedPanel.style.transform = "translateY(".concat(parallaxValue, "px)");
    }
    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', gettingStartedPanelParallax);
    } else {
      document.removeEventListener('scroll', gettingStartedPanelParallax);
    }
  });
}, gettingStartedOptions);
gettingStartedObserver.observe(gettingStartedPanel);

// the down arrow for how to participate 
var participationArrow = document.querySelectorAll('.arrow');
var participationStepArrowOptions = {
  rootMargin: "-100px",
  threshold: 1
};
var participationArrowObserver = new IntersectionObserver(function (entries, participationArrowObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('arrowShowing');
    }
  });
}, participationStepArrowOptions);
participationArrow.forEach(function (arrow) {
  participationArrowObserver.observe(arrow);
});

// Our Pedagogical vision text parallax
var aboutUsTextContainer = document.querySelector('.aboutUsTextContainer');
var aboutUsTextOptions = {
  rootMargin: "0px",
  threshold: 0
};
var aboutUsTextObserver = new IntersectionObserver(function (entries, aboutUsTextObserver) {
  entries.forEach(function (entry) {
    function aboutUsTextParallax() {
      var windowHeight = window.innerHeight;
      var aboutUsTextRect = aboutUsTextContainer.getBoundingClientRect();
      var aboutUsTextY = aboutUsTextRect.top;
      var parallaxValue = (aboutUsTextY - windowHeight) * -1 / 3.5;
      aboutUsTextContainer.style.transform = "translateY(".concat(parallaxValue, "px)");
    }
    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', aboutUsTextParallax);
    } else {
      document.removeEventListener('scroll', aboutUsTextParallax);
    }
  });
}, aboutUsTextOptions);
aboutUsTextObserver.observe(aboutUsTextContainer);

// Code for the red underline on headers
var underlineText = document.querySelectorAll('.underlineText');
var underlineOptions = {
  rootMargin: "-50px",
  threshold: 1
};
var underlineObserver = new IntersectionObserver(function (entries, underlineObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('showUnderline');
    }
  });
}, underlineOptions);
underlineText.forEach(function (text) {
  underlineObserver.observe(text);
});

// Our Services Tab Section
var tabs = document.querySelector('.tabs');
var tabButtons = tabs.querySelectorAll('[role="tab"]');
var tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

// Change the tab once the button is clicked
function handleTabClick(event) {
  // Hide all tab panels
  tabPanels.forEach(function (panel) {
    panel.hidden = true;
  });

  // mark all tabs as unselected
  tabButtons.forEach(function (tab) {
    tab.setAttribute('aria-selected', false);
  });

  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // find the assosictaed tab panel and show it
  var id = event.currentTarget.id;
  var tabPanel = tabs.querySelector("[aria-labelledby=\"".concat(id, "\"]"));
  tabPanel.hidden = false;
}

// A loop for each button
tabButtons.forEach(function (button) {
  return button.addEventListener('click', handleTabClick);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51413" + '/');
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map