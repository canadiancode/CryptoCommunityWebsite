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
})({"toolsScript.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// CODE FOR THE CATEGORY LIST FUNCTION
// display and hide the category list
var openCloseCategoriesDiv = document.querySelector('.openCloseCategoriesDiv');
var categoryHeadingContainer = document.querySelectorAll('.categoryHeadingContainer');
var openCloseCategoriesDivText = document.querySelector('.containerSignDiv');
var chartButtonContainer = document.querySelectorAll('.chartButtonContainer');
function openOrCloseCategoryList() {
  // variables
  var chartSelectionPanelContainer = document.querySelector('.chartSelectionPanelContainer');
  var openCategoryListIcon = document.querySelector('.fa-arrow-right-to-bracket');
  if (openCloseCategoriesDiv.classList.contains('openCategoryList')) {
    openCloseCategoriesDiv.classList.remove('openCategoryList');
    chartSelectionPanelContainer.style.transform = 'translateX(-100%)';
    openCategoryListIcon.style.transform = 'rotate(0deg)';
    openCloseCategoriesDivText.style.transform = 'rotate(-90deg) translateY(0%)';
  } else {
    openCloseCategoriesDiv.classList.add('openCategoryList');
    chartSelectionPanelContainer.style.transform = 'translateX(0%)';
    openCategoryListIcon.style.transform = 'rotate(180deg)';
    openCloseCategoriesDivText.style.transform = 'rotate(-90deg) translateY(-100%)';
  }
}
openCloseCategoriesDiv.addEventListener('click', openOrCloseCategoryList);
openCloseCategoriesDivText.addEventListener('click', openOrCloseCategoryList);
var _loop = function _loop(i) {
  // variables
  var categoryArrowOpen = document.querySelectorAll('.fa-arrow-down-short-wide');
  var categoryArrowClose = document.querySelectorAll('.fa-arrow-up-short-wide');

  // function to open or close the category
  function openOrCloseCategory() {
    if (chartButtonContainer[i].classList.contains('opened')) {
      chartButtonContainer[i].classList.remove('opened');
      categoryArrowOpen[i].style.display = 'none';
      categoryArrowClose[i].style.display = 'block';
    } else {
      chartButtonContainer[i].classList.add('opened');
      categoryArrowOpen[i].style.display = 'block';
      categoryArrowClose[i].style.display = 'none';
    }
  }
  ;
  categoryHeadingContainer[i].addEventListener('click', openOrCloseCategory);
};
for (var i = 0; i < categoryHeadingContainer.length; i++) {
  _loop(i);
}
;

// CHANGE PAGE TO SELECED DATA DASHBOARD
function loadFirstDataDashboard() {
  var dataSubPageContainer = document.querySelectorAll('.dataSubPageContainer');
  for (var _i = 0; _i < dataSubPageContainer.length; _i++) {
    dataSubPageContainer[_i].style.display = 'none';
  }
  ;
  // change the selection below for what to show when building
  var showThisContainer = document.querySelector('.volumePageContainer');
  showThisContainer.style.display = 'flex';
}
loadFirstDataDashboard();
function changeDisplayedDashboard(event) {
  var dataSubPageContainer = document.querySelectorAll('.dataSubPageContainer');
  for (var _i2 = 0; _i2 < dataSubPageContainer.length; _i2++) {
    dataSubPageContainer[_i2].style.display = 'none';
  }
  ;
  if (event.target.classList.contains('priceHolingsBtn')) {
    var priceContainer = document.querySelector('.priceContainer');
    priceContainer.style.display = 'flex';
  } else if (event.target.classList.contains('compareMarketCapBtn')) {
    var _compareMarketCapContainer = document.querySelector('.compareMarketCapContainer');
    _compareMarketCapContainer.style.display = 'flex';
  } else if (event.target.classList.contains('marketVolumeBtn')) {
    var volumePageContainer = document.querySelector('.volumePageContainer');
    volumePageContainer.style.display = 'flex';
  } else {
    console.log('no displayed charts available');
  }
}
;
var dataDashboardSelectionBtn = document.querySelectorAll('.dataDashboardSelectionBtn');
dataDashboardSelectionBtn.forEach(function (button) {
  button.addEventListener('click', changeDisplayedDashboard);
  button.addEventListener('click', openOrCloseCategoryList);
});

// START OF THE DATA PAGES -- START OF THE DATA PAGES -- START OF THE DATA PAGES
// START OF THE DATA PAGES -- START OF THE DATA PAGES -- START OF THE DATA PAGES

// the option for the intersection observer
var dataPageContainer = document.querySelectorAll('.dataSubPageContainer');
var dataPageOptions = {
  rootMargin: "0px",
  threshold: 0
};

// MARKETS PAGE -- CRYPTOCURRENCY PRICES // -- CRYPTOCURRENCY PRICES // CRYPTOCURRENCY PRICES
var marketsCryptoObserver = new IntersectionObserver(function (entries, marketsCryptoObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var changeChartScale = function changeChartScale(event) {
        if (event.target.classList.contains('autoChartOption')) {
          autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          chartScale = 'linear';
          displayedChart.options.scales.y.type = chartScale;
          displayedChart.update();
        } else {
          autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          chartScale = 'logarithmic';
          displayedChart.options.scales.y.type = chartScale;
          displayedChart.update();
        }
      };
      var getAssetList = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var response, assetListData, _iterator3, _step3, asset, assetID, listOptions, assetName;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch(assetListURL);
              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json();
              case 6:
                assetListData = _context2.sent;
                _iterator3 = _createForOfIteratorHelper(assetListData);
                _context2.prev = 8;
                _iterator3.s();
              case 10:
                if ((_step3 = _iterator3.n()).done) {
                  _context2.next = 27;
                  break;
                }
                asset = _step3.value;
                _context2.next = 14;
                return asset.id;
              case 14:
                assetID = _context2.sent;
                listOptions = document.createElement('option');
                listOptions.classList.add(assetID);

                // for the display name
                _context2.next = 19;
                return asset.name;
              case 19:
                assetName = _context2.sent;
                _context2.next = 22;
                return assetName;
              case 22:
                listOptions.value = _context2.sent;
                // add option onto the dropdown selection
                listOptions.appendChild(document.createTextNode(assetName));
                assetListEl.appendChild(listOptions);
              case 25:
                _context2.next = 10;
                break;
              case 27:
                _context2.next = 32;
                break;
              case 29:
                _context2.prev = 29;
                _context2.t0 = _context2["catch"](8);
                _iterator3.e(_context2.t0);
              case 32:
                _context2.prev = 32;
                _iterator3.f();
                return _context2.finish(32);
              case 35:
                _context2.next = 41;
                break;
              case 37:
                _context2.prev = 37;
                _context2.t1 = _context2["catch"](0);
                console.log(_context2.t1);
                console.log('cannot get list of assets from CoinGecko...');
              case 41:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 37], [8, 29, 32, 35]]);
        }));
        return function getAssetList() {
          return _ref2.apply(this, arguments);
        };
      }();
      // change asset
      var changeAsset = function changeAsset() {
        try {
          var changeDisplayedAsset = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var URL, response, data, priceAndTimeData, _iterator4, _step4, time, epochTimeframe, formattedDate, longTimeframe, timeframe, fetchedPriceData, _iterator5, _step5, price, prices, DataObject;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    URL = "https://api.coingecko.com/api/v3/coins/".concat(selectedAssetID, "/market_chart?vs_currency=usd&days=").concat(selectedTimePeriod);
                    _context3.next = 3;
                    return fetch(URL);
                  case 3:
                    response = _context3.sent;
                    _context3.next = 6;
                    return response.json();
                  case 6:
                    data = _context3.sent;
                    _context3.next = 9;
                    return data.prices;
                  case 9:
                    priceAndTimeData = _context3.sent;
                    // adding the fetched time to the chart
                    _iterator4 = _createForOfIteratorHelper(priceAndTimeData);
                    _context3.prev = 11;
                    _iterator4.s();
                  case 13:
                    if ((_step4 = _iterator4.n()).done) {
                      _context3.next = 24;
                      break;
                    }
                    time = _step4.value;
                    _context3.next = 17;
                    return time[0];
                  case 17:
                    epochTimeframe = _context3.sent;
                    formattedDate = new Date(epochTimeframe);
                    longTimeframe = formattedDate.toUTCString();
                    timeframe = longTimeframe.substring(4, 16);
                    chartTime.push(timeframe);
                  case 22:
                    _context3.next = 13;
                    break;
                  case 24:
                    _context3.next = 29;
                    break;
                  case 26:
                    _context3.prev = 26;
                    _context3.t0 = _context3["catch"](11);
                    _iterator4.e(_context3.t0);
                  case 29:
                    _context3.prev = 29;
                    _iterator4.f();
                    return _context3.finish(29);
                  case 32:
                    ;
                    displayedChart.data.labels = chartTime;

                    // adding the fetched price to the chart
                    fetchedPriceData = [];
                    _iterator5 = _createForOfIteratorHelper(priceAndTimeData);
                    _context3.prev = 36;
                    _iterator5.s();
                  case 38:
                    if ((_step5 = _iterator5.n()).done) {
                      _context3.next = 46;
                      break;
                    }
                    price = _step5.value;
                    _context3.next = 42;
                    return price[1];
                  case 42:
                    prices = _context3.sent;
                    fetchedPriceData.push(prices);
                  case 44:
                    _context3.next = 38;
                    break;
                  case 46:
                    _context3.next = 51;
                    break;
                  case 48:
                    _context3.prev = 48;
                    _context3.t1 = _context3["catch"](36);
                    _iterator5.e(_context3.t1);
                  case 51:
                    _context3.prev = 51;
                    _iterator5.f();
                    return _context3.finish(51);
                  case 54:
                    ;
                    DataObject = {
                      label: "Price of ".concat(selectedAssetName),
                      data: fetchedPriceData,
                      fill: false,
                      pointRadius: 0,
                      borderWidth: 1,
                      backgroundColor: '#FFFFFF',
                      borderColor: '#FFFFFF',
                      yAxisID: 'y'
                    };
                    assetPriceData.push(DataObject);
                    displayedChart.data.datasets = assetPriceData;

                    // update the chart with data and time
                    displayedChart.update();
                  case 59:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[11, 26, 29, 32], [36, 48, 51, 54]]);
            }));
            return function changeDisplayedAsset() {
              return _ref3.apply(this, arguments);
            };
          }();
          // clear old chart history
          assetPriceData = [];
          chartTime = [];
          selectedAssetID = '';
          selectedAssetName = '';

          // change the data on the chart
          var _changeAssetEl = document.querySelector('.assetList');
          var selectedOption = _changeAssetEl.options[_changeAssetEl.selectedIndex];
          selectedAssetName = selectedOption.value;
          selectedAssetID = selectedOption.classList[0];
          ;
          changeDisplayedAsset();
        } catch (error) {
          console.log('Could not add new asset to chart....');
        }
      };
      // change timeframe
      var changeTimeframe = function changeTimeframe() {
        try {
          var fetchNewTimeframe = /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var URL, response, data, priceAndTimeData, _iterator6, _step6, time, epochTimeframe, formattedDate, longTimeframe, timeframe, fetchedPriceData, _iterator7, _step7, price, prices, DataObject;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    URL = "https://api.coingecko.com/api/v3/coins/".concat(selectedAssetID, "/market_chart?vs_currency=usd&days=").concat(selectedTimePeriod);
                    _context4.next = 3;
                    return fetch(URL);
                  case 3:
                    response = _context4.sent;
                    _context4.next = 6;
                    return response.json();
                  case 6:
                    data = _context4.sent;
                    _context4.next = 9;
                    return data.prices;
                  case 9:
                    priceAndTimeData = _context4.sent;
                    // adding the newly fetched time to the chart
                    _iterator6 = _createForOfIteratorHelper(priceAndTimeData);
                    _context4.prev = 11;
                    _iterator6.s();
                  case 13:
                    if ((_step6 = _iterator6.n()).done) {
                      _context4.next = 24;
                      break;
                    }
                    time = _step6.value;
                    _context4.next = 17;
                    return time[0];
                  case 17:
                    epochTimeframe = _context4.sent;
                    formattedDate = new Date(epochTimeframe);
                    longTimeframe = formattedDate.toUTCString();
                    timeframe = longTimeframe.substring(4, 16);
                    chartTime.push(timeframe);
                  case 22:
                    _context4.next = 13;
                    break;
                  case 24:
                    _context4.next = 29;
                    break;
                  case 26:
                    _context4.prev = 26;
                    _context4.t0 = _context4["catch"](11);
                    _iterator6.e(_context4.t0);
                  case 29:
                    _context4.prev = 29;
                    _iterator6.f();
                    return _context4.finish(29);
                  case 32:
                    displayedChart.data.labels = chartTime;

                    // adding the fetched price to the chart
                    fetchedPriceData = [];
                    _iterator7 = _createForOfIteratorHelper(priceAndTimeData);
                    _context4.prev = 35;
                    _iterator7.s();
                  case 37:
                    if ((_step7 = _iterator7.n()).done) {
                      _context4.next = 45;
                      break;
                    }
                    price = _step7.value;
                    _context4.next = 41;
                    return price[1];
                  case 41:
                    prices = _context4.sent;
                    fetchedPriceData.push(prices);
                  case 43:
                    _context4.next = 37;
                    break;
                  case 45:
                    _context4.next = 50;
                    break;
                  case 47:
                    _context4.prev = 47;
                    _context4.t1 = _context4["catch"](35);
                    _iterator7.e(_context4.t1);
                  case 50:
                    _context4.prev = 50;
                    _iterator7.f();
                    return _context4.finish(50);
                  case 53:
                    ;
                    DataObject = {
                      label: "Price of ".concat(selectedAssetName),
                      data: fetchedPriceData,
                      fill: false,
                      pointRadius: 0,
                      borderWidth: 1,
                      backgroundColor: '#FFFFFF',
                      borderColor: '#FFFFFF',
                      yAxisID: 'y'
                    };
                    assetPriceData.push(DataObject);
                    displayedChart.data.datasets = assetPriceData;

                    // update the chart with data and time
                    displayedChart.update();
                  case 58:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, null, [[11, 26, 29, 32], [35, 47, 50, 53]]);
            }));
            return function fetchNewTimeframe() {
              return _ref4.apply(this, arguments);
            };
          }();
          selectedTimePeriod = '';
          assetPriceData = [];
          chartTime = [];
          var timeframeList = document.querySelector('.timeframeList');
          selectedTimePeriod = timeframeList.value;
          fetchNewTimeframe();
        } catch (error) {
          console.log('could not fetch new timeframe data...');
        }
      };
      // CODE FOR CHANGING THE CHART SCALE
      var chartScale = 'linear'; //logarithmic or linear
      var autoChartOption = document.querySelector('.autoChartOption');
      autoChartOption.addEventListener('click', changeChartScale);
      var logChartOption = document.querySelector('.logChartOption');
      logChartOption.addEventListener('click', changeChartScale);
      ;

      // variables for the chart
      var chartTime = []; //fetched data
      var selectedTimePeriod = '365';
      var assetPriceData = []; //fetched data
      var selectedAssetID = 'bitcoin';
      var selectedAssetName = 'Bitcoin';

      // fetch initial data
      try {
        var fetchData = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var URL, response, data, priceAndTimeData, _iterator, _step, time, epochTimeframe, formattedDate, longTimeframe, timeframe, fetchedPriceData, _iterator2, _step2, price, prices, DataObject;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  URL = "https://api.coingecko.com/api/v3/coins/".concat(selectedAssetID, "/market_chart?vs_currency=usd&days=").concat(selectedTimePeriod);
                  _context.next = 3;
                  return fetch(URL);
                case 3:
                  response = _context.sent;
                  _context.next = 6;
                  return response.json();
                case 6:
                  data = _context.sent;
                  _context.next = 9;
                  return data.prices;
                case 9:
                  priceAndTimeData = _context.sent;
                  // adding the fetched time to the chart
                  _iterator = _createForOfIteratorHelper(priceAndTimeData);
                  _context.prev = 11;
                  _iterator.s();
                case 13:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 24;
                    break;
                  }
                  time = _step.value;
                  _context.next = 17;
                  return time[0];
                case 17:
                  epochTimeframe = _context.sent;
                  formattedDate = new Date(epochTimeframe);
                  longTimeframe = formattedDate.toUTCString();
                  timeframe = longTimeframe.substring(5, 16);
                  chartTime.push(timeframe);
                case 22:
                  _context.next = 13;
                  break;
                case 24:
                  _context.next = 29;
                  break;
                case 26:
                  _context.prev = 26;
                  _context.t0 = _context["catch"](11);
                  _iterator.e(_context.t0);
                case 29:
                  _context.prev = 29;
                  _iterator.f();
                  return _context.finish(29);
                case 32:
                  ;
                  displayedChart.data.labels = chartTime;

                  // adding the fetched price to the chart
                  fetchedPriceData = [];
                  _iterator2 = _createForOfIteratorHelper(priceAndTimeData);
                  _context.prev = 36;
                  _iterator2.s();
                case 38:
                  if ((_step2 = _iterator2.n()).done) {
                    _context.next = 46;
                    break;
                  }
                  price = _step2.value;
                  _context.next = 42;
                  return price[1];
                case 42:
                  prices = _context.sent;
                  fetchedPriceData.push(prices);
                case 44:
                  _context.next = 38;
                  break;
                case 46:
                  _context.next = 51;
                  break;
                case 48:
                  _context.prev = 48;
                  _context.t1 = _context["catch"](36);
                  _iterator2.e(_context.t1);
                case 51:
                  _context.prev = 51;
                  _iterator2.f();
                  return _context.finish(51);
                case 54:
                  ;
                  DataObject = {
                    label: "Price of ".concat(selectedAssetName),
                    data: fetchedPriceData,
                    fill: false,
                    pointRadius: 0,
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    borderColor: '#FFFFFF',
                    yAxisID: 'y'
                  };
                  assetPriceData.push(DataObject);
                  displayedChart.data.datasets = assetPriceData;

                  // update the chart with data and time
                  displayedChart.update();
                case 59:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[11, 26, 29, 32], [36, 48, 51, 54]]);
          }));
          return function fetchData() {
            return _ref.apply(this, arguments);
          };
        }();
        fetchData();
      } catch (error) {
        console.log('could not fetch initial data...');
      }

      // generate list of assets
      var assetListURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
      var assetListEl = document.querySelector('.assetList');
      var addDataButton = document.querySelector('.addDataButton');
      getAssetList();
      var changeAssetEl = document.querySelector('.assetList');
      changeAssetEl.addEventListener('change', changeAsset);
      var selectedTimePeriodEl = document.querySelector('.timeframeList');
      selectedTimePeriodEl.addEventListener('change', changeTimeframe);

      // CODE FOR THE CHART.JS LIBRARY
      var ctx = document.querySelector('.marketCryptoPrice');
      var displayedChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartTime,
          datasets: assetPriceData
        },
        options: {
          type: chartScale,
          display: true,
          position: 'left',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                color: '#232323'
              },
              ticks: {
                // Include a dollar sign in the ticks
                callback: function callback(value, index, values) {
                  return '$' + value.toLocaleString("en-US");
                }
              }
            }
          }
        }
      });
      // end of the Intersection Observer
    }
    ;
  });
}, dataPageOptions);
var marketCryptoPriceContainer = document.querySelector('.marketCryptocurrrencyChartContainer');
marketsCryptoObserver.observe(marketCryptoPriceContainer);

