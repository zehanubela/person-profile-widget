// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
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
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJtq4":[function(require,module,exports) {
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _countUpMinJs = require("~/media/libs/countup.js/dist/countUp.min.js");
!function() {
    var priceToggleElement = document.querySelector('[data-toggle="price"]');
    if (priceToggleElement && typeof (0, _countUpMinJs.CountUp) !== "undefined") {
        function togglePrice(targetSelector) {
            var isAnnual = priceToggleElement.checked;
            var targetNodes = document.querySelectorAll(targetSelector);
            targetNodes.forEach(function(node) {
                var annualValue = parseFloat(node.dataset.annual || node.dataset.payg);
                var monthlyValue = parseFloat(node.dataset.monthly || node.dataset.payg);
                var duration = parseInt(node.dataset.duration) || 1;
                var options = node.dataset.options ? (0, _objectSpreadProps._)((0, _objectSpread._)({}, JSON.parse(node.dataset.options)), {
                    duration: duration
                }) : {
                    duration: duration
                };
                var endValue = isAnnual ? annualValue : monthlyValue;
                var startValue = isAnnual ? monthlyValue : annualValue;
                if (startValue == endValue) startValue = 0;
                var countUpOptions = (0, _objectSpreadProps._)((0, _objectSpread._)({}, options), {
                    startVal: startValue
                });
                var additionalCredits = node.dataset.annualAdditionalCredits;
                if (isAnnual && additionalCredits) countUpOptions = (0, _objectSpreadProps._)((0, _objectSpread._)({}, countUpOptions), {
                    suffix: " + ".concat(additionalCredits)
                });
                var countUpInstance = new (0, _countUpMinJs.CountUp)(node, endValue, countUpOptions);
                if (!countUpInstance.error) countUpInstance.start();
                else console.error(countUpInstance.error);
            });
        }
        var targetSelector = priceToggleElement.dataset.target;
        togglePrice(targetSelector);
        togglePrice(".price-right");
        priceToggleElement.addEventListener("change", function(event) {
            togglePrice(targetSelector);
            togglePrice(".price-right");
        });
        var pricingPlanRows = document.querySelectorAll(".pricing-plan-table tr");
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = pricingPlanRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var node = _step.value;
                node.addEventListener("click", function() {
                    togglePrice(".price-right");
                });
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var navTab = document.getElementById("pricing-plan-nav-tab");
        navTab.addEventListener("click", function() {
            togglePrice(targetSelector);
            togglePrice(".price-right");
        });
    }
}();

},{"@swc/helpers/_/_object_spread":"fTzxz","@swc/helpers/_/_object_spread_props":"ckcIJ","~/media/libs/countup.js/dist/countUp.min.js":"6JkUW"}],"fTzxz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _object_spread;
});
var _definePropertyJs = require("./_define_property.js");
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, _definePropertyJs._)(target, key, source[key]);
        });
    }
    return target;
}

},{"./_define_property.js":"1KKUG","@parcel/transformer-js/src/esmodule-helpers.js":"iBm0a"}],"1KKUG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _define_property;
});
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iBm0a"}],"ckcIJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", function() {
    return _object_spread_props;
});
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iBm0a"}],"6JkUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CountUp", function() {
    return i;
});
var t = function t1() {
    return t = Object.assign || function(t) {
        for(var i, n = 1, s = arguments.length; n < s; n++)for(var a in i = arguments[n])Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
        return t;
    }, t.apply(this, arguments);
}, i = function() {
    function i(i, n, s) {
        var a = this;
        this.endVal = n, this.options = s, this.version = "2.8.0", this.defaults = {
            startVal: 0,
            decimalPlaces: 0,
            duration: 2,
            useEasing: !0,
            useGrouping: !0,
            useIndianSeparators: !1,
            smartEasingThreshold: 999,
            smartEasingAmount: 333,
            separator: ",",
            decimal: ".",
            prefix: "",
            suffix: "",
            enableScrollSpy: !1,
            scrollSpyDelay: 200,
            scrollSpyOnce: !1
        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(t) {
            a.startTime || (a.startTime = t);
            var _$i = t - a.startTime;
            a.remaining = a.duration - _$i, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(_$i, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(_$i, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (_$i / a.duration);
            var _$n = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
            a.frameVal = _$n ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), _$i < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
        }, this.formatNumber = function(t) {
            var _$i, _$n, _$s, e, o = t < 0 ? "-" : "";
            _$i = Math.abs(t).toFixed(a.options.decimalPlaces);
            var r = (_$i += "").split(".");
            if (_$n = r[0], _$s = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
                e = "";
                for(var l = 3, h = 0, u = 0, p = _$n.length; u < p; ++u)a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = _$n[p - u - 1] + e;
                _$n = e;
            }
            return a.options.numerals && a.options.numerals.length && (_$n = _$n.replace(/[0-9]/g, function(t) {
                return a.options.numerals[+t];
            }), _$s = _$s.replace(/[0-9]/g, function(t) {
                return a.options.numerals[+t];
            })), o + a.options.prefix + _$n + _$s + a.options.suffix;
        }, this.easeOutExpo = function(t, i, n, s) {
            return n * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i;
        }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof i ? document.getElementById(i) : i, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
            return a.handleScroll(a);
        }), window.onscroll = function() {
            window.onScrollFns.forEach(function(t) {
                return t();
            });
        }, this.handleScroll(this)));
    }
    return i.prototype.handleScroll = function(t) {
        if (t && window && !t.once) {
            var _$i = window.innerHeight + window.scrollY, n = t.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
            a < _$i && a > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function() {
                return t.start();
            }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > a || s > _$i) && !t.paused && t.reset();
        }
    }, i.prototype.determineDirectionAndSmartEasing = function() {
        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > t;
        var _$i = t - this.startVal;
        if (Math.abs(_$i) > this.options.smartEasingThreshold && this.options.useEasing) {
            this.finalEndVal = t;
            var n = this.countDown ? 1 : -1;
            this.endVal = t + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
        } else this.endVal = t, this.finalEndVal = null;
        null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
    }, i.prototype.start = function(t) {
        this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, i.prototype.pauseResume = function() {
        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, i.prototype.reset = function() {
        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, i.prototype.update = function(t) {
        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, i.prototype.printValue = function(t) {
        var _$i;
        if (this.el) {
            var n = this.formattingFn(t);
            if (null === (_$i = this.options.plugin) || void 0 === _$i ? void 0 : _$i.render) this.options.plugin.render(this.el, n);
            else if ("INPUT" === this.el.tagName) this.el.value = n;
            else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
        }
    }, i.prototype.ensureNumber = function(t) {
        return "number" == typeof t && !isNaN(t);
    }, i.prototype.validateValue = function(t) {
        var _$i = Number(t);
        return this.ensureNumber(_$i) ? _$i : (this.error = "[CountUp] invalid start or end value: ".concat(t), null);
    }, i.prototype.resetDuration = function() {
        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, i;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iBm0a"}]},["iJtq4"], "iJtq4", "parcelRequire874f")

//# sourceMappingURL=base_revamp.3f126648.js.map
