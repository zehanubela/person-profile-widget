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
})({"f7n4a":[function(require,module,exports) {
"use strict";
!function() {
    var e = document.querySelectorAll(".svg-shim > svg");
    /MSIE \d|Trident.*rv:/.test(navigator.userAgent) && [].forEach.call(e, function(e) {
        !function(e) {
            var t = window.getComputedStyle(e, null).getPropertyValue("color"), o = (new XMLSerializer).serializeToString(e);
            o = "data:image/svg+xml," + (o = (o = (o = (o = (o = (o = o.replace(/currentColor/g, t)).replace(/\s\s+/g, " ")).replace(/</g, "%3C")).replace(/>/g, "%3E")).replace(/#/g, "%23")).replace(/"/g, "'"));
            var n = document.createElement("img");
            n.src = o, n.alt = "...";
            var a = e.parentNode;
            a.appendChild(n), a.removeChild(e);
        }(e);
    });
}(), "undefined" != typeof AOS && AOS.init({
    duration: 700,
    easing: "ease-out-quad",
    once: !0,
    startEvent: "load"
}), function() {
    var e = document.querySelectorAll("[data-choices]");
    "undefined" != typeof Choices && e && [].forEach.call(e, function(e) {
        !function(e) {
            var t = e.dataset.choices ? JSON.parse(e.dataset.choices) : {}, o = {
                searchEnabled: !1,
                classNames: {
                    containerInner: e.className,
                    list: "none",
                    listSingle: "none",
                    listDropdown: "dropdown-menu",
                    itemChoice: "dropdown-item",
                    activeState: "show",
                    selectedState: "active"
                }
            }, n = Object.assign(o, t);
            new Choices(e, n);
        }(e);
    });
}(), function() {
    var e = document.querySelectorAll('[data-toggle="countup"]');
    function o(e) {
        var t = e.dataset.from ? +e.dataset.from : null, o = e.dataset.to ? +e.dataset.to : null, n = e.dataset.decimals ? +e.dataset.decimals : null, a = e.dataset.duration ? +e.dataset.duration : null, i = e.dataset.options ? JSON.parse(e.dataset.options) : null, l = new CountUp(e, t, o, n, a, i);
        l.error ? console.error(l.error) : (l.start(), e.classList.add("counted"));
    }
    "undefined" != typeof CountUp && e && [].forEach.call(e, function(e) {
        "countup:in" !== e.getAttribute("data-aos-id") && o(e);
    }), document.addEventListener("aos:in:countup:in", function(e) {
        if (e.detail instanceof Element) o(e.detail);
        else {
            var t = document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)');
            [].forEach.call(t, function(e) {
                o(e);
            });
        }
    });
}(), function() {
    var e = document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropright"), n = [
        "mouseenter"
    ], a = [
        "mouseleave",
        "click"
    ];
    [].forEach.call(e, function(t) {
        var o = t.querySelector(".dropdown-menu");
        n.forEach(function(e) {
            t.addEventListener(e, function() {
                !function(e) {
                    window.innerWidth < 992 || (e.classList.add("showing"), setTimeout(function() {
                        e.classList.remove("showing"), e.classList.add("show");
                    }, 1));
                }(o);
            });
        }), a.forEach(function(e) {
            t.addEventListener(e, function(e) {
                !function(e, t) {
                    window.innerWidth < 992 || t.classList.contains("show") && ("click" === e.type && e.target.closest(".dropdown-menu form") || (t.classList.add("showing"), t.classList.remove("show"), setTimeout(function() {
                        t.classList.remove("showing");
                    }, 200)));
                }(e, o);
            });
        });
    });
}(), function() {
    var e = document.querySelectorAll("[data-dropzone]");
    "undefined" != typeof Dropzone && e && (Dropzone.autoDiscover = !1, Dropzone.thumbnailWidth = null, Dropzone.thumbnailHeight = null, [].forEach.call(e, function(e) {
        !function(e) {
            var t = void 0, o = e.dataset.dropzone ? JSON.parse(e.dataset.dropzone) : {}, n = {
                previewsContainer: e.querySelector(".dz-preview"),
                previewTemplate: e.querySelector(".dz-preview").innerHTML,
                init: function init() {
                    this.on("addedfile", function(e) {
                        1 == o.maxFiles && t && this.removeFile(t), t = e;
                    });
                }
            }, a = Object.assign(n, o);
            e.querySelector(".dz-preview").innerHTML = "", new Dropzone(e, a);
        }(e);
    }));
}(), jQuery().fancybox && ($.fancybox.defaults.image.preload = !1, $.fancybox.defaults.toolbar = !1, $.fancybox.defaults.clickContent = !1), function() {
    var e = document.querySelectorAll(".highlight");
    "undefined" != typeof hljs && e && [].forEach.call(e, function(e) {
        !function(e) {
            hljs.highlightBlock(e);
        }(e);
    });
}(), function() {
    var e = $("[data-isotope]");
    $("[data-filter]").on("click", function() {
        var e = $(this), t = e.data("filter"), o = e.data("target");
        $(o).isotope({
            filter: t
        });
    }), e.imagesLoaded().progress(function() {
        e.isotope("layout");
    });
}(), function() {
    var e = document.querySelectorAll('[data-toggle="map"]');
    "undefined" != typeof mapboxgl && e && [].forEach.call(e, function(e) {
        !function(e) {
            var t = e.dataset.options;
            t = t ? JSON.parse(t) : {};
            var o = {
                container: e,
                style: "mapbox://styles/mapbox/light-v9",
                scrollZoom: !1,
                interactive: !1
            }, n = Object.assign(o, t);
            mapboxgl.accessToken = "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg", new mapboxgl.Map(n);
        }(e);
    });
}(), function() {
    var e = document.querySelectorAll(".modal");
    function t() {
        var e = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.overflow = "hidden", document.body.style.paddingRight = e + "px";
    }
    $(e).on({
        "show.bs.modal": function() {
            t();
        },
        "hidden.bs.modal": function() {
            document.documentElement.style.overflow = "", document.body.style.paddingRight = "";
        }
    });
}(), function() {
    var e = document.querySelectorAll(".navbar-togglable"), t = document.querySelectorAll(".navbar-collapse"), o = [
        "load",
        "scroll"
    ], n = !1;
    function a(e) {
        var t = window.pageYOffset;
        t && !n && function(e) {
            e.classList.remove("navbar-dark"), e.classList.add("navbar-light"), e.classList.add("bg-white"), n = !0;
        }(e), t || function(e) {
            e.classList.remove("navbar-light"), e.classList.remove("bg-white"), e.classList.add("navbar-dark"), n = !1;
        }(e);
    }
    function i() {
        var e = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.overflow = "hidden", document.body.style.paddingRight = e + "px";
    }
    [].forEach.call(e, function(t) {
        o.forEach(function(e) {
            window.addEventListener(e, function() {
                a(t);
            });
        });
    }), [].forEach.call(t, function(e) {
        $(e).on({
            "show.bs.collapse": function() {
                i();
            },
            "hidden.bs.collapse": function() {
                document.documentElement.style.overflow = "", document.body.style.paddingRight = "";
            }
        });
    });
}(), function() {
    var e = document.querySelectorAll('[data-toggle="popover"]');
    e && $(e).popover({
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h6 class="popover-header text-uppercase"></h6><div class="popover-body"></div></div>'
    });
}(), function() {
    var e = document.querySelector('[data-toggle="price"]');
    "undefined" != typeof CountUp && e && e.addEventListener("change", function(e) {
        !function(e) {
            var t = e.target, c = t.checked, o = t.dataset.target, n = document.querySelectorAll(o);
            [].forEach.call(n, function(e) {
                var t = e.dataset.annual, o = e.dataset.monthly, n = e.dataset.decimals ? e.dataset.decimals : null, a = e.dataset.duration ? e.dataset.duration : 1, i = e.dataset.options ? JSON.parse(e.dataset.options) : null, l = c ? new CountUp(e, t, o, n, a, i) : new CountUp(e, o, t, n, a, i);
                l.error ? console.error(l.error) : l.start();
            });
        }(e);
    });
}(), function() {
    var e = document.querySelectorAll("[data-quill]");
    "undefined" != typeof Quill && e && [].forEach.call(e, function(e) {
        !function(e) {
            var t = e.dataset.quill ? JSON.parse(e.dataset.quill) : {}, o = Object.assign({
                modules: {
                    toolbar: [
                        [
                            "bold",
                            "italic"
                        ],
                        [
                            "link",
                            "blockquote",
                            "code",
                            "image"
                        ],
                        [
                            {
                                list: "ordered"
                            },
                            {
                                list: "bullet"
                            }
                        ]
                    ]
                },
                theme: "snow"
            }, t);
            new Quill(e, o);
        }(e);
    });
}(), function() {
    var e = '[data-toggle="smooth-scroll"]';
    "undefined" != typeof SmoothScroll && new SmoothScroll(e, {
        header: ".navbar.fixed-top",
        offset: function offset(e, t) {
            return t.dataset.offset ? t.dataset.offset : 24;
        }
    });
}(), function() {
    var e = document.querySelectorAll('[data-toggle="tooltip"]');
    e && $(e).tooltip();
}(), function() {
    var e = document.querySelectorAll('[data-toggle="typed"]');
    "undefined" != typeof Typed && e && [].forEach.call(e, function(e) {
        !function(e) {
            var t = e.dataset.options;
            t = t ? JSON.parse(t) : {};
            var o = Object.assign({
                typeSpeed: 40,
                backSpeed: 40,
                backDelay: 1e3,
                loop: !0
            }, t);
            new Typed(e, o);
        }(e);
    });
}();

},{}]},["f7n4a"], "f7n4a", "parcelRequire874f")

//# sourceMappingURL=base_revamp.37bb0517.js.map