// MARKETS PAGE -- PUBLIC EXCHANGES, STAKERS & MINERS // MARKETS PAGE -- PUBLIC EXCHANGES, STAKERS & MINERS
var marketsStocksObserver = new IntersectionObserver(function (entries, marketsStocksObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var changeChartScale = function changeChartScale(event) {
        if (event.target.classList.contains('autoChartOption')) {
          autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          chartScale = 'linear';
          stockPriceChart.options.scales.y.type = chartScale;
          stockPriceChart.update();
        } else {
          autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          chartScale = 'logarithmic';
          stockPriceChart.options.scales.y.type = chartScale;
          stockPriceChart.update();
        }
      };
      // Time Series (Daily), Weekly Adjusted Time Series
      // function to initially fetch the data
      var fetchData = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var options, URL, response, data, unorderedTimeframeData, timeSeriesData, time, priceSeriesData, allPriceDataObject, _i3, allPrices, closePrices, closePrice, dataObject;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                options = {
                  method: 'GET',
                  headers: {
                    'X-RapidAPI-Key': '5abcde3910mshe635fb57c055c0fp10d768jsna1801b9b4a77',
                    'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
                  }
                }; // Creating the URL and fetching the data
                URL = "https://www.alphavantage.co/query?function=".concat(timeframe, "&symbol=").concat(ticker, "&apikey=").concat(myAPIkey);
                _context5.next = 5;
                return fetch(URL);
              case 5:
                response = _context5.sent;
                _context5.next = 8;
                return response.json();
              case 8:
                data = _context5.sent;
                // to fetch timeframe
                timeframeData = [];
                unorderedTimeframeData = [];
                _context5.next = 13;
                return data["".concat(timeSeries)];
              case 13:
                timeSeriesData = _context5.sent;
                for (time in timeSeriesData) {
                  unorderedTimeframeData.push(time);
                }
                timeframeData = unorderedTimeframeData.reverse();
                stockPriceChart.data.labels = timeframeData;

                // to fetch price data
                stockPriceData = [];
                reversedFetchedPrice = [];
                fetchedPriceData = [];
                _context5.next = 22;
                return data["".concat(timeSeries)];
              case 22:
                priceSeriesData = _context5.sent;
                allPriceDataObject = Object.values(priceSeriesData);
                for (_i3 = 0; _i3 < allPriceDataObject.length; _i3++) {
                  allPrices = allPriceDataObject["".concat(_i3)];
                  closePrices = Object.values(allPrices);
                  closePrice = Number(closePrices[4]);
                  reversedFetchedPrice.push(closePrice);
                }
                ;
                fetchedPriceData = reversedFetchedPrice.reverse();
                dataObject = {
                  label: "Price of ".concat(ticker),
                  data: fetchedPriceData,
                  fill: false,
                  pointRadius: 0,
                  borderWidth: 1,
                  backgroundColor: '#FFFFFF',
                  borderColor: '#FFFFFF',
                  yAxisID: 'y'
                };
                stockPriceData.push(dataObject);
                stockPriceChart.data.datasets = stockPriceData;

                // update chart
                stockPriceChart.update();
                _context5.next = 37;
                break;
              case 33:
                _context5.prev = 33;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);
                console.log('could not fetch data');
              case 37:
                ;
              case 38:
              case "end":
                return _context5.stop();
            }
          }, _callee5, null, [[0, 33]]);
        }));
        return function fetchData() {
          return _ref5.apply(this, arguments);
        };
      }();
      var fetchStockList = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
          var changeColorOfInvestmentChart, URL, response, data, stockName, stockList, arrayNumber, _iterator8, _step8, names, optionEl, nameOfStock, fullTicker, justTicker, singleticker, publicStockHoldingFullName, selectedStock, publicStockHoldingTicker, nameofSelectedCryptoPublicCompany, UpperCaseSelectedAsset, firstCompanydata, companyTotalCryptoHoldings, unformattedTotalCryptoHoldings, totalCryptoHoldings, companyTotalUSDholdings, unformattedUsdHoldings, totalUsdHoldings, percentOfTotalSupply, InitialInvestmentValue;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                changeColorOfInvestmentChart = function changeColorOfInvestmentChart() {
                  if (InitialInvestmentValue < currentInvestmentValue) {
                    backgroundColor = 'rgb(0,255,0, 0.15)';
                  } else {
                    backgroundColor = 'rgb(255,0,0, 0.15)';
                  }
                  publicCompanyInvestmentReturns.data.datasets.forEach(function (data) {
                    data.backgroundColor = backgroundColor;
                  });
                };
                URL = "https://api.coingecko.com/api/v3/companies/public_treasury/".concat(selectedAsset);
                _context6.next = 5;
                return fetch(URL);
              case 5:
                response = _context6.sent;
                _context6.next = 8;
                return response.json();
              case 8:
                data = _context6.sent;
                _context6.next = 11;
                return data['companies'];
              case 11:
                stockName = _context6.sent;
                stockList = document.querySelector('.stockList');
                arrayNumber = 0;
                stockList.innerHTML = '';
                _iterator8 = _createForOfIteratorHelper(stockName);
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    names = _step8.value;
                    // create the element for the drop down list
                    optionEl = document.createElement('option');
                    optionEl.classList.add(arrayNumber);
                    arrayNumber++;
                    nameOfStock = names['name'];
                    optionEl.appendChild(document.createTextNode(nameOfStock));
                    fullTicker = names['symbol'];
                    justTicker = fullTicker.split(':').pop();
                    singleticker = justTicker.trim(); // change necessary ticker names
                    if (singleticker == 'Hut-8') {
                      singleticker = 'HUT';
                    } else if (singleticker == '3659') {
                      singleticker = 'NEXOF';
                    } else if (singleticker == 'VYGR') {
                      singleticker = 'VYGVQ';
                    } else if (singleticker == 'BIGG') {
                      singleticker = 'BBKCF';
                    } else if (singleticker == 'DCC') {
                      singleticker = 'DGGXF';
                    } else if (singleticker == 'FORT') {
                      singleticker = 'FRTTF';
                    } else if (singleticker == 'MODE') {
                      singleticker = 'MODGF';
                    } else if (singleticker == 'DASH') {
                      singleticker = 'NPPTF';
                    }
                    optionEl.value = singleticker;

                    // if function to remove unnecessary stocks from the list
                    if (singleticker !== '1357' && singleticker !== 'AKER' && singleticker !== 'HODL' && singleticker !== 'BROOK') {
                      stockList.appendChild(optionEl);
                    }
                    ;
                  }

                  // fetch the data on the text section
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
                publicStockHoldingFullName = document.querySelector('.publicStockHoldingFullName');
                selectedStock = stockList.options[stockList.selectedIndex].text;
                publicStockHoldingFullName.innerHTML = selectedStock;
                publicStockHoldingTicker = document.querySelector('.publicStockHoldingTicker');
                publicStockHoldingTicker.innerHTML = stockList.value;
                nameofSelectedCryptoPublicCompany = document.querySelector('.nameofSelectedCryptoPublicCompany');
                UpperCaseSelectedAsset = selectedAsset.charAt(0).toUpperCase() + selectedAsset.slice(1);
                nameofSelectedCryptoPublicCompany.innerHTML = UpperCaseSelectedAsset;

                // fetch the total holding data
                _context6.next = 27;
                return data['companies'][0];
              case 27:
                firstCompanydata = _context6.sent;
                companyTotalCryptoHoldings = document.querySelector('.companyTotalCryptoHoldings');
                _context6.next = 31;
                return firstCompanydata['total_holdings'];
              case 31:
                unformattedTotalCryptoHoldings = _context6.sent;
                totalCryptoHoldings = unformattedTotalCryptoHoldings.toLocaleString();
                companyTotalCryptoHoldings.innerHTML = totalCryptoHoldings;
                companyTotalUSDholdings = document.querySelector('.companyTotalUSDholdings');
                _context6.next = 37;
                return firstCompanydata['total_current_value_usd'];
              case 37:
                unformattedUsdHoldings = _context6.sent;
                totalUsdHoldings = unformattedUsdHoldings.toLocaleString();
                companyTotalUSDholdings.innerHTML = totalUsdHoldings;

                // fetch the dominance and total supply
                percentOfTotalSupply = document.querySelector('.publicCompanyMarketCapDominance');
                percentOfTotalSupply.innerHTML = firstCompanydata['percentage_of_total_supply'];

                // fetch the investment returns
                _context6.next = 44;
                return stockName[0]['total_entry_value_usd'];
              case 44:
                InitialInvestmentValue = _context6.sent;
                _context6.next = 47;
                return stockName[0]['total_current_value_usd'];
              case 47:
                let = currentInvestmentValue = _context6.sent;
                publicCompanyInvestmentReturns.data.datasets.forEach(function (data) {
                  data.data.push(InitialInvestmentValue);
                  data.data.push(currentInvestmentValue);
                });
                ;
                changeColorOfInvestmentChart();
                publicCompanyInvestmentReturns.update();
                _context6.next = 58;
                break;
              case 54:
                _context6.prev = 54;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);
                console.log('Could not fetch the list of stocks...');
              case 58:
              case "end":
                return _context6.stop();
            }
          }, _callee6, null, [[0, 54]]);
        }));
        return function fetchStockList() {
          return _ref6.apply(this, arguments);
        };
      }();
      // function to initially fetch the stock names and company data
      var changeTimeframe = function changeTimeframe() {
        if (publicStockChartTimeframe.value == 'TIME_SERIES_DAILY_ADJUSTED') {
          timeSeries = 'Time Series (Daily)'; // Time Series (Daily), Weekly Adjusted Time Series
          timeframe = publicStockChartTimeframe.value;
        } else {
          timeSeries = 'Weekly Adjusted Time Series'; // Time Series (Daily), Weekly Adjusted Time Series
          timeframe = publicStockChartTimeframe.value;
        }
        fetchData();
        changeHeldAsset();
        fetchStockList();
      };
      // change the displayed stock data and price action
      var changeDisplayedStock = function changeDisplayedStock() {
        // for the stock chart
        var listOfCryptoCompanies = document.querySelector('.listOfCryptoCompanies');
        var selectedStockTicker = listOfCryptoCompanies.value;
        ticker = selectedStockTicker;
        fetchData();

        // change company full name and ticker symbol
        var selectedStock = listOfCryptoCompanies.options[listOfCryptoCompanies.selectedIndex].text;
        var publicStockHoldingFullName = document.querySelector('.publicStockHoldingFullName');
        publicStockHoldingFullName.innerHTML = selectedStock;
        var publicStockHoldingTicker = document.querySelector('.publicStockHoldingTicker');
        publicStockHoldingTicker.innerHTML = listOfCryptoCompanies.value;
        var nameofSelectedCryptoPublicCompany = document.querySelector('.nameofSelectedCryptoPublicCompany');
        nameofSelectedCryptoPublicCompany.innerHTML = selectedAsset.charAt(0).toUpperCase() + selectedAsset.slice(1);

        // change the company holdings and % of total supply
        function reFetchCompanyData() {
          return _reFetchCompanyData.apply(this, arguments);
        }
        function _reFetchCompanyData() {
          _reFetchCompanyData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var URL, response, data, selectedStockEl, selectedStockOrderValue, stockNumberInArray, companyCryptoHoldings, companyTotalCryptoHoldings, companyUsdHoldings, companyTotalUsdHoldings, percentOfTotalSupply, percentOfTotalSupplyEl, initialInvestmentValue, _currentInvestmentValue;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  URL = "https://api.coingecko.com/api/v3/companies/public_treasury/".concat(selectedAsset);
                  _context7.next = 4;
                  return fetch(URL);
                case 4:
                  response = _context7.sent;
                  _context7.next = 7;
                  return response.json();
                case 7:
                  data = _context7.sent;
                  // for the stock number within the list
                  selectedStockEl = listOfCryptoCompanies.options[listOfCryptoCompanies.selectedIndex];
                  selectedStockOrderValue = Array.from(selectedStockEl.classList);
                  stockNumberInArray = selectedStockOrderValue.toString(); // the crypto holdings
                  _context7.next = 13;
                  return data['companies'][stockNumberInArray]['total_holdings'];
                case 13:
                  companyCryptoHoldings = _context7.sent;
                  companyTotalCryptoHoldings = document.querySelector('.companyTotalCryptoHoldings');
                  companyTotalCryptoHoldings.innerHTML = companyCryptoHoldings.toLocaleString();
                  // the holdings in USD
                  _context7.next = 18;
                  return data['companies'][stockNumberInArray]['total_current_value_usd'];
                case 18:
                  companyUsdHoldings = _context7.sent;
                  companyTotalUsdHoldings = document.querySelector('.companyTotalUSDholdings');
                  companyTotalUsdHoldings.innerHTML = companyUsdHoldings.toLocaleString();

                  // the % of total supply
                  _context7.next = 23;
                  return data['companies'][stockNumberInArray]['percentage_of_total_supply'];
                case 23:
                  percentOfTotalSupply = _context7.sent;
                  percentOfTotalSupplyEl = document.querySelector('.publicCompanyMarketCapDominance');
                  percentOfTotalSupplyEl.innerHTML = percentOfTotalSupply;

                  // the investment value
                  investmentAmounts = [];
                  _context7.next = 29;
                  return data['companies'][stockNumberInArray]['total_entry_value_usd'];
                case 29:
                  initialInvestmentValue = _context7.sent;
                  _context7.next = 32;
                  return data['companies'][stockNumberInArray]['total_current_value_usd'];
                case 32:
                  _currentInvestmentValue = _context7.sent;
                  investmentAmounts.push(initialInvestmentValue);
                  investmentAmounts.push(_currentInvestmentValue);
                  publicCompanyInvestmentReturns.data.datasets[0].data = investmentAmounts;
                  if (initialInvestmentValue < _currentInvestmentValue) {
                    backgroundColor = 'rgb(0,255,0, 0.15)';
                  } else {
                    backgroundColor = 'rgb(255,0,0, 0.15)';
                  }
                  publicCompanyInvestmentReturns.data.datasets[0].backgroundColor = backgroundColor;
                  publicCompanyInvestmentReturns.update();
                  _context7.next = 45;
                  break;
                case 41:
                  _context7.prev = 41;
                  _context7.t0 = _context7["catch"](0);
                  console.log(_context7.t0);
                  console.log('Could not change displayed stock info...');
                case 45:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, null, [[0, 41]]);
          }));
          return _reFetchCompanyData.apply(this, arguments);
        }
        ;
        reFetchCompanyData();
      };
      var changeHeldAsset = function changeHeldAsset(event) {
        var chartBTCButton = document.querySelector('.chartBTCButton');
        var chartETHButton = document.querySelector('.chartETHButton');
        if (event.target.value == 'bitcoin') {
          chartBTCButton.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          chartETHButton.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          selectedAsset = event.target.value;
          changeDisplayedStock();
        } else {
          chartBTCButton.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          chartETHButton.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          selectedAsset = event.target.value;
          changeDisplayedStock();
        }
      };
      var myAPIkey = 'GH9DTBAMAJL2HKD1';

      // CODE FOR CHANGING THE CHART SCALE
      var chartScale = 'logarithmic'; //logarithmic or linear
      var autoChartOption = document.querySelector('.stockAutoChartOption');
      autoChartOption.addEventListener('click', changeChartScale);
      var logChartOption = document.querySelector('.stockLogChartOption');
      logChartOption.addEventListener('click', changeChartScale);
      ;

      // variables for price, time, and ticker
      var timeframeData = [];
      var stockPriceData = [];
      var reversedFetchedPrice = [];
      var fetchedPriceData = [];
      var ticker = 'MSTR';

      // INVESTMENT RETURN DATA AND CHART
      var selectedAsset = 'bitcoin';
      var investmentAmounts = [];
      var backgroundColor = 'rgb(255,255,255, 0.15)';
      var timeframe = 'TIME_SERIES_DAILY_ADJUSTED'; // TIME_SERIES_DAILY_ADJUSTED, TIME_SERIES_WEEKLY_ADJUSTED
      var timeSeries = 'Time Series (Daily)';
      ;
      fetchData();
      ;
      fetchStockList();
      ;
      var publicStockChartTimeframe = document.querySelector('.publicStockTimeframeSelection');
      publicStockChartTimeframe.addEventListener('change', changeTimeframe);
      ;
      var listOfCryptoCompanies = document.querySelector('.listOfCryptoCompanies');
      listOfCryptoCompanies.addEventListener('change', changeDisplayedStock);

      // if the user changes the held asset
      var heldAssetByPublicCompanies = document.querySelectorAll('.heldAssetByPublicCompanies');
      ;
      heldAssetByPublicCompanies.forEach(function (asset) {
        asset.addEventListener('click', changeHeldAsset);
      });

      // CODE FOR THE MAIN PRICE CHART
      var stockPriceCanvas = document.querySelector('.marketStockPrice');
      var stockPriceChart = new Chart(stockPriceCanvas, {
        type: 'line',
        data: {
          labels: timeframeData,
          datasets: stockPriceData
        },
        options: {
          type: chartScale,
          display: true,
          position: 'left',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                color: '#232323'
              },
              ticks: {
                callback: function callback(value, index, values) {
                  return '$' + value.toLocaleString("en-US");
                }
              }
            }
          }
        }
      });

      // CODE FOR THE INVESTMENT RETURN CHART
      var investmentReturnChart = document.querySelector('.publicStockAssetHoldingChart');
      var publicCompanyInvestmentReturns = new Chart(investmentReturnChart, {
        type: 'line',
        data: {
          labels: ['Initial Investment', 'Current Value'],
          datasets: [{
            label: 'Gain/Loss',
            data: investmentAmounts,
            fill: true,
            pointRadius: 0,
            borderWidth: 1,
            backgroundColor: backgroundColor,
            borderColor: '#FFFFFF'
          }]
        },
        options: {
          type: 'logarithmic',
          display: true,
          position: 'left',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                color: '#232323'
              },
              ticks: {
                beginAtZero: false,
                callback: function callback(value, index, values) {
                  return '$' + value / 1e6 + ' ' + 'M';
                }
              }
            }
          }
        }
      });
      window.addEventListener("resize", function (event) {
        var publicStockAssetHoldingChart = document.querySelector('.publicStockAssetHoldingChart');
        publicStockAssetHoldingChart.style.width = '100%';
      });

      // End of the if statement for the intersection observer
    }
  });
}, dataPageOptions);
var marketPublicstockChartContainer = document.querySelector('.marketPublicstockChartContainer');
marketsStocksObserver.observe(marketPublicstockChartContainer);

