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
})({"c5oxl":[function(require,module,exports) {
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _countUpMinJs = require("../libs/countup.js/dist/countUp.min.js");
var enableTwelveMonthContract = document.getElementById("enableTwelveMonthContract").value === "true";
if (!enableTwelveMonthContract) document.addEventListener("DOMContentLoaded", function() {
    var toggleSwitch = document.getElementById("billingSwitch");
    var billedElements = document.querySelectorAll(".billed");
    var perMoElements = document.querySelectorAll(".per-mo");
    var perTextElements = document.querySelectorAll(".per-text");
    var dynamicTextElements = document.querySelectorAll(".dynamic-text");
    var annualOnlyElements = document.querySelectorAll(".annual-only");
    // Get all contentToHide elements 
    var contentToHide = document.querySelectorAll(".contentToHide");
    // Initial billed text
    billedElements.forEach(function(element) {
        element.textContent = toggleSwitch.checked ? "/mo, billed annually" : "/mo, billed monthly";
    });
    perMoElements.forEach(function(element) {
        element.classList.add("hidden");
    });
    perTextElements.forEach(function(element) {
        element.textContent = toggleSwitch.checked ? "/yr" : "/mo";
    });
    // Toggle change listener
    toggleSwitch.addEventListener("change", function() {
        // Update billed text
        billedElements.forEach(function(element) {
            element.textContent = toggleSwitch.checked ? "/mo, billed annually" : "/mo, billed monthly";
        });
        perMoElements.forEach(function(element) {
            element.classList.toggle("hidden");
        });
        perTextElements.forEach(function(element) {
            element.textContent = toggleSwitch.checked ? "/yr" : "/mo";
        });
        dynamicTextElements.forEach(function(element) {
            element.textContent = toggleSwitch.checked ? element.dataset.annual : element.dataset.monthlyNoContract;
        });
        annualOnlyElements.forEach(function(element) {
            if (toggleSwitch.checked) element.classList.remove("hidden");
            else element.classList.add("hidden");
        });
    });
    $('[data-toggle="tooltip"]').tooltip();
});
if (!enableTwelveMonthContract) {
    var priceToggleElement = document.querySelector('[data-toggle="price"]');
    if (priceToggleElement && typeof (0, _countUpMinJs.CountUp) !== "undefined") priceToggleElement.addEventListener("change", function(event) {
        var targetElement = event.target;
        var isChecked = targetElement.checked;
        var targetSelector = targetElement.dataset.target;
        var targetNodes = document.querySelectorAll(targetSelector);
        targetNodes.forEach(function(node) {
            var annualValue = parseFloat(node.dataset.annual);
            var monthlyValue = parseFloat(node.dataset.monthlyWithContract || node.dataset.monthly);
            var duration = parseInt(node.dataset.duration) || 1;
            var useComma = node.dataset.useComma == "true";
            var options = node.dataset.options ? (0, _objectSpreadProps._)((0, _objectSpread._)({}, JSON.parse(node.dataset.options)), {
                duration: duration,
                useGrouping: false
            }) : {
                duration: duration,
                useGrouping: useComma
            };
            var endValue = isChecked ? annualValue : monthlyValue;
            var startValue = isChecked ? monthlyValue : annualValue;
            var countUpOptions = (0, _objectSpreadProps._)((0, _objectSpread._)({}, options), {
                startVal: startValue
            });
            var additionalCredits = node.dataset.annualAdditionalCredits;
            if (isChecked && additionalCredits) countUpOptions = (0, _objectSpreadProps._)((0, _objectSpread._)({}, countUpOptions), {
                suffix: " + ".concat(additionalCredits)
            });
            var countUpInstances = new (0, _countUpMinJs.CountUp)(node, endValue, countUpOptions);
            if (!countUpInstances.error) countUpInstances.start();
            else console.error(countUpInstances.error);
        });
    });
} else {
    var radioButtons = document.querySelectorAll("#radioButtons button");
    var lastButton = document.getElementById("annual-price");
    var targetNodes = document.querySelectorAll(".price");
    var billedElements = document.querySelectorAll(".billed");
    var perMoElements = document.querySelectorAll(".per-mo");
    var dynamicTextElements = document.querySelectorAll(".dynamic-text");
    var annualOnlyElements = document.querySelectorAll(".annual-only");
    perMoElements.forEach(function(element) {
        element.classList.add("hidden");
    });
    var freshSwitchElements = document.querySelectorAll(".fresh-switch");
    freshSwitchElements.forEach(function(element) {
        element.addEventListener("change", function() {
            var id = element.id.replace("fresh", "");
            var priceSpan = document.getElementById(id + "price");
            var freshPriceSpan = document.getElementById(id + "freshprice");
            var activeRadio = document.querySelector("#radioButtons button.btn-success");
            var priceType = "annual";
            switch(activeRadio.id){
                case "monthly-no-contract-price":
                    priceType = "monthlyNoContract";
                    break;
                case "monthly-with-contract-price":
                    priceType = "monthlyWithContract";
                    break;
                case "annual-price":
                    priceType = "annual";
                    break;
            }
            if (this.checked) // Update price with fresh price
            {
                if (freshPriceSpan && freshPriceSpan.dataset[priceType]) priceSpan.textContent = (parseInt(priceSpan.dataset[priceType]) + parseInt(freshPriceSpan.dataset[priceType])).toLocaleString();
            } else // Restore original price
            if (priceSpan && priceSpan.dataset[priceType]) priceSpan.textContent = parseInt(priceSpan.dataset[priceType]).toLocaleString();
        });
    });
    var periodElements = document.querySelectorAll(".period");
    if (radioButtons) radioButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            targetNodes.forEach(function(node) {
                var annualValue = parseFloat(node.dataset.annual);
                var monthlyValue = parseFloat(node.dataset.monthlyWithContract);
                var monthlyNCValue = parseFloat(node.dataset.monthlyNoContract);
                var duration = parseInt(node.dataset.duration) || 1;
                var useComma = node.dataset.useComma == "true";
                var decimalPlaces = 0;
                if (node.dataset.decimalPlaces) decimalPlaces = parseFloat(node.dataset.decimalPlaces);
                var options = node.dataset.options ? (0, _objectSpreadProps._)((0, _objectSpread._)({}, JSON.parse(node.dataset.options)), {
                    duration: duration,
                    useGrouping: false
                }) : {
                    duration: duration,
                    useGrouping: useComma,
                    decimalPlaces: decimalPlaces
                };
                var endValue = 0;
                switch(btn.id){
                    case "monthly-no-contract-price":
                        endValue = monthlyNCValue;
                        break;
                    case "monthly-with-contract-price":
                        endValue = monthlyValue;
                        break;
                    case "annual-price":
                        endValue = annualValue;
                        break;
                }
                var startValue = 0;
                switch(lastButton.id){
                    case "monthly-no-contract-price":
                        startValue = monthlyNCValue;
                        break;
                    case "monthly-with-contract-price":
                        startValue = monthlyValue;
                        break;
                    case "annual-price":
                        startValue = annualValue;
                        break;
                }
                var countUpOptions = (0, _objectSpreadProps._)((0, _objectSpread._)({}, options), {
                    startVal: startValue
                });
                var additionalCredits = node.dataset.annualAdditionalCredits;
                if (btn.id == "annual-price" && additionalCredits) countUpOptions = (0, _objectSpreadProps._)((0, _objectSpread._)({}, countUpOptions), {
                    suffix: " + ".concat(additionalCredits)
                });
                var countUpInstances = new (0, _countUpMinJs.CountUp)(node, endValue, countUpOptions);
                if (!countUpInstances.error) countUpInstances.start();
                else console.error(countUpInstances.error);
            });
            switch(btn.id){
                case "monthly-no-contract-price":
                    billedElements.forEach(function(elm) {
                        elm.textContent = "/mo, billed monthly, cancel anytime";
                    });
                    perMoElements.forEach(function(elm) {
                        elm.classList.remove("hidden");
                    });
                    periodElements.forEach(function(elm) {
                        elm.textContent = "Credits issued monthly, expire every month";
                    });
                    dynamicTextElements.forEach(function(elm) {
                        elm.textContent = elm.dataset.monthlyNoContract;
                    });
                    annualOnlyElements.forEach(function(elm) {
                        elm.classList.add("hidden");
                    });
                    break;
                case "monthly-with-contract-price":
                    billedElements.forEach(function(elm) {
                        elm.textContent = "/mo, billed monthly";
                    });
                    perMoElements.forEach(function(elm) {
                        elm.classList.remove("hidden");
                    });
                    periodElements.forEach(function(elm) {
                        elm.textContent = "Credits issued monthly, expire every month";
                    });
                    dynamicTextElements.forEach(function(elm) {
                        elm.textContent = elm.dataset.monthlyWithContract;
                    });
                    annualOnlyElements.forEach(function(elm) {
                        elm.classList.add("hidden");
                    });
                    break;
                case "annual-price":
                    billedElements.forEach(function(elm) {
                        elm.textContent = "/yr, billed annually";
                    });
                    perMoElements.forEach(function(elm) {
                        elm.classList.add("hidden");
                    });
                    periodElements.forEach(function(elm) {
                        elm.textContent = "12+2 months credits issued immediately, expire in a year";
                    });
                    dynamicTextElements.forEach(function(elm) {
                        elm.textContent = elm.dataset.annual;
                    });
                    annualOnlyElements.forEach(function(elm) {
                        elm.classList.remove("hidden");
                    });
                    break;
            }
            if (btn.id !== lastButton.id) {
                btn.classList.remove("text-muted");
                btn.classList.add("text-white");
                btn.classList.remove("btn-light");
                btn.classList.add("btn-success");
                btn.classList.remove("border-dark");
                btn.classList.add("border-success");
                if (btn.id === "annual-price") {
                    var badgeAnnual = btn.querySelector("span span span");
                    badgeAnnual.classList.add("badge-warning");
                    badgeAnnual.classList.remove("badge-secondary-soft");
                }
                if (btn.id === "monthly-with-contract-price") {
                    var badgeMonthly = btn.querySelector("span");
                    badgeMonthly.classList.add("badge-warning");
                    badgeMonthly.classList.remove("badge-secondary-soft");
                }
                radioButtons.forEach(function(b) {
                    b.classList.remove("active");
                    if (b.id !== btn.id) {
                        b.classList.add("text-muted");
                        b.classList.remove("text-white");
                        b.classList.add("btn-light");
                        b.classList.remove("btn-success");
                        b.classList.add("border-dark");
                        b.classList.remove("border-success");
                        b.classList.remove("activ");
                        b.setAttribute("aria-pressed", "true");
                        if (b.id === "annual-price") {
                            var badgeAnnual = b.querySelector("span span span");
                            badgeAnnual.classList.remove("badge-warning");
                            badgeAnnual.classList.add("badge-secondary-soft");
                        }
                        if (b.id === "monthly-with-contract-price") {
                            var badgeMonthly = b.querySelector("span");
                            badgeMonthly.classList.remove("badge-warning");
                            badgeMonthly.classList.add("badge-secondary-soft");
                        }
                    }
                });
                freshSwitchElements.forEach(function(elm) {
                    elm.checked = false;
                });
                lastButton = btn;
            }
        });
    });
}

},{"@swc/helpers/_/_object_spread":"fTzxz","@swc/helpers/_/_object_spread_props":"ckcIJ","../libs/countup.js/dist/countUp.min.js":"6JkUW"}],"fTzxz":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iBm0a"}],"iBm0a":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ckcIJ":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iBm0a"}]},["c5oxl"], "c5oxl", "parcelRequire874f")

//# sourceMappingURL=pricing.a8231482.js.map
