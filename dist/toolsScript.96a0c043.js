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

// START OF THE DATA PAGES // START OF THE DATA PAGES // START OF THE DATA PAGES
var dataPageContainer = document.querySelectorAll('.dataSubPageContainer');
var dataPageOptions = {
  rootMargin: "0px",
  threshold: 0
};

// MARKETS PAGE -- CRYPTOCURRENCIES // MARKETS PAGE -- CRYPTOCURRENCIES // MARKETS PAGE -- CRYPTOCURRENCIES
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
      // (we don't need to adjust this) Time Series (Daily), Weekly Adjusted Time Series, Monthly Adjusted Time Series
      // This is for seeing if we need to change the timeframe
      var dictateTimeframe = function dictateTimeframe() {
        var selectedStockTimePeriodEl = document.querySelector('.stockChartTimeframe');
        var selectedTimeframe = selectedStockTimePeriodEl.value; // this shows the number of days

        timeframe = '';
        if (selectedTimeframe < 8) {
          timeframe = 'TIME_SERIES_DAILY_ADJUSTED';
          // console.log('timeframe is less than 8 days');
        } else if (selectedTimeframe < 91) {
          timeframe = 'TIME_SERIES_DAILY_ADJUSTED';
        } else if (selectedTimeframe < 366) {
          timeframe = 'TIME_SERIES_WEEKLY_ADJUSTED';
          // console.log('timeframe is less than 1 year and day');
        } else if (selectedTimeframe < 1826) {
          timeframe = 'TIME_SERIES_WEEKLY_ADJUSTED';
          // console.log('timeframe is less than 5 years and a day');
        } else {
          timeframe = 'TIME_SERIES_MONTHLY_ADJUSTED';
          // console.log('timeframe is longer than 5 years');
        }

        if (timeframe == 'TIME_SERIES_DAILY_ADJUSTED') {
          timeSeries = 'Time Series (Daily)';
        } else if (timeframe == 'TIME_SERIES_WEEKLY_ADJUSTED') {
          timeSeries = 'Weekly Adjusted Time Series';
        } else if (timeframe == 'TIME_SERIES_MONTHLY_ADJUSTED') {
          timeSeries = 'Monthly Adjusted Time Series';
        }
      };
      // function to initially fetch the data
      var fetchData = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var options, URL, response, data, unorderedTimeframeData, timeSeriesData, time, reversedFetchedPrice, fetchedPriceData, priceSeriesData, allPriceDataObject, _i, allPrices, closePrices, closePrice, dataObject;
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
                }; // Initialize the time series
                dictateTimeframe();

                // Creating the URL and fetching the data
                URL = "https://www.alphavantage.co/query?function=".concat(timeframe, "&symbol=").concat(ticker, "&apikey=").concat(myAPIkey);
                _context5.next = 6;
                return fetch(URL);
              case 6:
                response = _context5.sent;
                _context5.next = 9;
                return response.json();
              case 9:
                data = _context5.sent;
                // to fetch timeframe
                timeframeData = [];
                unorderedTimeframeData = [];
                _context5.next = 14;
                return data["".concat(timeSeries)];
              case 14:
                timeSeriesData = _context5.sent;
                for (time in timeSeriesData) {
                  unorderedTimeframeData.push(time);
                }
                timeframeData = unorderedTimeframeData.reverse();
                stockPriceChart.data.labels = timeframeData;

                // to fetch price data
                reversedFetchedPrice = [];
                fetchedPriceData = [];
                _context5.next = 22;
                return data["".concat(timeSeries)];
              case 22:
                priceSeriesData = _context5.sent;
                allPriceDataObject = Object.values(priceSeriesData);
                for (_i = 0; _i < allPriceDataObject.length; _i++) {
                  allPrices = allPriceDataObject["".concat(_i)];
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
      // Change the timeframe for the stock chart
      var changeStockTimeframe = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
          var adjustDisplayedTime, URL, response, data, unorderedTimeframeData, timeSeriesData, time, reversedFetchedPrice, fetchedPriceData, priceSeriesData, allPriceDataObject, _i2, allPrices, closePrices, closePrice, dataObject;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                // edit the timeframe data displayed on the chart
                adjustDisplayedTime = function adjustDisplayedTime() {
                  if (selectedTimePeriodEl.value < 8) {
                    // edit the length of the timeframe data
                    var adjustedTimeframeData = timeframeData.slice(93);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = adjustedTimeframeData;
                  } else if (selectedTimePeriodEl.value < 31) {
                    var _adjustedTimeframeData = timeframeData.slice(75);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = _adjustedTimeframeData;
                  } else if (selectedTimePeriodEl.value < 91) {
                    var _adjustedTimeframeData2 = timeframeData.slice(10);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = _adjustedTimeframeData2;
                  } else if (selectedTimePeriodEl.value < 366) {
                    var _adjustedTimeframeData3 = timeframeData.slice(1163);
                    console.log(_adjustedTimeframeData3);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = _adjustedTimeframeData3;
                  } else if (selectedTimePeriodEl.value < 731) {
                    var _adjustedTimeframeData4 = timeframeData.slice(1111);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = _adjustedTimeframeData4;
                  } else if (selectedTimePeriodEl.value < 1096) {
                    var _adjustedTimeframeData5 = timeframeData.slice(1059);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = _adjustedTimeframeData5;
                  } else if (selectedTimePeriodEl.value < 1461) {
                    var _adjustedTimeframeData6 = timeframeData.slice(1007);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = _adjustedTimeframeData6;
                  } else if (selectedTimePeriodEl.value < 1826) {
                    var _adjustedTimeframeData7 = timeframeData.slice(955);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = _adjustedTimeframeData7;
                  } else if (selectedTimePeriodEl.value < 2556) {
                    var _adjustedTimeframeData8 = timeframeData.slice(194);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = _adjustedTimeframeData8;
                  } else if (selectedTimePeriodEl.value < 3651) {
                    var _adjustedTimeframeData9 = timeframeData.slice(158);
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = _adjustedTimeframeData9;
                  } else {
                    // update the chart data
                    stockPriceChart.data.datasets = stockPriceData;
                    stockPriceChart.data.labels = timeframeData;
                  }
                  ;
                };
                // change the variables for the URL
                dictateTimeframe();

                // Creating the URL and fetching the data
                URL = "https://www.alphavantage.co/query?function=".concat(timeframe, "&symbol=").concat(ticker, "&apikey=").concat(myAPIkey);
                _context6.next = 6;
                return fetch(URL);
              case 6:
                response = _context6.sent;
                _context6.next = 9;
                return response.json();
              case 9:
                data = _context6.sent;
                timeframeData = [];
                unorderedTimeframeData = [];
                _context6.next = 14;
                return data["".concat(timeSeries)];
              case 14:
                timeSeriesData = _context6.sent;
                for (time in timeSeriesData) {
                  unorderedTimeframeData.push(time);
                }
                timeframeData = unorderedTimeframeData.reverse();
                // stockPriceChart.data.labels = timeframeData;

                // to fetch price data
                stockPriceData = [];
                reversedFetchedPrice = [];
                fetchedPriceData = [];
                priceSeriesData = data["".concat(timeSeries)];
                allPriceDataObject = Object.values(priceSeriesData);
                for (_i2 = 0; _i2 < allPriceDataObject.length; _i2++) {
                  allPrices = allPriceDataObject["".concat(_i2)];
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
                adjustDisplayedTime();

                // update the chart 
                stockPriceChart.update();
                _context6.next = 35;
                break;
              case 31:
                _context6.prev = 31;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);
                console.log('could not change timeframe for stock chart...');
              case 35:
              case "end":
                return _context6.stop();
            }
          }, _callee6, null, [[0, 31]]);
        }));
        return function changeStockTimeframe() {
          return _ref6.apply(this, arguments);
        };
      }();
      // Change the displayed stock for the chart
      var changeStockAsset = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                console.log('');
              case 1:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return function changeStockAsset() {
          return _ref7.apply(this, arguments);
        };
      }();
      var myAPIkey = 'GH9DTBAMAJL2HKD1';

      // CODE FOR CHANGING THE CHART SCALE
      var chartScale = 'logarithmic'; //logarithmic or linear
      var autoChartOption = document.querySelector('.stockAutoChartOption');
      autoChartOption.addEventListener('click', changeChartScale);
      var logChartOption = document.querySelector('.stockLogChartOption');
      logChartOption.addEventListener('click', changeChartScale);
      ;

      // variables for the chart data arrays (price and data)
      var timeframeData = [];
      var stockPriceData = [];

      // The ticker and timeframe variables
      var ticker = 'AAPL';
      var timeframe = 'TIME_SERIES_WEEKLY_ADJUSTED'; // TIME_SERIES_DAILY_ADJUSTED, TIME_SERIES_WEEKLY_ADJUSTED, TIME_SERIES_MONTHLY_ADJUSTED
      var timeSeries = 'Weekly Adjusted Time Series';
      dictateTimeframe();
      ;
      fetchData();
      ;
      var selectedTimePeriodEl = document.querySelector('.stockChartTimeframe');
      selectedTimePeriodEl.addEventListener('change', changeStockTimeframe);
      ;
      var selectedStockEl = document.querySelector('.stockList');
      selectedStockEl.addEventListener('change', changeStockAsset);

      // Code for the chart
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

      // End of the if statement for the intersection observer
    }
  });
}, dataPageOptions);
var marketPublicstockChartContainer = document.querySelector('.marketPublicstockChartContainer');
marketsStocksObserver.observe(marketPublicstockChartContainer);
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","toolsScript.js"], null)
//# sourceMappingURL=/toolsScript.96a0c043.js.map