// MARKETS PAGE -- COMPARE MARKET CAPS // COMPARE MARKET CAPS // COMPARE MARKET CAPS
var marketsCompareMarketCapObserver = new IntersectionObserver(function (entries, marketsCompareMarketCapObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var changeChartScale = function changeChartScale(event) {
        if (event.target.classList.contains('autoChartOption')) {
          autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          chartScale = 'linear';
          displayedChart.options.scales.y.type = chartScale;
          displayedChart.update();
        } else {
          autoChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.2)';
          logChartOption.style.backgroundColor = 'rgb(128, 128, 128, 0.6)';
          chartScale = 'logarithmic';
          displayedChart.options.scales.y.type = chartScale;
          displayedChart.update();
        }
      };
      // fetch initial data
      var fetchData = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
          var URLOne, responseOne, dataOne, marketcapAndTimeDataOne, URLTwo, responseTwo, dataTwo, marketcapAndTimeDataTwo, _iterator9, _step9, time, epochTimeframe, formattedDate, longTimeframe, timeframe, fetchedPriceData, _iterator10, _step10, marketCap, marketCaps, DataObject, missingZeroValues, fetchedPriceDataTwo, _i4, _iterator11, _step11, _marketCap, _marketCaps, DataObjectTwo, _iterator12, _step12, _time, _epochTimeframe, _formattedDate, _longTimeframe, _timeframe, _fetchedPriceData, _missingZeroValues, _i5, _iterator13, _step13, _marketCap2, _marketCaps2, _DataObject, _fetchedPriceDataTwo, _iterator14, _step14, _marketCap3, _marketCaps3, _DataObjectTwo;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                // FETCH ASSET 1 DATA -- FETCH ASSET 1 DATA 
                URLOne = "https://api.coingecko.com/api/v3/coins/".concat(firstSelectedAssetID, "/market_chart?vs_currency=usd&days=").concat(selectedTimePeriod);
                _context8.next = 4;
                return fetch(URLOne);
              case 4:
                responseOne = _context8.sent;
                _context8.next = 7;
                return responseOne.json();
              case 7:
                dataOne = _context8.sent;
                _context8.next = 10;
                return dataOne.market_caps;
              case 10:
                marketcapAndTimeDataOne = _context8.sent;
                // FETCH ASSET 2 DATA -- FETCH ASSET 2 DATA
                URLTwo = "https://api.coingecko.com/api/v3/coins/".concat(secondSelectedAssetID, "/market_chart?vs_currency=usd&days=").concat(selectedTimePeriod);
                _context8.next = 14;
                return fetch(URLTwo);
              case 14:
                responseTwo = _context8.sent;
                _context8.next = 17;
                return responseTwo.json();
              case 17:
                dataTwo = _context8.sent;
                _context8.next = 20;
                return dataTwo.market_caps;
              case 20:
                marketcapAndTimeDataTwo = _context8.sent;
                if (!(marketcapAndTimeDataOne.length > marketcapAndTimeDataTwo.length)) {
                  _context8.next = 98;
                  break;
                }
                // clear old data from chart
                chartTime = [];
                assetPriceData = [];

                // adding the fetched time to the chart
                _iterator9 = _createForOfIteratorHelper(marketcapAndTimeDataOne);
                _context8.prev = 25;
                _iterator9.s();
              case 27:
                if ((_step9 = _iterator9.n()).done) {
                  _context8.next = 38;
                  break;
                }
                time = _step9.value;
                _context8.next = 31;
                return time[0];
              case 31:
                epochTimeframe = _context8.sent;
                formattedDate = new Date(epochTimeframe);
                longTimeframe = formattedDate.toUTCString();
                timeframe = longTimeframe.substring(5, 16);
                chartTime.push(timeframe);
              case 36:
                _context8.next = 27;
                break;
              case 38:
                _context8.next = 43;
                break;
              case 40:
                _context8.prev = 40;
                _context8.t0 = _context8["catch"](25);
                _iterator9.e(_context8.t0);
              case 43:
                _context8.prev = 43;
                _iterator9.f();
                return _context8.finish(43);
              case 46:
                ;

                // ADD ASSET 1 DATA -- ADD ASSET 1 DATA
                fetchedPriceData = [];
                _iterator10 = _createForOfIteratorHelper(marketcapAndTimeDataOne);
                _context8.prev = 49;
                _iterator10.s();
              case 51:
                if ((_step10 = _iterator10.n()).done) {
                  _context8.next = 59;
                  break;
                }
                marketCap = _step10.value;
                _context8.next = 55;
                return marketCap[1];
              case 55:
                marketCaps = _context8.sent;
                fetchedPriceData.push(marketCaps);
              case 57:
                _context8.next = 51;
                break;
              case 59:
                _context8.next = 64;
                break;
              case 61:
                _context8.prev = 61;
                _context8.t1 = _context8["catch"](49);
                _iterator10.e(_context8.t1);
              case 64:
                _context8.prev = 64;
                _iterator10.f();
                return _context8.finish(64);
              case 67:
                ;
                DataObject = {
                  label: "Price of ".concat(firstSelectedAssetName),
                  data: fetchedPriceData,
                  fill: false,
                  pointRadius: 0,
                  borderWidth: 1,
                  backgroundColor: '#FFFFFF',
                  borderColor: '#FFFFFF',
                  yAxisID: 'y'
                };
                assetPriceData.push(DataObject);

                // ADD ASSET 2 DATA -- ADD ASSET 2 DATA
                missingZeroValues = marketcapAndTimeDataOne.length - marketcapAndTimeDataTwo.length;
                fetchedPriceDataTwo = [];
                for (_i4 = 0; _i4 < missingZeroValues; _i4++) {
                  fetchedPriceDataTwo.push('');
                }
                ;
                _iterator11 = _createForOfIteratorHelper(marketcapAndTimeDataTwo);
                _context8.prev = 75;
                _iterator11.s();
              case 77:
                if ((_step11 = _iterator11.n()).done) {
                  _context8.next = 85;
                  break;
                }
                _marketCap = _step11.value;
                _context8.next = 81;
                return _marketCap[1];
              case 81:
                _marketCaps = _context8.sent;
                fetchedPriceDataTwo.push(_marketCaps);
              case 83:
                _context8.next = 77;
                break;
              case 85:
                _context8.next = 90;
                break;
              case 87:
                _context8.prev = 87;
                _context8.t2 = _context8["catch"](75);
                _iterator11.e(_context8.t2);
              case 90:
                _context8.prev = 90;
                _iterator11.f();
                return _context8.finish(90);
              case 93:
                ;
                DataObjectTwo = {
                  label: "Price of ".concat(secondSelectedAssetName),
                  data: fetchedPriceDataTwo,
                  fill: false,
                  pointRadius: 0,
                  borderWidth: 1,
                  backgroundColor: '#FF0000',
                  borderColor: '#FF0000',
                  yAxisID: 'y'
                };
                assetPriceData.push(DataObjectTwo);
                _context8.next = 172;
                break;
              case 98:
                // clear old data from chart
                chartTime = [];
                assetPriceData = [];

                // adding the fetched time to the chart
                _iterator12 = _createForOfIteratorHelper(marketcapAndTimeDataTwo);
                _context8.prev = 101;
                _iterator12.s();
              case 103:
                if ((_step12 = _iterator12.n()).done) {
                  _context8.next = 114;
                  break;
                }
                _time = _step12.value;
                _context8.next = 107;
                return _time[0];
              case 107:
                _epochTimeframe = _context8.sent;
                _formattedDate = new Date(_epochTimeframe);
                _longTimeframe = _formattedDate.toUTCString();
                _timeframe = _longTimeframe.substring(5, 16);
                chartTime.push(_timeframe);
              case 112:
                _context8.next = 103;
                break;
              case 114:
                _context8.next = 119;
                break;
              case 116:
                _context8.prev = 116;
                _context8.t3 = _context8["catch"](101);
                _iterator12.e(_context8.t3);
              case 119:
                _context8.prev = 119;
                _iterator12.f();
                return _context8.finish(119);
              case 122:
                ;

                // ADD ASSET 1 DATA -- ADD ASSET 1 DATA
                _fetchedPriceData = [];
                _missingZeroValues = marketcapAndTimeDataTwo.length - marketcapAndTimeDataOne.length;
                for (_i5 = 0; _i5 < _missingZeroValues; _i5++) {
                  _fetchedPriceData.push('');
                }
                ;
                _iterator13 = _createForOfIteratorHelper(marketcapAndTimeDataOne);
                _context8.prev = 128;
                _iterator13.s();
              case 130:
                if ((_step13 = _iterator13.n()).done) {
                  _context8.next = 138;
                  break;
                }
                _marketCap2 = _step13.value;
                _context8.next = 134;
                return _marketCap2[1];
              case 134:
                _marketCaps2 = _context8.sent;
                _fetchedPriceData.push(_marketCaps2);
              case 136:
                _context8.next = 130;
                break;
              case 138:
                _context8.next = 143;
                break;
              case 140:
                _context8.prev = 140;
                _context8.t4 = _context8["catch"](128);
                _iterator13.e(_context8.t4);
              case 143:
                _context8.prev = 143;
                _iterator13.f();
                return _context8.finish(143);
              case 146:
                ;
                _DataObject = {
                  label: "Price of ".concat(firstSelectedAssetName),
                  data: _fetchedPriceData,
                  fill: false,
                  pointRadius: 0,
                  borderWidth: 1,
                  backgroundColor: '#FFFFFF',
                  borderColor: '#FFFFFF',
                  yAxisID: 'y'
                };
                assetPriceData.push(_DataObject);

                // ADD ASSET 2 DATA -- ADD ASSET 2 DATA
                _fetchedPriceDataTwo = [];
                _iterator14 = _createForOfIteratorHelper(marketcapAndTimeDataTwo);
                _context8.prev = 151;
                _iterator14.s();
              case 153:
                if ((_step14 = _iterator14.n()).done) {
                  _context8.next = 161;
                  break;
                }
                _marketCap3 = _step14.value;
                _context8.next = 157;
                return _marketCap3[1];
              case 157:
                _marketCaps3 = _context8.sent;
                _fetchedPriceDataTwo.push(_marketCaps3);
              case 159:
                _context8.next = 153;
                break;
              case 161:
                _context8.next = 166;
                break;
              case 163:
                _context8.prev = 163;
                _context8.t5 = _context8["catch"](151);
                _iterator14.e(_context8.t5);
              case 166:
                _context8.prev = 166;
                _iterator14.f();
                return _context8.finish(166);
              case 169:
                ;
                _DataObjectTwo = {
                  label: "Price of ".concat(secondSelectedAssetName),
                  data: _fetchedPriceDataTwo,
                  fill: false,
                  pointRadius: 0,
                  borderWidth: 1,
                  backgroundColor: '#FF0000',
                  borderColor: '#FF0000',
                  yAxisID: 'y'
                };
                assetPriceData.push(_DataObjectTwo);
              case 172:
                ;

                // UPDATE CHART WITH DATA
                displayedChart.data.datasets = assetPriceData;
                displayedChart.data.labels = chartTime;
                displayedChart.update();
                _context8.next = 181;
                break;
              case 178:
                _context8.prev = 178;
                _context8.t6 = _context8["catch"](0);
                console.log('could not fetch initial data...');
              case 181:
              case "end":
                return _context8.stop();
            }
          }, _callee8, null, [[0, 178], [25, 40, 43, 46], [49, 61, 64, 67], [75, 87, 90, 93], [101, 116, 119, 122], [128, 140, 143, 146], [151, 163, 166, 169]]);
        }));
        return function fetchData() {
          return _ref7.apply(this, arguments);
        };
      }();
      var getAssetList = /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
          var assetCountInArrayOne, assetCountInArrayTwo, response, assetListData, _iterator15, _step15, asset, assetID, listOptions, assetName, marketCapValuationOne, fullyDilutedValOne, percentFromATHOne, firstListOfCryptos, firstNumberInCryptoList, firstNumberInList, totalMarketCapOne, shortenedMarketCapOne, formattedTotalMarketCapOne, fullyDilutedvalOne, shortendedFullyDilutedValOne, formattedFullyDilutedValOne, _totalMarketCapOne, _shortenedMarketCapOne, _formattedTotalMarketCapOne, _fullyDilutedvalOne, _shortendedFullyDilutedValOne, _formattedFullyDilutedValOne, percentFromAllTimeHighOne, _iterator16, _step16, _asset, _assetID, _listOptions, _assetName, marketCapValuationTwo, fullyDilutedValTwo, percentFromATHTwo, secondListOfCryptos, secondNumberInCryptoList, secondNumberInList, totalMarketCapTwo, shortenedMarketCapTwo, formattedTotalMarketCapTwo, fullyDilutedvalTwo, shortendedFullyDilutedValTwo, formattedFullyDilutedValTwo, _totalMarketCapTwo, _shortenedMarketCapTwo, _formattedTotalMarketCapTwo, _fullyDilutedvalTwo, _shortendedFullyDilutedValTwo, _formattedFullyDilutedValTwo, percentFromAllTimeHighTwo;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                // the number of the asset inside the array
                assetCountInArrayOne = 0;
                assetCountInArrayTwo = 0; // fetch the list of assets
                _context9.next = 5;
                return fetch(assetListURL);
              case 5:
                response = _context9.sent;
                _context9.next = 8;
                return response.json();
              case 8:
                assetListData = _context9.sent;
                console.log(assetListData);

                // ASSET 1 DATA
                _iterator15 = _createForOfIteratorHelper(assetListData);
                _context9.prev = 11;
                _iterator15.s();
              case 13:
                if ((_step15 = _iterator15.n()).done) {
                  _context9.next = 32;
                  break;
                }
                asset = _step15.value;
                _context9.next = 17;
                return asset.id;
              case 17:
                assetID = _context9.sent;
                listOptions = document.createElement('option');
                listOptions.classList.add(assetID);
                listOptions.classList.add(assetCountInArrayOne);
                assetCountInArrayOne++;

                // for the display name
                _context9.next = 24;
                return asset.name;
              case 24:
                assetName = _context9.sent;
                _context9.next = 27;
                return assetName;
              case 27:
                listOptions.value = _context9.sent;
                // add option onto the dropdown selection
                listOptions.appendChild(document.createTextNode(assetName));
                // add element to lists
                assetListElOne.appendChild(listOptions);
              case 30:
                _context9.next = 13;
                break;
              case 32:
                _context9.next = 37;
                break;
              case 34:
                _context9.prev = 34;
                _context9.t0 = _context9["catch"](11);
                _iterator15.e(_context9.t0);
              case 37:
                _context9.prev = 37;
                _iterator15.f();
                return _context9.finish(37);
              case 40:
                // variables for the asset metrics within panel
                marketCapValuationOne = document.querySelector('.marketCapValuationOne');
                fullyDilutedValOne = document.querySelector('.fullyDilutedValOne');
                percentFromATHOne = document.querySelector('.percentFromATHOne'); // getting the number within the array
                firstListOfCryptos = document.querySelector('.cryptoCompareAssetListOne');
                firstNumberInCryptoList = firstListOfCryptos.options[firstListOfCryptos.selectedIndex];
                firstNumberInList = firstNumberInCryptoList.classList[1]; // is it in the millions or billions
                totalMarketCapOne = assetListData[firstNumberInList]['market_cap'];
                if (totalMarketCapOne > 1000000000) {
                  // market cap
                  shortenedMarketCapOne = totalMarketCapOne / 1000000000;
                  formattedTotalMarketCapOne = shortenedMarketCapOne.toLocaleString();
                  marketCapValuationOne.innerHTML = "$ ".concat(formattedTotalMarketCapOne, " B");

                  // fully diluted valuation
                  fullyDilutedvalOne = assetListData[firstNumberInList]['fully_diluted_valuation'];
                  shortendedFullyDilutedValOne = (fullyDilutedvalOne / 1000000000).toLocaleString();
                  formattedFullyDilutedValOne = "$ ".concat(shortendedFullyDilutedValOne, " B");
                  fullyDilutedValOne.innerHTML = formattedFullyDilutedValOne;
                } else {
                  // market cap
                  _totalMarketCapOne = assetListData[firstNumberInList]['market_cap'];
                  _shortenedMarketCapOne = _totalMarketCapOne / 1000000000;
                  _formattedTotalMarketCapOne = _shortenedMarketCapOne.toLocaleString();
                  marketCapValuationOne.innerHTML = "$ ".concat(_formattedTotalMarketCapOne, " M");

                  // fully diluted valuation
                  _fullyDilutedvalOne = assetListData[firstNumberInList]['fully_diluted_valuation'];
                  _shortendedFullyDilutedValOne = (_fullyDilutedvalOne / 1000000000).toLocaleString();
                  _formattedFullyDilutedValOne = "$ ".concat(_shortendedFullyDilutedValOne, " M");
                  fullyDilutedValOne.innerHTML = _formattedFullyDilutedValOne;
                }
                // % from all time high
                percentFromAllTimeHighOne = assetListData[firstNumberInList]['ath_change_percentage'];
                percentFromATHOne.innerHTML = "% from ATH: ".concat(Math.round(percentFromAllTimeHighOne.toLocaleString()), "%");

                // ASSET 2 DATA
                _iterator16 = _createForOfIteratorHelper(assetListData);
                _context9.prev = 51;
                _iterator16.s();
              case 53:
                if ((_step16 = _iterator16.n()).done) {
                  _context9.next = 72;
                  break;
                }
                _asset = _step16.value;
                _context9.next = 57;
                return _asset.id;
              case 57:
                _assetID = _context9.sent;
                _listOptions = document.createElement('option');
                _listOptions.classList.add(_assetID);
                _listOptions.classList.add(assetCountInArrayTwo);
                assetCountInArrayTwo++;

                // for the display name
                _context9.next = 64;
                return _asset.name;
              case 64:
                _assetName = _context9.sent;
                _context9.next = 67;
                return _assetName;
              case 67:
                _listOptions.value = _context9.sent;
                // add option onto the dropdown selection
                _listOptions.appendChild(document.createTextNode(_assetName));
                // add element to lists
                assetListElTwo.appendChild(_listOptions);
              case 70:
                _context9.next = 53;
                break;
              case 72:
                _context9.next = 77;
                break;
              case 74:
                _context9.prev = 74;
                _context9.t1 = _context9["catch"](51);
                _iterator16.e(_context9.t1);
              case 77:
                _context9.prev = 77;
                _iterator16.f();
                return _context9.finish(77);
              case 80:
                assetListElTwo.selectedIndex = 1;
                marketCapValuationTwo = document.querySelector('.marketCapValuationTwo');
                fullyDilutedValTwo = document.querySelector('.fullyDilutedValTwo');
                percentFromATHTwo = document.querySelector('.percentFromATHTwo');
                secondListOfCryptos = document.querySelector('.cryptoCompareAssetListTwo');
                secondNumberInCryptoList = secondListOfCryptos.options[secondListOfCryptos.selectedIndex];
                secondNumberInList = secondNumberInCryptoList.classList[1]; // is it in the millions or billions
                totalMarketCapTwo = assetListData[secondNumberInList]['market_cap'];
                if (totalMarketCapTwo > 1000000000) {
                  // market cap
                  shortenedMarketCapTwo = totalMarketCapTwo / 1000000000;
                  formattedTotalMarketCapTwo = shortenedMarketCapTwo.toLocaleString();
                  marketCapValuationTwo.innerHTML = "$ ".concat(formattedTotalMarketCapTwo, " B");

                  // fully diluted valuation
                  fullyDilutedvalTwo = assetListData[secondNumberInList]['fully_diluted_valuation'];
                  shortendedFullyDilutedValTwo = (fullyDilutedvalTwo / 1000000000).toLocaleString();
                  formattedFullyDilutedValTwo = "$ ".concat(shortendedFullyDilutedValTwo, " B");
                  fullyDilutedValTwo.innerHTML = formattedFullyDilutedValTwo;
                } else {
                  // market cap
                  _totalMarketCapTwo = assetListData[secondNumberInList]['market_cap'];
                  _shortenedMarketCapTwo = _totalMarketCapTwo / 1000000000;
                  _formattedTotalMarketCapTwo = _shortenedMarketCapTwo.toLocaleString();
                  marketCapValuationTwo.innerHTML = "$ ".concat(_formattedTotalMarketCapTwo, " M");

                  // fully diluted valuation
                  _fullyDilutedvalTwo = assetListData[secondNumberInList]['fully_diluted_valuation'];
                  _shortendedFullyDilutedValTwo = (_fullyDilutedvalTwo / 1000000000).toLocaleString();
                  _formattedFullyDilutedValTwo = "$ ".concat(_shortendedFullyDilutedValTwo, " M");
                  fullyDilutedValTwo.innerHTML = _formattedFullyDilutedValTwo;
                }
                // % from all time high
                percentFromAllTimeHighTwo = assetListData[secondNumberInList]['ath_change_percentage'];
                percentFromATHTwo.innerHTML = "% from ATH: ".concat(Math.round(percentFromAllTimeHighTwo.toLocaleString()), "%");
                _context9.next = 97;
                break;
              case 93:
                _context9.prev = 93;
                _context9.t2 = _context9["catch"](0);
                console.log(_context9.t2);
                console.log('cannot get list of assets from CoinGecko...');
              case 97:
              case "end":
                return _context9.stop();
            }
          }, _callee9, null, [[0, 93], [11, 34, 37, 40], [51, 74, 77, 80]]);
        }));
        return function getAssetList() {
          return _ref8.apply(this, arguments);
        };
      }();
      var reFetchAssetMetrics = /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
          var response, assetListData, marketCapValuationOne, fullyDilutedValOne, percentFromATHOne, firstListOfCryptos, firstNumberInCryptoList, firstNumberInList, totalMarketCapOne, shortenedMarketCapOne, formattedTotalMarketCapOne, fullyDilutedvalOne, shortendedFullyDilutedValOne, formattedFullyDilutedValOne, _totalMarketCapOne2, _shortenedMarketCapOne2, _formattedTotalMarketCapOne2, _fullyDilutedvalOne2, _shortendedFullyDilutedValOne2, _formattedFullyDilutedValOne2, percentFromAllTimeHighOne, marketCapValuationTwo, fullyDilutedValTwo, percentFromATHTwo, secondListOfCryptos, secondNumberInCryptoList, secondNumberInList, totalMarketCapTwo, shortenedMarketCapTwo, formattedTotalMarketCapTwo, fullyDilutedvalTwo, shortendedFullyDilutedValTwo, formattedFullyDilutedValTwo, _totalMarketCapTwo2, _shortenedMarketCapTwo2, _formattedTotalMarketCapTwo2, _fullyDilutedvalTwo2, _shortendedFullyDilutedValTwo2, _formattedFullyDilutedValTwo2, percentFromAllTimeHighTwo;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return fetch(assetListURL);
              case 3:
                response = _context10.sent;
                _context10.next = 6;
                return response.json();
              case 6:
                assetListData = _context10.sent;
                // ASSET 1 DATA
                // variables for the asset metrics within panel
                marketCapValuationOne = document.querySelector('.marketCapValuationOne');
                fullyDilutedValOne = document.querySelector('.fullyDilutedValOne');
                percentFromATHOne = document.querySelector('.percentFromATHOne'); // getting the number within the array
                firstListOfCryptos = document.querySelector('.cryptoCompareAssetListOne');
                firstNumberInCryptoList = firstListOfCryptos.options[firstListOfCryptos.selectedIndex];
                firstNumberInList = firstNumberInCryptoList.classList[1]; // is it in the millions or billions
                totalMarketCapOne = assetListData[firstNumberInList]['market_cap'];
                if (totalMarketCapOne > 1000000000) {
                  // market cap
                  shortenedMarketCapOne = totalMarketCapOne / 1000000000;
                  formattedTotalMarketCapOne = shortenedMarketCapOne.toLocaleString();
                  marketCapValuationOne.innerHTML = "".concat(formattedTotalMarketCapOne, " B");

                  // fully diluted valuation
                  fullyDilutedvalOne = assetListData[firstNumberInList]['fully_diluted_valuation'];
                  shortendedFullyDilutedValOne = (fullyDilutedvalOne / 1000000000).toLocaleString();
                  formattedFullyDilutedValOne = "".concat(shortendedFullyDilutedValOne, " B");
                  fullyDilutedValOne.innerHTML = formattedFullyDilutedValOne;
                } else {
                  // market cap
                  _totalMarketCapOne2 = assetListData[firstNumberInList]['market_cap'];
                  _shortenedMarketCapOne2 = _totalMarketCapOne2 / 1000000000;
                  _formattedTotalMarketCapOne2 = _shortenedMarketCapOne2.toLocaleString();
                  marketCapValuationOne.innerHTML = "".concat(_formattedTotalMarketCapOne2, " M");

                  // fully diluted valuation
                  _fullyDilutedvalOne2 = assetListData[firstNumberInList]['fully_diluted_valuation'];
                  _shortendedFullyDilutedValOne2 = (_fullyDilutedvalOne2 / 1000000000).toLocaleString();
                  _formattedFullyDilutedValOne2 = "".concat(_shortendedFullyDilutedValOne2, " M");
                  fullyDilutedValOne.innerHTML = _formattedFullyDilutedValOne2;
                }
                // % from all time high
                percentFromAllTimeHighOne = assetListData[firstNumberInList]['ath_change_percentage'];
                percentFromATHOne.innerHTML = "% from ATH: ".concat(Math.round(percentFromAllTimeHighOne.toLocaleString()), "%");

                // ASSET 2 DATA
                marketCapValuationTwo = document.querySelector('.marketCapValuationTwo');
                fullyDilutedValTwo = document.querySelector('.fullyDilutedValTwo');
                percentFromATHTwo = document.querySelector('.percentFromATHTwo');
                secondListOfCryptos = document.querySelector('.cryptoCompareAssetListTwo');
                secondNumberInCryptoList = secondListOfCryptos.options[secondListOfCryptos.selectedIndex];
                secondNumberInList = secondNumberInCryptoList.classList[1]; // is it in the millions or billions
                totalMarketCapTwo = assetListData[secondNumberInList]['market_cap'];
                if (totalMarketCapTwo > 1000000000) {
                  // market cap
                  shortenedMarketCapTwo = totalMarketCapTwo / 1000000000;
                  formattedTotalMarketCapTwo = shortenedMarketCapTwo.toLocaleString();
                  marketCapValuationTwo.innerHTML = "".concat(formattedTotalMarketCapTwo, " B");

                  // fully diluted valuation
                  fullyDilutedvalTwo = assetListData[secondNumberInList]['fully_diluted_valuation'];
                  shortendedFullyDilutedValTwo = (fullyDilutedvalTwo / 1000000000).toLocaleString();
                  formattedFullyDilutedValTwo = "".concat(shortendedFullyDilutedValTwo, " B");
                  fullyDilutedValTwo.innerHTML = formattedFullyDilutedValTwo;
                } else {
                  // market cap
                  _totalMarketCapTwo2 = assetListData[secondNumberInList]['market_cap'];
                  _shortenedMarketCapTwo2 = _totalMarketCapTwo2 / 1000000000;
                  _formattedTotalMarketCapTwo2 = _shortenedMarketCapTwo2.toLocaleString();
                  marketCapValuationTwo.innerHTML = "".concat(_formattedTotalMarketCapTwo2, " M");

                  // fully diluted valuation
                  _fullyDilutedvalTwo2 = assetListData[secondNumberInList]['fully_diluted_valuation'];
                  _shortendedFullyDilutedValTwo2 = (_fullyDilutedvalTwo2 / 1000000000).toLocaleString();
                  _formattedFullyDilutedValTwo2 = "".concat(_shortendedFullyDilutedValTwo2, " M");
                  fullyDilutedValTwo.innerHTML = _formattedFullyDilutedValTwo2;
                }
                // % from all time high
                percentFromAllTimeHighTwo = assetListData[secondNumberInList]['ath_change_percentage'];
                percentFromATHTwo.innerHTML = "% from ATH: ".concat(Math.round(percentFromAllTimeHighTwo.toLocaleString()), "%");
                _context10.next = 33;
                break;
              case 29:
                _context10.prev = 29;
                _context10.t0 = _context10["catch"](0);
                console.log(_context10.t0);
                console.log('cannot get list of assets from CoinGecko...');
              case 33:
              case "end":
                return _context10.stop();
            }
          }, _callee10, null, [[0, 29]]);
        }));
        return function reFetchAssetMetrics() {
          return _ref9.apply(this, arguments);
        };
      }(); // change timeframe
      var changeTimeframe = function changeTimeframe() {
        selectedTimePeriod = '';
        assetPriceData = [];
        chartTime = [];
        selectedTimePeriod = selectedTimePeriodEl.value;
        fetchData();
      };
      // change asset  -- asset 1
      var changeAssetOne = function changeAssetOne(event) {
        var selectedOption = changeAssetOneEl.options[changeAssetOneEl.selectedIndex];
        firstSelectedAssetID = selectedOption.classList[0];
        firstSelectedAssetName = selectedOption.value;
        fetchData();
        reFetchAssetMetrics();
      };
      // change asset -- asset 2
      var changeAssetTwo = function changeAssetTwo(event) {
        var selectedOption = changeAssetTwoEl.options[changeAssetTwoEl.selectedIndex];
        secondSelectedAssetID = selectedOption.classList[0];
        secondSelectedAssetName = selectedOption.value;
        fetchData();
        reFetchAssetMetrics();
      };
      // CODE FOR CHANGING THE CHART SCALE
      var chartScale = 'linear'; //logarithmic or linear
      var autoChartOption = document.querySelector('.marketCapAutoChartOption');
      autoChartOption.addEventListener('click', changeChartScale);
      var logChartOption = document.querySelector('.marketCaplogChartOption');
      logChartOption.addEventListener('click', changeChartScale);
      ;

      // variables for timeframe
      var chartTime = []; //fetched data
      var selectedTimePeriod = '365';

      // variables for selected assets
      var assetPriceData = []; //fetched data
      var firstSelectedAssetID = 'bitcoin';
      var firstSelectedAssetName = 'Bitcoin';
      var secondSelectedAssetID = 'ethereum';
      var secondSelectedAssetName = 'Ethereum';
      fetchData();

      // generate list of assets and add market cap metrics
      var assetListURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false';
      var assetListElOne = document.querySelector('.cryptoCompareAssetListOne');
      var assetListElTwo = document.querySelector('.cryptoCompareAssetListTwo');
      getAssetList();
      var selectedTimePeriodEl = document.querySelector('.compareMarketCapTimeframeList');
      selectedTimePeriodEl.addEventListener('change', changeTimeframe);
      var changeAssetOneEl = document.querySelector('.cryptoCompareAssetListOne');
      changeAssetOneEl.addEventListener('change', changeAssetOne);
      var changeAssetTwoEl = document.querySelector('.cryptoCompareAssetListTwo');
      changeAssetTwoEl.addEventListener('change', changeAssetTwo);

      // CODE FOR THE CHART.JS LIBRARY
      var ctx = document.querySelector('.marketCryptoCap');
      var displayedChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartTime,
          datasets: assetPriceData
        },
        options: {
          type: chartScale,
          display: true,
          position: 'left',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                color: '#232323'
              },
              ticks: {
                // Include a dollar sign in the ticks
                callback: function callback(value, index, values) {
                  return '$' + value / 1e9 + ' ' + 'B';
                }
              }
            }
          }
        }
      });

      // CODE FOR DOMINANCE CHART ASSET 1 -- ASSET 1 CHART
      var assetOneCanvas = document.querySelector('.marketCapDominanceAssetOne');
      var doughnutOne = new Chart(assetOneCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{
            data: [300, 50, 100],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 24
          }]
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        }
      });

      // CODE FOR DOMINANCE CHART ASSET 2 -- ASSET 2 CHART
      var assetTwoCanvas = document.querySelector('.marketCapDominanceAssetTwo');

      // end of the Intersection Observer
    }
  });
}, dataPageOptions);
var compareMarketCapContainer = document.querySelector('.compareMarketCapContainer');
marketsCompareMarketCapObserver.observe(compareMarketCapContainer);

// MARKETS PAGE -- EXCHANGE VOLUMES // EXCHANGE VOLUMES // EXCHANGE VOLUMES
var exchangeVolumeObserver = new IntersectionObserver(function (entries, exchangeVolumeObserver) {
  entries.forEach(function (entry) {
    // CEX VOLUME COMPARISON -- CEX DOMINANCE // CEX DOMINANCE
    var totalBitcoinVolume = 0;
    var BitcoinPrice = 0;
    var dominanceOfExchanges = [];
    var nameOfAllExchanges = [];

    // fetch the volume data
    function fetchVolumeData() {
      return _fetchVolumeData.apply(this, arguments);
    }
    function _fetchVolumeData() {
      _fetchVolumeData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var TotalVolumeUrl, totalVolumeResponse, totalVolumeData, bitcoinTotalVolumeVariable, currentBitcoinPrice, singleExchanageUrl, singleExchangeResponse, singleExchangeData, _iterator17, _step17, names, singleExchangeName, _iterator18, _step18, dominance, totalBtcTraded, totalUsdTraded, dominanceDecimal, dominancePercentage, displayedExchangeDominance, otherExchangeDominance, _iterator19, _step19, percentage, CexDominancedata;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              // FETCH THE TOTAL VOLUME & BTC PRICE 
              TotalVolumeUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';
              _context11.next = 4;
              return fetch(TotalVolumeUrl);
            case 4:
              totalVolumeResponse = _context11.sent;
              _context11.next = 7;
              return totalVolumeResponse.json();
            case 7:
              totalVolumeData = _context11.sent;
              _context11.next = 10;
              return totalVolumeData[0]['total_volume'];
            case 10:
              bitcoinTotalVolumeVariable = _context11.sent;
              _context11.next = 13;
              return bitcoinTotalVolumeVariable;
            case 13:
              totalBitcoinVolume = _context11.sent;
              _context11.next = 16;
              return totalVolumeData[0]['current_price'];
            case 16:
              currentBitcoinPrice = _context11.sent;
              BitcoinPrice = currentBitcoinPrice;

              // FETCH SINGLE EXCHANGE DATA AND DOMINANCE
              singleExchanageUrl = 'https://api.coingecko.com/api/v3/exchanges';
              _context11.next = 21;
              return fetch(singleExchanageUrl);
            case 21:
              singleExchangeResponse = _context11.sent;
              _context11.next = 24;
              return singleExchangeResponse.json();
            case 24:
              singleExchangeData = _context11.sent;
              // console.log(singleExchangeData);
              // get the name of the exchange
              _iterator17 = _createForOfIteratorHelper(singleExchangeData);
              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  names = _step17.value;
                  singleExchangeName = names['name'];
                  nameOfAllExchanges.push(singleExchangeName);
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
              ;

              // get the 24H btc volume for the exchange
              _iterator18 = _createForOfIteratorHelper(singleExchangeData);
              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  dominance = _step18.value;
                  totalBtcTraded = dominance['trade_volume_24h_btc'];
                  totalUsdTraded = totalBtcTraded * BitcoinPrice;
                  dominanceDecimal = totalUsdTraded / totalBitcoinVolume;
                  dominancePercentage = dominanceDecimal * 100;
                  dominanceOfExchanges.push(dominancePercentage);
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
              ;

              // shorten array to only display certain amount 
              nameOfAllExchanges.splice(-80);
              dominanceOfExchanges.splice(-80);

              // calculate other exchange dominance
              displayedExchangeDominance = 0;
              otherExchangeDominance = 0;
              _iterator19 = _createForOfIteratorHelper(dominanceOfExchanges);
              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  percentage = _step19.value;
                  displayedExchangeDominance += percentage;
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
              otherExchangeDominance = 100 - displayedExchangeDominance;

              // add the other exchanage data to array
              nameOfAllExchanges.push('others');
              dominanceOfExchanges.push(otherExchangeDominance);
              CexDominancedata = {
                labels: nameOfAllExchanges,
                datasets: [{
                  label: ['% of Total CEX Volume'],
                  data: dominanceOfExchanges,
                  hoverOffset: 10
                }]
              }; // update the chart
              cexVolumePieChart.data = CexDominancedata;
              cexVolumePieChart.update();
              _context11.next = 49;
              break;
            case 45:
              _context11.prev = 45;
              _context11.t0 = _context11["catch"](0);
              console.log(_context11.t0);
              console.log('Could not fetch the exchange data..');
            case 49:
            case "end":
              return _context11.stop();
          }
        }, _callee11, null, [[0, 45]]);
      }));
      return _fetchVolumeData.apply(this, arguments);
    }
    fetchVolumeData();

    // CHART FOR THE CEX DOMINANCE
    var cexVolumePieChartEl = document.querySelector('.cexVolumePieChart');
    var cexVolumePieChart = new Chart(cexVolumePieChartEl, {
      type: 'doughnut',
      data: {},
      options: {
        cutout: '40%',
        plugins: {
          legend: {
            display: true,
            position: 'left'
          }
        }
      }
    });
    window.addEventListener("resize", function (event) {
      cexVolumePieChartEl.style.width = '100%';
    });

    // CEX VOLUME COMPARISON -- FUTURES OPEN INTEREST // FUTURES OPEN INTEREST
    var totalOpenInterest = 0;
    var nameOfFuturesExchanges = [];
    var openInterests = [];

    // fetch all the futures exchanges
    function fetchFuturesExchanges() {
      return _fetchFuturesExchanges.apply(this, arguments);
    }
    function _fetchFuturesExchanges() {
      _fetchFuturesExchanges = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var URL, response, data, _iterator20, _step20, name, futuresExchange, _iterator21, _step21, singleExchangeOi, currentOpenInterest, _iterator22, _step22, openInterest, openInterestData, openInterestDominance, openInterestDominancePercentage, totalOiOtherExchanges, otherExchangeDominance, _iterator23, _step23, otherExchanges, OpenInterestDominancedata;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              URL = 'https://api.coingecko.com/api/v3/derivatives/exchanges';
              _context12.next = 4;
              return fetch(URL);
            case 4:
              response = _context12.sent;
              _context12.next = 7;
              return response.json();
            case 7:
              data = _context12.sent;
              // extracting names and ID's of futures exchanages
              _iterator20 = _createForOfIteratorHelper(data);
              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  name = _step20.value;
                  futuresExchange = name['name'];
                  nameOfFuturesExchanges.push(futuresExchange);
                }

                // calculate the total open interest
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
              _iterator21 = _createForOfIteratorHelper(data);
              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  singleExchangeOi = _step21.value;
                  if (singleExchangeOi['open_interest_btc'] > 0) {
                    currentOpenInterest = singleExchangeOi['open_interest_btc'];
                    totalOpenInterest += currentOpenInterest;
                  }
                }

                // extract open interest of each exchange
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
              _iterator22 = _createForOfIteratorHelper(data);
              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  openInterest = _step22.value;
                  openInterestData = openInterest['open_interest_btc'];
                  openInterestDominance = openInterestData / totalOpenInterest;
                  openInterestDominancePercentage = openInterestDominance * 100;
                  openInterests.push(openInterestDominancePercentage);
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
              ;

              // shorten array to only display certain amount 
              nameOfFuturesExchanges.splice(-30);
              openInterests.splice(-30);

              // add the the 'other' exchanges
              totalOiOtherExchanges = 0;
              otherExchangeDominance = 0;
              _iterator23 = _createForOfIteratorHelper(openInterests);
              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  otherExchanges = _step23.value;
                  totalOiOtherExchanges += otherExchanges;
                  otherExchangeDominance = 100 - totalOiOtherExchanges;
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
              openInterests.push(otherExchangeDominance);
              nameOfFuturesExchanges.push('other');
              OpenInterestDominancedata = {
                labels: nameOfFuturesExchanges,
                datasets: [{
                  label: ['% of Total Open Interest'],
                  data: openInterests,
                  hoverOffset: 10
                }]
              }; // update the chart
              openInterestPieChart.data = OpenInterestDominancedata;
              openInterestPieChart.update();
              _context12.next = 32;
              break;
            case 28:
              _context12.prev = 28;
              _context12.t0 = _context12["catch"](0);
              console.log(_context12.t0);
              console.log('Could not fetch list of Futures exchanges...');
            case 32:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[0, 28]]);
      }));
      return _fetchFuturesExchanges.apply(this, arguments);
    }
    fetchFuturesExchanges();

    // CHART FOR THE OPEN INTEREST DOMINANCE
    var openInterestPieChartEl = document.querySelector('.futuresOpenInterestChart');
    var openInterestPieChart = new Chart(openInterestPieChartEl, {
      type: 'doughnut',
      data: {},
      options: {
        cutout: '40%',
        plugins: {
          legend: {
            display: true,
            position: 'left'
          }
        }
      }
    });
    window.addEventListener("resize", function (event) {
      openInterestPieChartEl.style.width = '100%';
    });

    // FUTURES FUNDING RATE 
    var fundingRateAsset = 'BTC';
    var ticker = 'unexpired';
    var futuresExchanges = [];
    var fundingRates = [];
    var totalFundingRateOpenInterest = 0;
    var weightedAverageFundingRate = 0;
    function fetchFundingRate() {
      return _fetchFundingRate.apply(this, arguments);
    }
    function _fetchFundingRate() {
      _fetchFundingRate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var URL, response, data, _iterator24, _step24, market, rawExchangeName, exchangeRemoveFutureText, exchangeOneBracket, exchangeTwoBracket, exchange, averageFundingRate, _iterator25, _step25, fundingRate, rate, weightedFundingRateDominance, multiplier, weightedAverage, fundingRateObject, averageFundingRateEl, weightedAverageFundingRateEl;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              URL = "https://api.coingecko.com/api/v3/derivatives?include_tickers=".concat(ticker);
              _context13.next = 3;
              return fetch(URL);
            case 3:
              response = _context13.sent;
              _context13.next = 6;
              return response.json();
            case 6:
              data = _context13.sent;
              try {
                // extract the name of the exchange
                _iterator24 = _createForOfIteratorHelper(data);
                try {
                  for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                    market = _step24.value;
                    if (market['index_id'] === fundingRateAsset && market['funding_rate'] != 0 && market['open_interest'] > 0) {
                      rawExchangeName = market['market'];
                      exchangeRemoveFutureText = rawExchangeName.replace('Futures', '');
                      exchangeOneBracket = exchangeRemoveFutureText.replace('(', '');
                      exchangeTwoBracket = exchangeOneBracket.replace(')', '');
                      exchange = exchangeTwoBracket.replace('()', '');
                      futuresExchanges.push(exchange);
                    }
                  }
                  // extract the funding rate
                } catch (err) {
                  _iterator24.e(err);
                } finally {
                  _iterator24.f();
                }
                averageFundingRate = 0;
                _iterator25 = _createForOfIteratorHelper(data);
                try {
                  for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                    fundingRate = _step25.value;
                    if (fundingRate['index_id'] === fundingRateAsset && fundingRate['funding_rate'] != 0 && fundingRate['open_interest'] > 0) {
                      rate = fundingRate['funding_rate'];
                      fundingRates.push(rate);
                      averageFundingRate += rate;

                      // getting the total open interest from the pulled funding rates
                      weightedFundingRateDominance = fundingRate['open_interest'];
                      totalFundingRateOpenInterest += weightedFundingRateDominance;

                      // getting the weighted average
                      multiplier = fundingRate['funding_rate'] / totalFundingRateOpenInterest;
                      weightedAverage = fundingRate['funding_rate'] * multiplier;
                      weightedAverageFundingRate += weightedAverage;
                    }
                  }
                } catch (err) {
                  _iterator25.e(err);
                } finally {
                  _iterator25.f();
                }
                fundingRateObject = {
                  labels: futuresExchanges,
                  datasets: [{
                    label: "".concat(fundingRateAsset, " funding rates"),
                    data: fundingRates,
                    borderWidth: 2,
                    backgroundColor: 'rgb(255,255,255, 0.5)',
                    borderColor: 'rgb(255,255,255, 0.8)'
                  }]
                }; // add average funding rate
                averageFundingRateEl = document.querySelector('.averageFundingRate');
                averageFundingRateEl.innerHTML = averageFundingRate.toFixed(3);

                // add weighted funding rate
                weightedAverageFundingRateEl = document.querySelector('.weightedAverageFundingRate');
                weightedAverageFundingRateEl.innerHTML = weightedAverageFundingRate.toFixed(3);

                // update chart with data
                fundingRateChart.data = fundingRateObject;
                fundingRateChart.update();
              } catch (error) {
                console.log(error);
                console.log('Could not fetch Futures funding rates..');
              }
            case 8:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      return _fetchFundingRate.apply(this, arguments);
    }
    fetchFundingRate();
    function changeFundingRateAsset(event) {
      if (event.target.classList.contains('BtcFundingRateButton')) {
        console.log('BTC!');
      }
    }
    var changeFundingRateButton = document.querySelectorAll('.changeFundingRateButton');
    changeFundingRateButton.forEach(function (button) {
      button.addEventListener('click', changeFundingRateAsset);
    });

    // CHART FOR THE FUTURES FUNDING RATE
    var fundingRateChartEl = document.querySelector('.fundingRateChart');
    var fundingRateChart = new Chart(fundingRateChartEl, {
      type: 'bar',
      data: {},
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              format: {
                style: 'percent'
              }
            }
          }
        }
      }
    });
    window.addEventListener("resize", function (event) {
      fundingRateChartEl.style.height = '100%';
    });

    // end of the Intersection Observer
  });
}, dataPageOptions);
var exchangeDataContainer = document.querySelector('.volumePageContainer');
exchangeVolumeObserver.observe(exchangeDataContainer);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54665" + '/');
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","toolsScript.js"], null)
//# sourceMappingURL=/toolsScript.96a0c043.js.map