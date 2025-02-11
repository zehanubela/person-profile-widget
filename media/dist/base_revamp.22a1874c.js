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
})({"bG8R7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _flickity = require("flickity");
var _flickityDefault = parcelHelpers.interopDefault(_flickity);
var _flickityFade = require("flickity-fade");
var _flickityFadeDefault = parcelHelpers.interopDefault(_flickityFade);

},{"flickity":"f8rAZ","flickity-fade":"euwaz","@parcel/transformer-js/src/esmodule-helpers.js":"iBm0a"}],"f8rAZ":[function(require,module,exports) {
/*!
 * Flickity v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */ (function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "./drag",
        "./prev-next-button",
        "./page-dots",
        "./player",
        "./add-remove-cell",
        "./lazyload"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("916f2cef6b478cea"), require("17346003edd43702"), require("61bbf3823b7a0657"), require("34730125c87c486c"), require("cd61e7e81797f3be"), require("6babdbcf2241f3f1"), require("58578db8512edeab"));
})(window, function factory(Flickity) {
    return Flickity;
});

},{"916f2cef6b478cea":"4MqCI","17346003edd43702":"5pELg","61bbf3823b7a0657":"74dSE","34730125c87c486c":"aWG0z","cd61e7e81797f3be":"iEia8","6babdbcf2241f3f1":"arc5b","58578db8512edeab":"6nJx2"}],"4MqCI":[function(require,module,exports) {
// Flickity main
/* eslint-disable max-params */ (function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./slide",
        "./animate"
    ], function(EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
        return factory(window1, EvEmitter, getSize, utils, Cell, Slide, animatePrototype);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("6f189615fc0ababd"), require("59340b5a8c6788"), require("df8475a9f6de5284"), require("e851d5b02732a72f"), require("c80701d161fc8b01"), require("847315fd899f1659"));
    else {
        // browser global
        var _Flickity = window1.Flickity;
        window1.Flickity = factory(window1, window1.EvEmitter, window1.getSize, window1.fizzyUIUtils, _Flickity.Cell, _Flickity.Slide, _Flickity.animatePrototype);
    }
})(window, function factory(window1, EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
    /* eslint-enable max-params */ "use strict";
    // vars
    var jQuery = window1.jQuery;
    var getComputedStyle = window1.getComputedStyle;
    var console = window1.console;
    function moveElements(elems, toElem) {
        elems = utils.makeArray(elems);
        while(elems.length)toElem.appendChild(elems.shift());
    }
    // -------------------------- Flickity -------------------------- //
    // globally unique identifiers
    var GUID = 0;
    // internal store of all Flickity intances
    var instances = {};
    function Flickity(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) console.error("Bad element for Flickity: " + (queryElement || element));
            return;
        }
        this.element = queryElement;
        // do not initialize twice on same element
        if (this.element.flickityGUID) {
            var instance = instances[this.element.flickityGUID];
            if (instance) instance.option(options);
            return instance;
        }
        // add jQuery
        if (jQuery) this.$element = jQuery(this.element);
        // options
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        // kick things off
        this._create();
    }
    Flickity.defaults = {
        accessibility: true,
        // adaptiveHeight: false,
        cellAlign: "center",
        // cellSelector: undefined,
        // contain: false,
        freeScrollFriction: 0.075,
        friction: 0.28,
        namespaceJQueryEvents: true,
        // initialIndex: 0,
        percentPosition: true,
        resize: true,
        selectedAttraction: 0.025,
        setGallerySize: true
    };
    // hash of methods triggered on _create()
    Flickity.createMethods = [];
    var proto = Flickity.prototype;
    // inherit EventEmitter
    utils.extend(proto, EvEmitter.prototype);
    proto._create = function() {
        // add id for Flickity.data
        var id = this.guid = ++GUID;
        this.element.flickityGUID = id; // expando
        instances[id] = this; // associate via id
        // initial properties
        this.selectedIndex = 0;
        // how many frames slider has been in same position
        this.restingFrames = 0;
        // initial physics properties
        this.x = 0;
        this.velocity = 0;
        this.originSide = this.options.rightToLeft ? "right" : "left";
        // create viewport & slider
        this.viewport = document.createElement("div");
        this.viewport.className = "flickity-viewport";
        this._createSlider();
        if (this.options.resize || this.options.watchCSS) window1.addEventListener("resize", this);
        // add listeners from on option
        for(var eventName in this.options.on){
            var listener = this.options.on[eventName];
            this.on(eventName, listener);
        }
        Flickity.createMethods.forEach(function(method) {
            this[method]();
        }, this);
        if (this.options.watchCSS) this.watchCSS();
        else this.activate();
    };
    /**
 * set options
 * @param {Object} opts - options to extend
 */ proto.option = function(opts) {
        utils.extend(this.options, opts);
    };
    proto.activate = function() {
        if (this.isActive) return;
        this.isActive = true;
        this.element.classList.add("flickity-enabled");
        if (this.options.rightToLeft) this.element.classList.add("flickity-rtl");
        this.getSize();
        // move initial cell elements so they can be loaded as cells
        var cellElems = this._filterFindCellElements(this.element.children);
        moveElements(cellElems, this.slider);
        this.viewport.appendChild(this.slider);
        this.element.appendChild(this.viewport);
        // get cells from children
        this.reloadCells();
        if (this.options.accessibility) {
            // allow element to focusable
            this.element.tabIndex = 0;
            // listen for key presses
            this.element.addEventListener("keydown", this);
        }
        this.emitEvent("activate");
        this.selectInitialIndex();
        // flag for initial activation, for using initialIndex
        this.isInitActivated = true;
        // ready event. #493
        this.dispatchEvent("ready");
    };
    // slider positions the cells
    proto._createSlider = function() {
        // slider element does all the positioning
        var slider = document.createElement("div");
        slider.className = "flickity-slider";
        slider.style[this.originSide] = 0;
        this.slider = slider;
    };
    proto._filterFindCellElements = function(elems) {
        return utils.filterFindElements(elems, this.options.cellSelector);
    };
    // goes through all children
    proto.reloadCells = function() {
        // collection of item elements
        this.cells = this._makeCells(this.slider.children);
        this.positionCells();
        this._getWrapShiftCells();
        this.setGallerySize();
    };
    /**
 * turn elements into Flickity.Cells
 * @param {[Array, NodeList, HTMLElement]} elems - elements to make into cells
 * @returns {Array} items - collection of new Flickity Cells
 */ proto._makeCells = function(elems) {
        var cellElems = this._filterFindCellElements(elems);
        // create new Flickity for collection
        var cells = cellElems.map(function(cellElem) {
            return new Cell(cellElem, this);
        }, this);
        return cells;
    };
    proto.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    };
    proto.getLastSlide = function() {
        return this.slides[this.slides.length - 1];
    };
    // positions all cells
    proto.positionCells = function() {
        // size all cells
        this._sizeCells(this.cells);
        // position all cells
        this._positionCells(0);
    };
    /**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */ proto._positionCells = function(index) {
        index = index || 0;
        // also measure maxCellHeight
        // start 0 if positioning all cells
        this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
        var cellX = 0;
        // get cellX
        if (index > 0) {
            var startCell = this.cells[index - 1];
            cellX = startCell.x + startCell.size.outerWidth;
        }
        var len = this.cells.length;
        for(var i = index; i < len; i++){
            var cell = this.cells[i];
            cell.setPosition(cellX);
            cellX += cell.size.outerWidth;
            this.maxCellHeight = Math.max(cell.size.outerHeight, this.maxCellHeight);
        }
        // keep track of cellX for wrap-around
        this.slideableWidth = cellX;
        // slides
        this.updateSlides();
        // contain slides target
        this._containSlides();
        // update slidesWidth
        this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
    };
    /**
 * cell.getSize() on multiple cells
 * @param {Array} cells - cells to size
 */ proto._sizeCells = function(cells) {
        cells.forEach(function(cell) {
            cell.getSize();
        });
    };
    // --------------------------  -------------------------- //
    proto.updateSlides = function() {
        this.slides = [];
        if (!this.cells.length) return;
        var slide = new Slide(this);
        this.slides.push(slide);
        var isOriginLeft = this.originSide == "left";
        var nextMargin = isOriginLeft ? "marginRight" : "marginLeft";
        var canCellFit = this._getCanCellFit();
        this.cells.forEach(function(cell, i) {
            // just add cell if first cell in slide
            if (!slide.cells.length) {
                slide.addCell(cell);
                return;
            }
            var slideWidth = slide.outerWidth - slide.firstMargin + (cell.size.outerWidth - cell.size[nextMargin]);
            if (canCellFit.call(this, i, slideWidth)) slide.addCell(cell);
            else {
                // doesn't fit, new slide
                slide.updateTarget();
                slide = new Slide(this);
                this.slides.push(slide);
                slide.addCell(cell);
            }
        }, this);
        // last slide
        slide.updateTarget();
        // update .selectedSlide
        this.updateSelectedSlide();
    };
    proto._getCanCellFit = function() {
        var groupCells = this.options.groupCells;
        if (!groupCells) return function() {
            return false;
        };
        else if (typeof groupCells == "number") {
            // group by number. 3 -> [0,1,2], [3,4,5], ...
            var number = parseInt(groupCells, 10);
            return function(i) {
                return i % number !== 0;
            };
        }
        // default, group by width of slide
        // parse '75%
        var percentMatch = typeof groupCells == "string" && groupCells.match(/^(\d+)%$/);
        var percent = percentMatch ? parseInt(percentMatch[1], 10) / 100 : 1;
        return function(i, slideWidth) {
            /* eslint-disable-next-line no-invalid-this */ return slideWidth <= (this.size.innerWidth + 1) * percent;
        };
    };
    // alias _init for jQuery plugin .flickity()
    proto._init = proto.reposition = function() {
        this.positionCells();
        this.positionSliderAtSelected();
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
        this.setCellAlign();
        this.cursorPosition = this.size.innerWidth * this.cellAlign;
    };
    var cellAlignShorthands = {
        // cell align, then based on origin side
        center: {
            left: 0.5,
            right: 0.5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    proto.setCellAlign = function() {
        var shorthand = cellAlignShorthands[this.options.cellAlign];
        this.cellAlign = shorthand ? shorthand[this.originSide] : this.options.cellAlign;
    };
    proto.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var height = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = height + "px";
        }
    };
    proto._getWrapShiftCells = function() {
        // only for wrap-around
        if (!this.options.wrapAround) return;
        // unshift previous cells
        this._unshiftCells(this.beforeShiftCells);
        this._unshiftCells(this.afterShiftCells);
        // get before cells
        // initial gap
        var gapX = this.cursorPosition;
        var cellIndex = this.cells.length - 1;
        this.beforeShiftCells = this._getGapCells(gapX, cellIndex, -1);
        // get after cells
        // ending gap between last cell and end of gallery viewport
        gapX = this.size.innerWidth - this.cursorPosition;
        // start cloning at first cell, working forwards
        this.afterShiftCells = this._getGapCells(gapX, 0, 1);
    };
    proto._getGapCells = function(gapX, cellIndex, increment) {
        // keep adding cells until the cover the initial gap
        var cells = [];
        while(gapX > 0){
            var cell = this.cells[cellIndex];
            if (!cell) break;
            cells.push(cell);
            cellIndex += increment;
            gapX -= cell.size.outerWidth;
        }
        return cells;
    };
    // ----- contain ----- //
    // contain cell targets so no excess sliding
    proto._containSlides = function() {
        if (!this.options.contain || this.options.wrapAround || !this.cells.length) return;
        var isRightToLeft = this.options.rightToLeft;
        var beginMargin = isRightToLeft ? "marginRight" : "marginLeft";
        var endMargin = isRightToLeft ? "marginLeft" : "marginRight";
        var contentWidth = this.slideableWidth - this.getLastCell().size[endMargin];
        // content is less than gallery size
        var isContentSmaller = contentWidth < this.size.innerWidth;
        // bounds
        var beginBound = this.cursorPosition + this.cells[0].size[beginMargin];
        var endBound = contentWidth - this.size.innerWidth * (1 - this.cellAlign);
        // contain each cell target
        this.slides.forEach(function(slide) {
            if (isContentSmaller) // all cells fit inside gallery
            slide.target = contentWidth * this.cellAlign;
            else {
                // contain to bounds
                slide.target = Math.max(slide.target, beginBound);
                slide.target = Math.min(slide.target, endBound);
            }
        }, this);
    };
    // -----  ----- //
    /**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */ proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [
            event
        ].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery && this.$element) {
            // default trigger with type if no event
            type += this.options.namespaceJQueryEvents ? ".flickity" : "";
            var $event = type;
            if (event) {
                // create jQuery event
                var jQEvent = new jQuery.Event(event);
                jQEvent.type = type;
                $event = jQEvent;
            }
            this.$element.trigger($event, args);
        }
    };
    // -------------------------- select -------------------------- //
    /**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */ proto.select = function(index, isWrap, isInstant) {
        if (!this.isActive) return;
        index = parseInt(index, 10);
        this._wrapSelect(index);
        if (this.options.wrapAround || isWrap) index = utils.modulo(index, this.slides.length);
        // bail if invalid index
        if (!this.slides[index]) return;
        var prevIndex = this.selectedIndex;
        this.selectedIndex = index;
        this.updateSelectedSlide();
        if (isInstant) this.positionSliderAtSelected();
        else this.startAnimation();
        if (this.options.adaptiveHeight) this.setGallerySize();
        // events
        this.dispatchEvent("select", null, [
            index
        ]);
        // change event if new index
        if (index != prevIndex) this.dispatchEvent("change", null, [
            index
        ]);
        // old v1 event name, remove in v3
        this.dispatchEvent("cellSelect");
    };
    // wraps position for wrapAround, to move to closest slide. #113
    proto._wrapSelect = function(index) {
        var len = this.slides.length;
        var isWrapping = this.options.wrapAround && len > 1;
        if (!isWrapping) return index;
        var wrapIndex = utils.modulo(index, len);
        // go to shortest
        var delta = Math.abs(wrapIndex - this.selectedIndex);
        var backWrapDelta = Math.abs(wrapIndex + len - this.selectedIndex);
        var forewardWrapDelta = Math.abs(wrapIndex - len - this.selectedIndex);
        if (!this.isDragSelect && backWrapDelta < delta) index += len;
        else if (!this.isDragSelect && forewardWrapDelta < delta) index -= len;
        // wrap position so slider is within normal area
        if (index < 0) this.x -= this.slideableWidth;
        else if (index >= len) this.x += this.slideableWidth;
    };
    proto.previous = function(isWrap, isInstant) {
        this.select(this.selectedIndex - 1, isWrap, isInstant);
    };
    proto.next = function(isWrap, isInstant) {
        this.select(this.selectedIndex + 1, isWrap, isInstant);
    };
    proto.updateSelectedSlide = function() {
        var slide = this.slides[this.selectedIndex];
        // selectedIndex could be outside of slides, if triggered before resize()
        if (!slide) return;
        // unselect previous selected slide
        this.unselectSelectedSlide();
        // update new selected slide
        this.selectedSlide = slide;
        slide.select();
        this.selectedCells = slide.cells;
        this.selectedElements = slide.getCellElements();
        // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
        // Remove in v3?
        this.selectedCell = slide.cells[0];
        this.selectedElement = this.selectedElements[0];
    };
    proto.unselectSelectedSlide = function() {
        if (this.selectedSlide) this.selectedSlide.unselect();
    };
    proto.selectInitialIndex = function() {
        var initialIndex = this.options.initialIndex;
        // already activated, select previous selectedIndex
        if (this.isInitActivated) {
            this.select(this.selectedIndex, false, true);
            return;
        }
        // select with selector string
        if (initialIndex && typeof initialIndex == "string") {
            var cell = this.queryCell(initialIndex);
            if (cell) {
                this.selectCell(initialIndex, false, true);
                return;
            }
        }
        var index = 0;
        // select with number
        if (initialIndex && this.slides[initialIndex]) index = initialIndex;
        // select instantly
        this.select(index, false, true);
    };
    /**
 * select slide from number or cell element
 * @param {[Element, Number]} value - zero-based index or element to select
 * @param {Boolean} isWrap - enables wrapping around for extra index
 * @param {Boolean} isInstant - disables slide animation
 */ proto.selectCell = function(value, isWrap, isInstant) {
        // get cell
        var cell = this.queryCell(value);
        if (!cell) return;
        var index = this.getCellSlideIndex(cell);
        this.select(index, isWrap, isInstant);
    };
    proto.getCellSlideIndex = function(cell) {
        // get index of slides that has cell
        for(var i = 0; i < this.slides.length; i++){
            var slide = this.slides[i];
            var index = slide.cells.indexOf(cell);
            if (index != -1) return i;
        }
    };
    // -------------------------- get cells -------------------------- //
    /**
 * get Flickity.Cell, given an Element
 * @param {Element} elem - matching cell element
 * @returns {Flickity.Cell} cell - matching cell
 */ proto.getCell = function(elem) {
        // loop through cells to get the one that matches
        for(var i = 0; i < this.cells.length; i++){
            var cell = this.cells[i];
            if (cell.element == elem) return cell;
        }
    };
    /**
 * get collection of Flickity.Cells, given Elements
 * @param {[Element, Array, NodeList]} elems - multiple elements
 * @returns {Array} cells - Flickity.Cells
 */ proto.getCells = function(elems) {
        elems = utils.makeArray(elems);
        var cells = [];
        elems.forEach(function(elem) {
            var cell = this.getCell(elem);
            if (cell) cells.push(cell);
        }, this);
        return cells;
    };
    /**
 * get cell elements
 * @returns {Array} cellElems
 */ proto.getCellElements = function() {
        return this.cells.map(function(cell) {
            return cell.element;
        });
    };
    /**
 * get parent cell from an element
 * @param {Element} elem - child element
 * @returns {Flickit.Cell} cell - parent cell
 */ proto.getParentCell = function(elem) {
        // first check if elem is cell
        var cell = this.getCell(elem);
        if (cell) return cell;
        // try to get parent cell elem
        elem = utils.getParent(elem, ".flickity-slider > *");
        return this.getCell(elem);
    };
    /**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */ proto.getAdjacentCellElements = function(adjCount, index) {
        if (!adjCount) return this.selectedSlide.getCellElements();
        index = index === undefined ? this.selectedIndex : index;
        var len = this.slides.length;
        if (1 + adjCount * 2 >= len) return this.getCellElements();
        var cellElems = [];
        for(var i = index - adjCount; i <= index + adjCount; i++){
            var slideIndex = this.options.wrapAround ? utils.modulo(i, len) : i;
            var slide = this.slides[slideIndex];
            if (slide) cellElems = cellElems.concat(slide.getCellElements());
        }
        return cellElems;
    };
    /**
 * select slide from number or cell element
 * @param {[Element, String, Number]} selector - element, selector string, or index
 * @returns {Flickity.Cell} - matching cell
 */ proto.queryCell = function(selector) {
        if (typeof selector == "number") // use number as index
        return this.cells[selector];
        if (typeof selector == "string") {
            // do not select invalid selectors from hash: #123, #/. #791
            if (selector.match(/^[#.]?[\d/]/)) return;
            // use string as selector, get element
            selector = this.element.querySelector(selector);
        }
        // get cell from element
        return this.getCell(selector);
    };
    // -------------------------- events -------------------------- //
    proto.uiChange = function() {
        this.emitEvent("uiChange");
    };
    // keep focus on element when child UI elements are clicked
    proto.childUIPointerDown = function(event) {
        // HACK iOS does not allow touch events to bubble up?!
        if (event.type != "touchstart") event.preventDefault();
        this.focus();
    };
    // ----- resize ----- //
    proto.onresize = function() {
        this.watchCSS();
        this.resize();
    };
    utils.debounceMethod(Flickity, "onresize", 150);
    proto.resize = function() {
        // #1177 disable resize behavior when animating or dragging for iOS 15
        if (!this.isActive || this.isAnimating || this.isDragging) return;
        this.getSize();
        // wrap values
        if (this.options.wrapAround) this.x = utils.modulo(this.x, this.slideableWidth);
        this.positionCells();
        this._getWrapShiftCells();
        this.setGallerySize();
        this.emitEvent("resize");
        // update selected index for group slides, instant
        // TODO: position can be lost between groups of various numbers
        var selectedElement = this.selectedElements && this.selectedElements[0];
        this.selectCell(selectedElement, false, true);
    };
    // watches the :after property, activates/deactivates
    proto.watchCSS = function() {
        var watchOption = this.options.watchCSS;
        if (!watchOption) return;
        var afterContent = getComputedStyle(this.element, ":after").content;
        // activate if :after { content: 'flickity' }
        if (afterContent.indexOf("flickity") != -1) this.activate();
        else this.deactivate();
    };
    // ----- keydown ----- //
    // go previous/next if left/right keys pressed
    proto.onkeydown = function(event) {
        // only work if element is in focus
        var isNotFocused = document.activeElement && document.activeElement != this.element;
        if (!this.options.accessibility || isNotFocused) return;
        var handler = Flickity.keyboardHandlers[event.keyCode];
        if (handler) handler.call(this);
    };
    Flickity.keyboardHandlers = {
        // left arrow
        37: function() {
            var leftMethod = this.options.rightToLeft ? "next" : "previous";
            this.uiChange();
            this[leftMethod]();
        },
        // right arrow
        39: function() {
            var rightMethod = this.options.rightToLeft ? "previous" : "next";
            this.uiChange();
            this[rightMethod]();
        }
    };
    // ----- focus ----- //
    proto.focus = function() {
        // TODO remove scrollTo once focus options gets more support
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus ...
        //    #Browser_compatibility
        var prevScrollY = window1.pageYOffset;
        this.element.focus({
            preventScroll: true
        });
        // hack to fix scroll jump after focus, #76
        if (window1.pageYOffset != prevScrollY) window1.scrollTo(window1.pageXOffset, prevScrollY);
    };
    // -------------------------- destroy -------------------------- //
    // deactivate all Flickity functionality, but keep stuff available
    proto.deactivate = function() {
        if (!this.isActive) return;
        this.element.classList.remove("flickity-enabled");
        this.element.classList.remove("flickity-rtl");
        this.unselectSelectedSlide();
        // destroy cells
        this.cells.forEach(function(cell) {
            cell.destroy();
        });
        this.element.removeChild(this.viewport);
        // move child elements back into element
        moveElements(this.slider.children, this.element);
        if (this.options.accessibility) {
            this.element.removeAttribute("tabIndex");
            this.element.removeEventListener("keydown", this);
        }
        // set flags
        this.isActive = false;
        this.emitEvent("deactivate");
    };
    proto.destroy = function() {
        this.deactivate();
        window1.removeEventListener("resize", this);
        this.allOff();
        this.emitEvent("destroy");
        if (jQuery && this.$element) jQuery.removeData(this.element, "flickity");
        delete this.element.flickityGUID;
        delete instances[this.guid];
    };
    // -------------------------- prototype -------------------------- //
    utils.extend(proto, animatePrototype);
    // -------------------------- extras -------------------------- //
    /**
 * get Flickity instance from element
 * @param {[Element, String]} elem - element or selector string
 * @returns {Flickity} - Flickity instance
 */ Flickity.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.flickityGUID;
        return id && instances[id];
    };
    utils.htmlInit(Flickity, "flickity");
    if (jQuery && jQuery.bridget) jQuery.bridget("flickity", Flickity);
    // set internal jQuery, for Webpack + jQuery v3, #478
    Flickity.setJQuery = function(jq) {
        jQuery = jq;
    };
    Flickity.Cell = Cell;
    Flickity.Slide = Slide;
    return Flickity;
});

},{"6f189615fc0ababd":"c194x","59340b5a8c6788":"iwvrs","df8475a9f6de5284":"79GsT","e851d5b02732a72f":"9Z7X0","c80701d161fc8b01":"3yaJz","847315fd899f1659":"aTHD4"}],"c194x":[function(require,module,exports) {
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */ (function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define(factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != "undefined" ? window : this, function() {
    "use strict";
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}],"iwvrs":[function(require,module,exports) {
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */ /* globals console: false */ (function(window1, factory) {
    /* jshint strict: false */ /* globals define, module */ if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.getSize = factory();
})(window, function factory() {
    "use strict";
    // -------------------------- helpers -------------------------- //
    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == "undefined" ? noop : function logError(message) {
        console.error(message);
    };
    // -------------------------- measurements -------------------------- //
    var measurements = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
    ];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    // -------------------------- getStyle -------------------------- //
    /**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */ function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1");
        return style;
    }
    // -------------------------- setup -------------------------- //
    var isSetup = false;
    var isBoxSizeOuter;
    /**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */ function setup() {
        // setup once
        if (isSetup) return;
        isSetup = true;
        // -------------------------- box sizing -------------------------- //
        /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */ var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style.boxSizing = "border-box";
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        // round value for browser zoom. desandro/masonry#928
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }
    // -------------------------- getSize -------------------------- //
    function getSize(elem) {
        setup();
        // use querySeletor if elem is string
        if (typeof elem == "string") elem = document.querySelector(elem);
        // do not proceed on non-objects
        if (!elem || typeof elem != "object" || !elem.nodeType) return;
        var style = getStyle(elem);
        // if hidden, everything is 0
        if (style.display == "none") return getZeroSize();
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
        // get all measurements
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            // any 'auto', 'medium' value will be 0
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) size.width = styleWidth + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) size.height = styleHeight + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});

},{}],"79GsT":[function(require,module,exports) {
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "desandro-matches-selector/matches-selector"
    ], function(matchesSelector) {
        return factory(window1, matchesSelector);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("eb570a2463945fb8"));
    else // browser global
    window1.fizzyUIUtils = factory(window1, window1.matchesSelector);
})(window, function factory(window1, matchesSelector) {
    "use strict";
    var utils = {};
    // ----- extend ----- //
    // extends objects
    utils.extend = function(a, b) {
        for(var prop in b)a[prop] = b[prop];
        return a;
    };
    // ----- modulo ----- //
    utils.modulo = function(num, div) {
        return (num % div + div) % div;
    };
    // ----- makeArray ----- //
    var arraySlice = Array.prototype.slice;
    // turn element or nodeList into an array
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) // use object if already an array
        return obj;
        // return empty array if undefined or null. #6
        if (obj === null || obj === undefined) return [];
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) // convert nodeList to array
        return arraySlice.call(obj);
        // array of single index
        return [
            obj
        ];
    };
    // ----- removeFrom ----- //
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) ary.splice(index, 1);
    };
    // ----- getParent ----- //
    utils.getParent = function(elem, selector) {
        while(elem.parentNode && elem != document.body){
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) return elem;
        }
    };
    // ----- getQueryElement ----- //
    // use element as selector string
    utils.getQueryElement = function(elem) {
        if (typeof elem == "string") return document.querySelector(elem);
        return elem;
    };
    // ----- handleEvent ----- //
    // enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    // ----- filterFindElements ----- //
    utils.filterFindElements = function(elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) return;
            // add elem if no selector
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            // filter & find items if we have a selector
            // filter
            if (matchesSelector(elem, selector)) ffElems.push(elem);
            // find children
            var childElems = elem.querySelectorAll(selector);
            // concat childElems to filterFound array
            for(var i = 0; i < childElems.length; i++)ffElems.push(childElems[i]);
        });
        return ffElems;
    };
    // ----- debounceMethod ----- //
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };
    // ----- docReady ----- //
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == "complete" || readyState == "interactive") // do async to allow for other scripts to run. metafizzy/flickity#441
        setTimeout(callback);
        else document.addEventListener("DOMContentLoaded", callback);
    };
    // ----- htmlInit ----- //
    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + "-" + $2;
        }).toLowerCase();
    };
    var console = window1.console;
    /**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */ utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = "data-" + dashedNamespace;
            var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
            var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + "-options";
            var jQuery = window1.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) console.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
                    return;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('namespace')
                if (jQuery) jQuery.data(elem, namespace, instance);
            });
        });
    };
    // -----  ----- //
    return utils;
});

},{"eb570a2463945fb8":"eR0Zr"}],"eR0Zr":[function(require,module,exports) {
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */ (function(window1, factory) {
    /*global define: false, module: false */ "use strict";
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.matchesSelector = factory();
})(window, function factory() {
    "use strict";
    var matchesMethod = function() {
        var ElemProto = window.Element.prototype;
        // check for the standard method name first
        if (ElemProto.matches) return "matches";
        // check un-prefixed
        if (ElemProto.matchesSelector) return "matchesSelector";
        // check vendor prefixes
        var prefixes = [
            "webkit",
            "moz",
            "ms",
            "o"
        ];
        for(var i = 0; i < prefixes.length; i++){
            var prefix = prefixes[i];
            var method = prefix + "MatchesSelector";
            if (ElemProto[method]) return method;
        }
    }();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
});

},{}],"9Z7X0":[function(require,module,exports) {
// Flickity.Cell
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "get-size/get-size"
    ], function(getSize) {
        return factory(window1, getSize);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("4e59e2ac5caef8df"));
    else {
        // browser global
        window1.Flickity = window1.Flickity || {};
        window1.Flickity.Cell = factory(window1, window1.getSize);
    }
})(window, function factory(window1, getSize) {
    "use strict";
    function Cell(elem, parent) {
        this.element = elem;
        this.parent = parent;
        this.create();
    }
    var proto = Cell.prototype;
    proto.create = function() {
        this.element.style.position = "absolute";
        this.element.setAttribute("aria-hidden", "true");
        this.x = 0;
        this.shift = 0;
        this.element.style[this.parent.originSide] = 0;
    };
    proto.destroy = function() {
        // reset style
        this.unselect();
        this.element.style.position = "";
        var side = this.parent.originSide;
        this.element.style[side] = "";
        this.element.style.transform = "";
        this.element.removeAttribute("aria-hidden");
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    proto.setPosition = function(x) {
        this.x = x;
        this.updateTarget();
        this.renderPosition(x);
    };
    // setDefaultTarget v1 method, backwards compatibility, remove in v3
    proto.updateTarget = proto.setDefaultTarget = function() {
        var marginProperty = this.parent.originSide == "left" ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
    };
    proto.renderPosition = function(x) {
        // render position of cell with in slider
        var sideOffset = this.parent.originSide === "left" ? 1 : -1;
        var adjustedX = this.parent.options.percentPosition ? x * sideOffset * (this.parent.size.innerWidth / this.size.width) : x * sideOffset;
        this.element.style.transform = "translateX(" + this.parent.getPositionValue(adjustedX) + ")";
    };
    proto.select = function() {
        this.element.classList.add("is-selected");
        this.element.removeAttribute("aria-hidden");
    };
    proto.unselect = function() {
        this.element.classList.remove("is-selected");
        this.element.setAttribute("aria-hidden", "true");
    };
    /**
 * @param {Integer} shift - 0, 1, or -1
 */ proto.wrapShift = function(shift) {
        this.shift = shift;
        this.renderPosition(this.x + this.parent.slideableWidth * shift);
    };
    proto.remove = function() {
        this.element.parentNode.removeChild(this.element);
    };
    return Cell;
});

},{"4e59e2ac5caef8df":"iwvrs"}],"3yaJz":[function(require,module,exports) {
// slide
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else {
        // browser global
        window1.Flickity = window1.Flickity || {};
        window1.Flickity.Slide = factory();
    }
})(window, function factory() {
    "use strict";
    function Slide(parent) {
        this.parent = parent;
        this.isOriginLeft = parent.originSide == "left";
        this.cells = [];
        this.outerWidth = 0;
        this.height = 0;
    }
    var proto = Slide.prototype;
    proto.addCell = function(cell) {
        this.cells.push(cell);
        this.outerWidth += cell.size.outerWidth;
        this.height = Math.max(cell.size.outerHeight, this.height);
        // first cell stuff
        if (this.cells.length == 1) {
            this.x = cell.x; // x comes from first cell
            var beginMargin = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = cell.size[beginMargin];
        }
    };
    proto.updateTarget = function() {
        var endMargin = this.isOriginLeft ? "marginRight" : "marginLeft";
        var lastCell = this.getLastCell();
        var lastMargin = lastCell ? lastCell.size[endMargin] : 0;
        var slideWidth = this.outerWidth - (this.firstMargin + lastMargin);
        this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
    };
    proto.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    };
    proto.select = function() {
        this.cells.forEach(function(cell) {
            cell.select();
        });
    };
    proto.unselect = function() {
        this.cells.forEach(function(cell) {
            cell.unselect();
        });
    };
    proto.getCellElements = function() {
        return this.cells.map(function(cell) {
            return cell.element;
        });
    };
    return Slide;
});

},{}],"aTHD4":[function(require,module,exports) {
// animate
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "fizzy-ui-utils/utils"
    ], function(utils) {
        return factory(window1, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("5eac38c6883988aa"));
    else {
        // browser global
        window1.Flickity = window1.Flickity || {};
        window1.Flickity.animatePrototype = factory(window1, window1.fizzyUIUtils);
    }
})(window, function factory(window1, utils) {
    "use strict";
    // -------------------------- animate -------------------------- //
    var proto = {};
    proto.startAnimation = function() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.restingFrames = 0;
        this.animate();
    };
    proto.animate = function() {
        this.applyDragForce();
        this.applySelectedAttraction();
        var previousX = this.x;
        this.integratePhysics();
        this.positionSlider();
        this.settle(previousX);
        // animate next frame
        if (this.isAnimating) {
            var _this = this;
            requestAnimationFrame(function animateFrame() {
                _this.animate();
            });
        }
    };
    proto.positionSlider = function() {
        var x = this.x;
        // wrap position around
        if (this.options.wrapAround && this.cells.length > 1) {
            x = utils.modulo(x, this.slideableWidth);
            x -= this.slideableWidth;
            this.shiftWrapCells(x);
        }
        this.setTranslateX(x, this.isAnimating);
        this.dispatchScrollEvent();
    };
    proto.setTranslateX = function(x, is3d) {
        x += this.cursorPosition;
        // reverse if right-to-left and using transform
        x = this.options.rightToLeft ? -x : x;
        var translateX = this.getPositionValue(x);
        // use 3D transforms for hardware acceleration on iOS
        // but use 2D when settled, for better font-rendering
        this.slider.style.transform = is3d ? "translate3d(" + translateX + ",0,0)" : "translateX(" + translateX + ")";
    };
    proto.dispatchScrollEvent = function() {
        var firstSlide = this.slides[0];
        if (!firstSlide) return;
        var positionX = -this.x - firstSlide.target;
        var progress = positionX / this.slidesWidth;
        this.dispatchEvent("scroll", null, [
            progress,
            positionX
        ]);
    };
    proto.positionSliderAtSelected = function() {
        if (!this.cells.length) return;
        this.x = -this.selectedSlide.target;
        this.velocity = 0; // stop wobble
        this.positionSlider();
    };
    proto.getPositionValue = function(position) {
        if (this.options.percentPosition) // percent position, round to 2 digits, like 12.34%
        return Math.round(position / this.size.innerWidth * 10000) * 0.01 + "%";
        else // pixel positioning
        return Math.round(position) + "px";
    };
    proto.settle = function(previousX) {
        // keep track of frames where x hasn't moved
        var isResting = !this.isPointerDown && Math.round(this.x * 100) == Math.round(previousX * 100);
        if (isResting) this.restingFrames++;
        // stop animating if resting for 3 or more frames
        if (this.restingFrames > 2) {
            this.isAnimating = false;
            delete this.isFreeScrolling;
            // render position with translateX when settled
            this.positionSlider();
            this.dispatchEvent("settle", null, [
                this.selectedIndex
            ]);
        }
    };
    proto.shiftWrapCells = function(x) {
        // shift before cells
        var beforeGap = this.cursorPosition + x;
        this._shiftCells(this.beforeShiftCells, beforeGap, -1);
        // shift after cells
        var afterGap = this.size.innerWidth - (x + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, afterGap, 1);
    };
    proto._shiftCells = function(cells, gap, shift) {
        for(var i = 0; i < cells.length; i++){
            var cell = cells[i];
            var cellShift = gap > 0 ? shift : 0;
            cell.wrapShift(cellShift);
            gap -= cell.size.outerWidth;
        }
    };
    proto._unshiftCells = function(cells) {
        if (!cells || !cells.length) return;
        for(var i = 0; i < cells.length; i++)cells[i].wrapShift(0);
    };
    // -------------------------- physics -------------------------- //
    proto.integratePhysics = function() {
        this.x += this.velocity;
        this.velocity *= this.getFrictionFactor();
    };
    proto.applyForce = function(force) {
        this.velocity += force;
    };
    proto.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
    };
    proto.getRestingPosition = function() {
        // my thanks to Steven Wittens, who simplified this math greatly
        return this.x + this.velocity / (1 - this.getFrictionFactor());
    };
    proto.applyDragForce = function() {
        if (!this.isDraggable || !this.isPointerDown) return;
        // change the position to drag position by applying force
        var dragVelocity = this.dragX - this.x;
        var dragForce = dragVelocity - this.velocity;
        this.applyForce(dragForce);
    };
    proto.applySelectedAttraction = function() {
        // do not attract if pointer down or no slides
        var dragDown = this.isDraggable && this.isPointerDown;
        if (dragDown || this.isFreeScrolling || !this.slides.length) return;
        var distance = this.selectedSlide.target * -1 - this.x;
        var force = distance * this.options.selectedAttraction;
        this.applyForce(force);
    };
    return proto;
});

},{"5eac38c6883988aa":"79GsT"}],"5pELg":[function(require,module,exports) {
// drag
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "unidragger/unidragger",
        "fizzy-ui-utils/utils"
    ], function(Flickity, Unidragger, utils) {
        return factory(window1, Flickity, Unidragger, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("11410a4bd8b8f636"), require("3b1995cfd38e6bcf"), require("f68b75970b1f9f7"));
    else // browser global
    window1.Flickity = factory(window1, window1.Flickity, window1.Unidragger, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, Unidragger, utils) {
    "use strict";
    // ----- defaults ----- //
    utils.extend(Flickity.defaults, {
        draggable: ">1",
        dragThreshold: 3
    });
    // ----- create ----- //
    Flickity.createMethods.push("_createDrag");
    // -------------------------- drag prototype -------------------------- //
    var proto = Flickity.prototype;
    utils.extend(proto, Unidragger.prototype);
    proto._touchActionValue = "pan-y";
    // --------------------------  -------------------------- //
    proto._createDrag = function() {
        this.on("activate", this.onActivateDrag);
        this.on("uiChange", this._uiChangeDrag);
        this.on("deactivate", this.onDeactivateDrag);
        this.on("cellChange", this.updateDraggable);
    // TODO updateDraggable on resize? if groupCells & slides change
    };
    proto.onActivateDrag = function() {
        this.handles = [
            this.viewport
        ];
        this.bindHandles();
        this.updateDraggable();
    };
    proto.onDeactivateDrag = function() {
        this.unbindHandles();
        this.element.classList.remove("is-draggable");
    };
    proto.updateDraggable = function() {
        // disable dragging if less than 2 slides. #278
        if (this.options.draggable == ">1") this.isDraggable = this.slides.length > 1;
        else this.isDraggable = this.options.draggable;
        if (this.isDraggable) this.element.classList.add("is-draggable");
        else this.element.classList.remove("is-draggable");
    };
    // backwards compatibility
    proto.bindDrag = function() {
        this.options.draggable = true;
        this.updateDraggable();
    };
    proto.unbindDrag = function() {
        this.options.draggable = false;
        this.updateDraggable();
    };
    proto._uiChangeDrag = function() {
        delete this.isFreeScrolling;
    };
    // -------------------------- pointer events -------------------------- //
    proto.pointerDown = function(event, pointer) {
        if (!this.isDraggable) {
            this._pointerDownDefault(event, pointer);
            return;
        }
        var isOkay = this.okayPointerDown(event);
        if (!isOkay) return;
        this._pointerDownPreventDefault(event);
        this.pointerDownFocus(event);
        // blur
        if (document.activeElement != this.element) // do not blur if already focused
        this.pointerDownBlur();
        // stop if it was moving
        this.dragX = this.x;
        this.viewport.classList.add("is-pointer-down");
        // track scrolling
        this.pointerDownScroll = getScrollPosition();
        window1.addEventListener("scroll", this);
        this._pointerDownDefault(event, pointer);
    };
    // default pointerDown logic, used for staticClick
    proto._pointerDownDefault = function(event, pointer) {
        // track start event position
        // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
        this.pointerDownPointer = {
            pageX: pointer.pageX,
            pageY: pointer.pageY
        };
        // bind move and end events
        this._bindPostStartEvents(event);
        this.dispatchEvent("pointerDown", event, [
            pointer
        ]);
    };
    var focusNodes = {
        INPUT: true,
        TEXTAREA: true,
        SELECT: true
    };
    proto.pointerDownFocus = function(event) {
        var isFocusNode = focusNodes[event.target.nodeName];
        if (!isFocusNode) this.focus();
    };
    proto._pointerDownPreventDefault = function(event) {
        var isTouchStart = event.type == "touchstart";
        var isTouchPointer = event.pointerType == "touch";
        var isFocusNode = focusNodes[event.target.nodeName];
        if (!isTouchStart && !isTouchPointer && !isFocusNode) event.preventDefault();
    };
    // ----- move ----- //
    proto.hasDragStarted = function(moveVector) {
        return Math.abs(moveVector.x) > this.options.dragThreshold;
    };
    // ----- up ----- //
    proto.pointerUp = function(event, pointer) {
        delete this.isTouchScrolling;
        this.viewport.classList.remove("is-pointer-down");
        this.dispatchEvent("pointerUp", event, [
            pointer
        ]);
        this._dragPointerUp(event, pointer);
    };
    proto.pointerDone = function() {
        window1.removeEventListener("scroll", this);
        delete this.pointerDownScroll;
    };
    // -------------------------- dragging -------------------------- //
    proto.dragStart = function(event, pointer) {
        if (!this.isDraggable) return;
        this.dragStartPosition = this.x;
        this.startAnimation();
        window1.removeEventListener("scroll", this);
        this.dispatchEvent("dragStart", event, [
            pointer
        ]);
    };
    proto.pointerMove = function(event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);
        this.dispatchEvent("pointerMove", event, [
            pointer,
            moveVector
        ]);
        this._dragMove(event, pointer, moveVector);
    };
    proto.dragMove = function(event, pointer, moveVector) {
        if (!this.isDraggable) return;
        event.preventDefault();
        this.previousDragX = this.dragX;
        // reverse if right-to-left
        var direction = this.options.rightToLeft ? -1 : 1;
        if (this.options.wrapAround) // wrap around move. #589
        moveVector.x %= this.slideableWidth;
        var dragX = this.dragStartPosition + moveVector.x * direction;
        if (!this.options.wrapAround && this.slides.length) {
            // slow drag
            var originBound = Math.max(-this.slides[0].target, this.dragStartPosition);
            dragX = dragX > originBound ? (dragX + originBound) * 0.5 : dragX;
            var endBound = Math.min(-this.getLastSlide().target, this.dragStartPosition);
            dragX = dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
        }
        this.dragX = dragX;
        this.dragMoveTime = new Date();
        this.dispatchEvent("dragMove", event, [
            pointer,
            moveVector
        ]);
    };
    proto.dragEnd = function(event, pointer) {
        if (!this.isDraggable) return;
        if (this.options.freeScroll) this.isFreeScrolling = true;
        // set selectedIndex based on where flick will end up
        var index = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            // if free-scroll & not wrap around
            // do not free-scroll if going outside of bounding slides
            // so bounding slides can attract slider, and keep it in bounds
            var restingX = this.getRestingPosition();
            this.isFreeScrolling = -restingX > this.slides[0].target && -restingX < this.getLastSlide().target;
        } else if (!this.options.freeScroll && index == this.selectedIndex) // boost selection if selected index has not changed
        index += this.dragEndBoostSelect();
        delete this.previousDragX;
        // apply selection
        // TODO refactor this, selecting here feels weird
        // HACK, set flag so dragging stays in correct direction
        this.isDragSelect = this.options.wrapAround;
        this.select(index);
        delete this.isDragSelect;
        this.dispatchEvent("dragEnd", event, [
            pointer
        ]);
    };
    proto.dragEndRestingSelect = function() {
        var restingX = this.getRestingPosition();
        // how far away from selected slide
        var distance = Math.abs(this.getSlideDistance(-restingX, this.selectedIndex));
        // get closet resting going up and going down
        var positiveResting = this._getClosestResting(restingX, distance, 1);
        var negativeResting = this._getClosestResting(restingX, distance, -1);
        // use closer resting for wrap-around
        var index = positiveResting.distance < negativeResting.distance ? positiveResting.index : negativeResting.index;
        return index;
    };
    /**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */ proto._getClosestResting = function(restingX, distance, increment) {
        var index = this.selectedIndex;
        var minDistance = Infinity;
        var condition = this.options.contain && !this.options.wrapAround ? // if contain, keep going if distance is equal to minDistance
        function condition(dist, minDist) {
            return dist <= minDist;
        } : function(dist, minDist) {
            return dist < minDist;
        };
        while(condition(distance, minDistance)){
            // measure distance to next cell
            index += increment;
            minDistance = distance;
            distance = this.getSlideDistance(-restingX, index);
            if (distance === null) break;
            distance = Math.abs(distance);
        }
        return {
            distance: minDistance,
            // selected was previous index
            index: index - increment
        };
    };
    /**
 * measure distance between x and a slide target
 * @param {Number} x - horizontal position
 * @param {Integer} index - slide index
 * @returns {Number} - slide distance
 */ proto.getSlideDistance = function(x, index) {
        var len = this.slides.length;
        // wrap around if at least 2 slides
        var isWrapAround = this.options.wrapAround && len > 1;
        var slideIndex = isWrapAround ? utils.modulo(index, len) : index;
        var slide = this.slides[slideIndex];
        if (!slide) return null;
        // add distance for wrap-around slides
        var wrap = isWrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
        return x - (slide.target + wrap);
    };
    proto.dragEndBoostSelect = function() {
        // do not boost if no previousDragX or dragMoveTime
        if (this.previousDragX === undefined || !this.dragMoveTime || // or if drag was held for 100 ms
        new Date() - this.dragMoveTime > 100) return 0;
        var distance = this.getSlideDistance(-this.dragX, this.selectedIndex);
        var delta = this.previousDragX - this.dragX;
        if (distance > 0 && delta > 0) // boost to next if moving towards the right, and positive velocity
        return 1;
        else if (distance < 0 && delta < 0) // boost to previous if moving towards the left, and negative velocity
        return -1;
        return 0;
    };
    // ----- staticClick ----- //
    proto.staticClick = function(event, pointer) {
        // get clickedCell, if cell was clicked
        var clickedCell = this.getParentCell(event.target);
        var cellElem = clickedCell && clickedCell.element;
        var cellIndex = clickedCell && this.cells.indexOf(clickedCell);
        this.dispatchEvent("staticClick", event, [
            pointer,
            cellElem,
            cellIndex
        ]);
    };
    // ----- scroll ----- //
    proto.onscroll = function() {
        var scroll = getScrollPosition();
        var scrollMoveX = this.pointerDownScroll.x - scroll.x;
        var scrollMoveY = this.pointerDownScroll.y - scroll.y;
        // cancel click/tap if scroll is too much
        if (Math.abs(scrollMoveX) > 3 || Math.abs(scrollMoveY) > 3) this._pointerDone();
    };
    // ----- utils ----- //
    function getScrollPosition() {
        return {
            x: window1.pageXOffset,
            y: window1.pageYOffset
        };
    }
    // -----  ----- //
    return Flickity;
});

},{"11410a4bd8b8f636":"4MqCI","3b1995cfd38e6bcf":"7krjl","f68b75970b1f9f7":"79GsT"}],"7krjl":[function(require,module,exports) {
/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */ /*jshint browser: true, unused: true, undef: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "unipointer/unipointer"
    ], function(Unipointer) {
        return factory(window1, Unipointer);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("9d55af996ce2f62"));
    else // browser global
    window1.Unidragger = factory(window1, window1.Unipointer);
})(window, function factory(window1, Unipointer) {
    "use strict";
    // -------------------------- Unidragger -------------------------- //
    function Unidragger() {}
    // inherit Unipointer & EvEmitter
    var proto = Unidragger.prototype = Object.create(Unipointer.prototype);
    // ----- bind start ----- //
    proto.bindHandles = function() {
        this._bindHandles(true);
    };
    proto.unbindHandles = function() {
        this._bindHandles(false);
    };
    /**
 * Add or remove start event
 * @param {Boolean} isAdd
 */ proto._bindHandles = function(isAdd) {
        // munge isAdd, default to true
        isAdd = isAdd === undefined ? true : isAdd;
        // bind each handle
        var bindMethod = isAdd ? "addEventListener" : "removeEventListener";
        var touchAction = isAdd ? this._touchActionValue : "";
        for(var i = 0; i < this.handles.length; i++){
            var handle = this.handles[i];
            this._bindStartEvent(handle, isAdd);
            handle[bindMethod]("click", this);
            // touch-action: none to override browser touch gestures. metafizzy/flickity#540
            if (window1.PointerEvent) handle.style.touchAction = touchAction;
        }
    };
    // prototype so it can be overwriteable by Flickity
    proto._touchActionValue = "none";
    // ----- start event ----- //
    /**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto.pointerDown = function(event, pointer) {
        var isOkay = this.okayPointerDown(event);
        if (!isOkay) return;
        // track start event position
        // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
        this.pointerDownPointer = {
            pageX: pointer.pageX,
            pageY: pointer.pageY
        };
        event.preventDefault();
        this.pointerDownBlur();
        // bind move and end events
        this._bindPostStartEvents(event);
        this.emitEvent("pointerDown", [
            event,
            pointer
        ]);
    };
    // nodes that have text fields
    var cursorNodes = {
        TEXTAREA: true,
        INPUT: true,
        SELECT: true,
        OPTION: true
    };
    // input types that do not have text fields
    var clickTypes = {
        radio: true,
        checkbox: true,
        button: true,
        submit: true,
        image: true,
        file: true
    };
    // dismiss inputs with text fields. flickity#403, flickity#404
    proto.okayPointerDown = function(event) {
        var isCursorNode = cursorNodes[event.target.nodeName];
        var isClickType = clickTypes[event.target.type];
        var isOkay = !isCursorNode || isClickType;
        if (!isOkay) this._pointerReset();
        return isOkay;
    };
    // kludge to blur previously focused input
    proto.pointerDownBlur = function() {
        var focused = document.activeElement;
        // do not blur body for IE10, metafizzy/flickity#117
        var canBlur = focused && focused.blur && focused != document.body;
        if (canBlur) focused.blur();
    };
    // ----- move event ----- //
    /**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto.pointerMove = function(event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);
        this.emitEvent("pointerMove", [
            event,
            pointer,
            moveVector
        ]);
        this._dragMove(event, pointer, moveVector);
    };
    // base pointer move logic
    proto._dragPointerMove = function(event, pointer) {
        var moveVector = {
            x: pointer.pageX - this.pointerDownPointer.pageX,
            y: pointer.pageY - this.pointerDownPointer.pageY
        };
        // start drag if pointer has moved far enough to start drag
        if (!this.isDragging && this.hasDragStarted(moveVector)) this._dragStart(event, pointer);
        return moveVector;
    };
    // condition if pointer has moved far enough to start drag
    proto.hasDragStarted = function(moveVector) {
        return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
    };
    // ----- end event ----- //
    /**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto.pointerUp = function(event, pointer) {
        this.emitEvent("pointerUp", [
            event,
            pointer
        ]);
        this._dragPointerUp(event, pointer);
    };
    proto._dragPointerUp = function(event, pointer) {
        if (this.isDragging) this._dragEnd(event, pointer);
        else // pointer didn't move enough for drag to start
        this._staticClick(event, pointer);
    };
    // -------------------------- drag -------------------------- //
    // dragStart
    proto._dragStart = function(event, pointer) {
        this.isDragging = true;
        // prevent clicks
        this.isPreventingClicks = true;
        this.dragStart(event, pointer);
    };
    proto.dragStart = function(event, pointer) {
        this.emitEvent("dragStart", [
            event,
            pointer
        ]);
    };
    // dragMove
    proto._dragMove = function(event, pointer, moveVector) {
        // do not drag if not dragging yet
        if (!this.isDragging) return;
        this.dragMove(event, pointer, moveVector);
    };
    proto.dragMove = function(event, pointer, moveVector) {
        event.preventDefault();
        this.emitEvent("dragMove", [
            event,
            pointer,
            moveVector
        ]);
    };
    // dragEnd
    proto._dragEnd = function(event, pointer) {
        // set flags
        this.isDragging = false;
        // re-enable clicking async
        setTimeout((function() {
            delete this.isPreventingClicks;
        }).bind(this));
        this.dragEnd(event, pointer);
    };
    proto.dragEnd = function(event, pointer) {
        this.emitEvent("dragEnd", [
            event,
            pointer
        ]);
    };
    // ----- onclick ----- //
    // handle all clicks and prevent clicks when dragging
    proto.onclick = function(event) {
        if (this.isPreventingClicks) event.preventDefault();
    };
    // ----- staticClick ----- //
    // triggered after pointer down & up with no/tiny movement
    proto._staticClick = function(event, pointer) {
        // ignore emulated mouse up clicks
        if (this.isIgnoringMouseUp && event.type == "mouseup") return;
        this.staticClick(event, pointer);
        // set flag for emulated clicks 300ms after touchend
        if (event.type != "mouseup") {
            this.isIgnoringMouseUp = true;
            // reset flag after 300ms
            setTimeout((function() {
                delete this.isIgnoringMouseUp;
            }).bind(this), 400);
        }
    };
    proto.staticClick = function(event, pointer) {
        this.emitEvent("staticClick", [
            event,
            pointer
        ]);
    };
    // ----- utils ----- //
    Unidragger.getPointerPoint = Unipointer.getPointerPoint;
    // -----  ----- //
    return Unidragger;
});

},{"9d55af996ce2f62":"21Xh2"}],"21Xh2":[function(require,module,exports) {
/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*global define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "ev-emitter/ev-emitter"
    ], function(EvEmitter) {
        return factory(window1, EvEmitter);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("bdc894a73c128fa2"));
    else // browser global
    window1.Unipointer = factory(window1, window1.EvEmitter);
})(window, function factory(window1, EvEmitter) {
    "use strict";
    function noop() {}
    function Unipointer() {}
    // inherit EvEmitter
    var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);
    proto.bindStartEvent = function(elem) {
        this._bindStartEvent(elem, true);
    };
    proto.unbindStartEvent = function(elem) {
        this._bindStartEvent(elem, false);
    };
    /**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */ proto._bindStartEvent = function(elem, isAdd) {
        // munge isAdd, default to true
        isAdd = isAdd === undefined ? true : isAdd;
        var bindMethod = isAdd ? "addEventListener" : "removeEventListener";
        // default to mouse events
        var startEvent = "mousedown";
        if ("ontouchstart" in window1) // HACK prefer Touch Events as you can preventDefault on touchstart to
        // disable scroll in iOS & mobile Chrome metafizzy/flickity#1177
        startEvent = "touchstart";
        else if (window1.PointerEvent) // Pointer Events
        startEvent = "pointerdown";
        elem[bindMethod](startEvent, this);
    };
    // trigger handler methods for events
    proto.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    // returns the touch that we're keeping track of
    proto.getTouch = function(touches) {
        for(var i = 0; i < touches.length; i++){
            var touch = touches[i];
            if (touch.identifier == this.pointerIdentifier) return touch;
        }
    };
    // ----- start event ----- //
    proto.onmousedown = function(event) {
        // dismiss clicks from right or middle buttons
        var button = event.button;
        if (button && button !== 0 && button !== 1) return;
        this._pointerDown(event, event);
    };
    proto.ontouchstart = function(event) {
        this._pointerDown(event, event.changedTouches[0]);
    };
    proto.onpointerdown = function(event) {
        this._pointerDown(event, event);
    };
    /**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto._pointerDown = function(event, pointer) {
        // dismiss right click and other pointers
        // button = 0 is okay, 1-4 not
        if (event.button || this.isPointerDown) return;
        this.isPointerDown = true;
        // save pointer identifier to match up touch events
        this.pointerIdentifier = pointer.pointerId !== undefined ? // pointerId for pointer events, touch.indentifier for touch events
        pointer.pointerId : pointer.identifier;
        this.pointerDown(event, pointer);
    };
    proto.pointerDown = function(event, pointer) {
        this._bindPostStartEvents(event);
        this.emitEvent("pointerDown", [
            event,
            pointer
        ]);
    };
    // hash of events to be bound after start event
    var postStartEvents = {
        mousedown: [
            "mousemove",
            "mouseup"
        ],
        touchstart: [
            "touchmove",
            "touchend",
            "touchcancel"
        ],
        pointerdown: [
            "pointermove",
            "pointerup",
            "pointercancel"
        ]
    };
    proto._bindPostStartEvents = function(event) {
        if (!event) return;
        // get proper events to match start event
        var events = postStartEvents[event.type];
        // bind events to node
        events.forEach(function(eventName) {
            window1.addEventListener(eventName, this);
        }, this);
        // save these arguments
        this._boundPointerEvents = events;
    };
    proto._unbindPostStartEvents = function() {
        // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
        if (!this._boundPointerEvents) return;
        this._boundPointerEvents.forEach(function(eventName) {
            window1.removeEventListener(eventName, this);
        }, this);
        delete this._boundPointerEvents;
    };
    // ----- move event ----- //
    proto.onmousemove = function(event) {
        this._pointerMove(event, event);
    };
    proto.onpointermove = function(event) {
        if (event.pointerId == this.pointerIdentifier) this._pointerMove(event, event);
    };
    proto.ontouchmove = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) this._pointerMove(event, touch);
    };
    /**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */ proto._pointerMove = function(event, pointer) {
        this.pointerMove(event, pointer);
    };
    // public
    proto.pointerMove = function(event, pointer) {
        this.emitEvent("pointerMove", [
            event,
            pointer
        ]);
    };
    // ----- end event ----- //
    proto.onmouseup = function(event) {
        this._pointerUp(event, event);
    };
    proto.onpointerup = function(event) {
        if (event.pointerId == this.pointerIdentifier) this._pointerUp(event, event);
    };
    proto.ontouchend = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) this._pointerUp(event, touch);
    };
    /**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */ proto._pointerUp = function(event, pointer) {
        this._pointerDone();
        this.pointerUp(event, pointer);
    };
    // public
    proto.pointerUp = function(event, pointer) {
        this.emitEvent("pointerUp", [
            event,
            pointer
        ]);
    };
    // ----- pointer done ----- //
    // triggered on pointer up & pointer cancel
    proto._pointerDone = function() {
        this._pointerReset();
        this._unbindPostStartEvents();
        this.pointerDone();
    };
    proto._pointerReset = function() {
        // reset properties
        this.isPointerDown = false;
        delete this.pointerIdentifier;
    };
    proto.pointerDone = noop;
    // ----- pointer cancel ----- //
    proto.onpointercancel = function(event) {
        if (event.pointerId == this.pointerIdentifier) this._pointerCancel(event, event);
    };
    proto.ontouchcancel = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) this._pointerCancel(event, touch);
    };
    /**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */ proto._pointerCancel = function(event, pointer) {
        this._pointerDone();
        this.pointerCancel(event, pointer);
    };
    // public
    proto.pointerCancel = function(event, pointer) {
        this.emitEvent("pointerCancel", [
            event,
            pointer
        ]);
    };
    // -----  ----- //
    // utility function for getting x/y coords from event
    Unipointer.getPointerPoint = function(pointer) {
        return {
            x: pointer.pageX,
            y: pointer.pageY
        };
    };
    // -----  ----- //
    return Unipointer;
});

},{"bdc894a73c128fa2":"c194x"}],"74dSE":[function(require,module,exports) {
// prev/next buttons
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "unipointer/unipointer",
        "fizzy-ui-utils/utils"
    ], function(Flickity, Unipointer, utils) {
        return factory(window1, Flickity, Unipointer, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("6641a78d5ad2d852"), require("2313d80e71b5e461"), require("7ee29e75b50b69dd"));
    else // browser global
    factory(window1, window1.Flickity, window1.Unipointer, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, Unipointer, utils) {
    "use strict";
    var svgURI = "http://www.w3.org/2000/svg";
    // -------------------------- PrevNextButton -------------------------- //
    function PrevNextButton(direction, parent) {
        this.direction = direction;
        this.parent = parent;
        this._create();
    }
    PrevNextButton.prototype = Object.create(Unipointer.prototype);
    PrevNextButton.prototype._create = function() {
        // properties
        this.isEnabled = true;
        this.isPrevious = this.direction == -1;
        var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == leftDirection;
        var element = this.element = document.createElement("button");
        element.className = "flickity-button flickity-prev-next-button";
        element.className += this.isPrevious ? " previous" : " next";
        // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
        element.setAttribute("type", "button");
        // init as disabled
        this.disable();
        element.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        // create arrow
        var svg = this.createSVG();
        element.appendChild(svg);
        // events
        this.parent.on("select", this.update.bind(this));
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
    };
    PrevNextButton.prototype.activate = function() {
        this.bindStartEvent(this.element);
        this.element.addEventListener("click", this);
        // add to DOM
        this.parent.element.appendChild(this.element);
    };
    PrevNextButton.prototype.deactivate = function() {
        // remove from DOM
        this.parent.element.removeChild(this.element);
        // click events
        this.unbindStartEvent(this.element);
        this.element.removeEventListener("click", this);
    };
    PrevNextButton.prototype.createSVG = function() {
        var svg = document.createElementNS(svgURI, "svg");
        svg.setAttribute("class", "flickity-button-icon");
        svg.setAttribute("viewBox", "0 0 100 100");
        var path = document.createElementNS(svgURI, "path");
        var pathMovements = getArrowMovements(this.parent.options.arrowShape);
        path.setAttribute("d", pathMovements);
        path.setAttribute("class", "arrow");
        // rotate arrow
        if (!this.isLeft) path.setAttribute("transform", "translate(100, 100) rotate(180) ");
        svg.appendChild(path);
        return svg;
    };
    // get SVG path movmement
    function getArrowMovements(shape) {
        // use shape as movement if string
        if (typeof shape == "string") return shape;
        // create movement string
        return "M " + shape.x0 + ",50" + " L " + shape.x1 + "," + (shape.y1 + 50) + " L " + shape.x2 + "," + (shape.y2 + 50) + " L " + shape.x3 + ",50 " + " L " + shape.x2 + "," + (50 - shape.y2) + " L " + shape.x1 + "," + (50 - shape.y1) + " Z";
    }
    PrevNextButton.prototype.handleEvent = utils.handleEvent;
    PrevNextButton.prototype.onclick = function() {
        if (!this.isEnabled) return;
        this.parent.uiChange();
        var method = this.isPrevious ? "previous" : "next";
        this.parent[method]();
    };
    // -----  ----- //
    PrevNextButton.prototype.enable = function() {
        if (this.isEnabled) return;
        this.element.disabled = false;
        this.isEnabled = true;
    };
    PrevNextButton.prototype.disable = function() {
        if (!this.isEnabled) return;
        this.element.disabled = true;
        this.isEnabled = false;
    };
    PrevNextButton.prototype.update = function() {
        // index of first or last slide, if previous or next
        var slides = this.parent.slides;
        // enable is wrapAround and at least 2 slides
        if (this.parent.options.wrapAround && slides.length > 1) {
            this.enable();
            return;
        }
        var lastIndex = slides.length ? slides.length - 1 : 0;
        var boundIndex = this.isPrevious ? 0 : lastIndex;
        var method = this.parent.selectedIndex == boundIndex ? "disable" : "enable";
        this[method]();
    };
    PrevNextButton.prototype.destroy = function() {
        this.deactivate();
        this.allOff();
    };
    // -------------------------- Flickity prototype -------------------------- //
    utils.extend(Flickity.defaults, {
        prevNextButtons: true,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    });
    Flickity.createMethods.push("_createPrevNextButtons");
    var proto = Flickity.prototype;
    proto._createPrevNextButtons = function() {
        if (!this.options.prevNextButtons) return;
        this.prevButton = new PrevNextButton(-1, this);
        this.nextButton = new PrevNextButton(1, this);
        this.on("activate", this.activatePrevNextButtons);
    };
    proto.activatePrevNextButtons = function() {
        this.prevButton.activate();
        this.nextButton.activate();
        this.on("deactivate", this.deactivatePrevNextButtons);
    };
    proto.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate();
        this.nextButton.deactivate();
        this.off("deactivate", this.deactivatePrevNextButtons);
    };
    // --------------------------  -------------------------- //
    Flickity.PrevNextButton = PrevNextButton;
    return Flickity;
});

},{"6641a78d5ad2d852":"4MqCI","2313d80e71b5e461":"21Xh2","7ee29e75b50b69dd":"79GsT"}],"aWG0z":[function(require,module,exports) {
// page dots
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "unipointer/unipointer",
        "fizzy-ui-utils/utils"
    ], function(Flickity, Unipointer, utils) {
        return factory(window1, Flickity, Unipointer, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("962434ef3bd73688"), require("70288a4bfde513a6"), require("e086fb0c253a9062"));
    else // browser global
    factory(window1, window1.Flickity, window1.Unipointer, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, Unipointer, utils) {
    // -------------------------- PageDots -------------------------- //
    "use strict";
    function PageDots(parent) {
        this.parent = parent;
        this._create();
    }
    PageDots.prototype = Object.create(Unipointer.prototype);
    PageDots.prototype._create = function() {
        // create holder element
        this.holder = document.createElement("ol");
        this.holder.className = "flickity-page-dots";
        // create dots, array of elements
        this.dots = [];
        // events
        this.handleClick = this.onClick.bind(this);
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
    };
    PageDots.prototype.activate = function() {
        this.setDots();
        this.holder.addEventListener("click", this.handleClick);
        this.bindStartEvent(this.holder);
        // add to DOM
        this.parent.element.appendChild(this.holder);
    };
    PageDots.prototype.deactivate = function() {
        this.holder.removeEventListener("click", this.handleClick);
        this.unbindStartEvent(this.holder);
        // remove from DOM
        this.parent.element.removeChild(this.holder);
    };
    PageDots.prototype.setDots = function() {
        // get difference between number of slides and number of dots
        var delta = this.parent.slides.length - this.dots.length;
        if (delta > 0) this.addDots(delta);
        else if (delta < 0) this.removeDots(-delta);
    };
    PageDots.prototype.addDots = function(count) {
        var fragment = document.createDocumentFragment();
        var newDots = [];
        var length = this.dots.length;
        var max = length + count;
        for(var i = length; i < max; i++){
            var dot = document.createElement("li");
            dot.className = "dot";
            dot.setAttribute("aria-label", "Page dot " + (i + 1));
            fragment.appendChild(dot);
            newDots.push(dot);
        }
        this.holder.appendChild(fragment);
        this.dots = this.dots.concat(newDots);
    };
    PageDots.prototype.removeDots = function(count) {
        // remove from this.dots collection
        var removeDots = this.dots.splice(this.dots.length - count, count);
        // remove from DOM
        removeDots.forEach(function(dot) {
            this.holder.removeChild(dot);
        }, this);
    };
    PageDots.prototype.updateSelected = function() {
        // remove selected class on previous
        if (this.selectedDot) {
            this.selectedDot.className = "dot";
            this.selectedDot.removeAttribute("aria-current");
        }
        // don't proceed if no dots
        if (!this.dots.length) return;
        this.selectedDot = this.dots[this.parent.selectedIndex];
        this.selectedDot.className = "dot is-selected";
        this.selectedDot.setAttribute("aria-current", "step");
    };
    PageDots.prototype.onTap = PageDots.prototype.onClick = function(event) {
        var target = event.target;
        // only care about dot clicks
        if (target.nodeName != "LI") return;
        this.parent.uiChange();
        var index = this.dots.indexOf(target);
        this.parent.select(index);
    };
    PageDots.prototype.destroy = function() {
        this.deactivate();
        this.allOff();
    };
    Flickity.PageDots = PageDots;
    // -------------------------- Flickity -------------------------- //
    utils.extend(Flickity.defaults, {
        pageDots: true
    });
    Flickity.createMethods.push("_createPageDots");
    var proto = Flickity.prototype;
    proto._createPageDots = function() {
        if (!this.options.pageDots) return;
        this.pageDots = new PageDots(this);
        // events
        this.on("activate", this.activatePageDots);
        this.on("select", this.updateSelectedPageDots);
        this.on("cellChange", this.updatePageDots);
        this.on("resize", this.updatePageDots);
        this.on("deactivate", this.deactivatePageDots);
    };
    proto.activatePageDots = function() {
        this.pageDots.activate();
    };
    proto.updateSelectedPageDots = function() {
        this.pageDots.updateSelected();
    };
    proto.updatePageDots = function() {
        this.pageDots.setDots();
    };
    proto.deactivatePageDots = function() {
        this.pageDots.deactivate();
    };
    // -----  ----- //
    Flickity.PageDots = PageDots;
    return Flickity;
});

},{"962434ef3bd73688":"4MqCI","70288a4bfde513a6":"21Xh2","e086fb0c253a9062":"79GsT"}],"iEia8":[function(require,module,exports) {
// player & autoPlay
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "ev-emitter/ev-emitter",
        "fizzy-ui-utils/utils",
        "./flickity"
    ], function(EvEmitter, utils, Flickity) {
        return factory(EvEmitter, utils, Flickity);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("478eb1a35b2df5dd"), require("86e2f3a386f55544"), require("4d32aaad3cc7bece"));
    else // browser global
    factory(window1.EvEmitter, window1.fizzyUIUtils, window1.Flickity);
})(window, function factory(EvEmitter, utils, Flickity) {
    "use strict";
    // -------------------------- Player -------------------------- //
    function Player(parent) {
        this.parent = parent;
        this.state = "stopped";
        // visibility change event handler
        this.onVisibilityChange = this.visibilityChange.bind(this);
        this.onVisibilityPlay = this.visibilityPlay.bind(this);
    }
    Player.prototype = Object.create(EvEmitter.prototype);
    // start play
    Player.prototype.play = function() {
        if (this.state == "playing") return;
        // do not play if page is hidden, start playing when page is visible
        var isPageHidden = document.hidden;
        if (isPageHidden) {
            document.addEventListener("visibilitychange", this.onVisibilityPlay);
            return;
        }
        this.state = "playing";
        // listen to visibility change
        document.addEventListener("visibilitychange", this.onVisibilityChange);
        // start ticking
        this.tick();
    };
    Player.prototype.tick = function() {
        // do not tick if not playing
        if (this.state != "playing") return;
        var time = this.parent.options.autoPlay;
        // default to 3 seconds
        time = typeof time == "number" ? time : 3000;
        var _this = this;
        // HACK: reset ticks if stopped and started within interval
        this.clear();
        this.timeout = setTimeout(function() {
            _this.parent.next(true);
            _this.tick();
        }, time);
    };
    Player.prototype.stop = function() {
        this.state = "stopped";
        this.clear();
        // remove visibility change event
        document.removeEventListener("visibilitychange", this.onVisibilityChange);
    };
    Player.prototype.clear = function() {
        clearTimeout(this.timeout);
    };
    Player.prototype.pause = function() {
        if (this.state == "playing") {
            this.state = "paused";
            this.clear();
        }
    };
    Player.prototype.unpause = function() {
        // re-start play if paused
        if (this.state == "paused") this.play();
    };
    // pause if page visibility is hidden, unpause if visible
    Player.prototype.visibilityChange = function() {
        var isPageHidden = document.hidden;
        this[isPageHidden ? "pause" : "unpause"]();
    };
    Player.prototype.visibilityPlay = function() {
        this.play();
        document.removeEventListener("visibilitychange", this.onVisibilityPlay);
    };
    // -------------------------- Flickity -------------------------- //
    utils.extend(Flickity.defaults, {
        pauseAutoPlayOnHover: true
    });
    Flickity.createMethods.push("_createPlayer");
    var proto = Flickity.prototype;
    proto._createPlayer = function() {
        this.player = new Player(this);
        this.on("activate", this.activatePlayer);
        this.on("uiChange", this.stopPlayer);
        this.on("pointerDown", this.stopPlayer);
        this.on("deactivate", this.deactivatePlayer);
    };
    proto.activatePlayer = function() {
        if (!this.options.autoPlay) return;
        this.player.play();
        this.element.addEventListener("mouseenter", this);
    };
    // Player API, don't hate the ... thanks I know where the door is
    proto.playPlayer = function() {
        this.player.play();
    };
    proto.stopPlayer = function() {
        this.player.stop();
    };
    proto.pausePlayer = function() {
        this.player.pause();
    };
    proto.unpausePlayer = function() {
        this.player.unpause();
    };
    proto.deactivatePlayer = function() {
        this.player.stop();
        this.element.removeEventListener("mouseenter", this);
    };
    // ----- mouseenter/leave ----- //
    // pause auto-play on hover
    proto.onmouseenter = function() {
        if (!this.options.pauseAutoPlayOnHover) return;
        this.player.pause();
        this.element.addEventListener("mouseleave", this);
    };
    // resume auto-play on hover off
    proto.onmouseleave = function() {
        this.player.unpause();
        this.element.removeEventListener("mouseleave", this);
    };
    // -----  ----- //
    Flickity.Player = Player;
    return Flickity;
});

},{"478eb1a35b2df5dd":"c194x","86e2f3a386f55544":"79GsT","4d32aaad3cc7bece":"4MqCI"}],"arc5b":[function(require,module,exports) {
// add, remove cell
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "fizzy-ui-utils/utils"
    ], function(Flickity, utils) {
        return factory(window1, Flickity, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("53111b0f0ef7d9da"), require("6f68cf6f8274e1b8"));
    else // browser global
    factory(window1, window1.Flickity, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, utils) {
    "use strict";
    // append cells to a document fragment
    function getCellsFragment(cells) {
        var fragment = document.createDocumentFragment();
        cells.forEach(function(cell) {
            fragment.appendChild(cell.element);
        });
        return fragment;
    }
    // -------------------------- add/remove cell prototype -------------------------- //
    var proto = Flickity.prototype;
    /**
 * Insert, prepend, or append cells
 * @param {[Element, Array, NodeList]} elems - Elements to insert
 * @param {Integer} index - Zero-based number to insert
 */ proto.insert = function(elems, index) {
        var cells = this._makeCells(elems);
        if (!cells || !cells.length) return;
        var len = this.cells.length;
        // default to append
        index = index === undefined ? len : index;
        // add cells with document fragment
        var fragment = getCellsFragment(cells);
        // append to slider
        var isAppend = index == len;
        if (isAppend) this.slider.appendChild(fragment);
        else {
            var insertCellElement = this.cells[index].element;
            this.slider.insertBefore(fragment, insertCellElement);
        }
        // add to this.cells
        if (index === 0) // prepend, add to start
        this.cells = cells.concat(this.cells);
        else if (isAppend) // append, add to end
        this.cells = this.cells.concat(cells);
        else {
            // insert in this.cells
            var endCells = this.cells.splice(index, len - index);
            this.cells = this.cells.concat(cells).concat(endCells);
        }
        this._sizeCells(cells);
        this.cellChange(index, true);
    };
    proto.append = function(elems) {
        this.insert(elems, this.cells.length);
    };
    proto.prepend = function(elems) {
        this.insert(elems, 0);
    };
    /**
 * Remove cells
 * @param {[Element, Array, NodeList]} elems - ELements to remove
 */ proto.remove = function(elems) {
        var cells = this.getCells(elems);
        if (!cells || !cells.length) return;
        var minCellIndex = this.cells.length - 1;
        // remove cells from collection & DOM
        cells.forEach(function(cell) {
            cell.remove();
            var index = this.cells.indexOf(cell);
            minCellIndex = Math.min(index, minCellIndex);
            utils.removeFrom(this.cells, cell);
        }, this);
        this.cellChange(minCellIndex, true);
    };
    /**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */ proto.cellSizeChange = function(elem) {
        var cell = this.getCell(elem);
        if (!cell) return;
        cell.getSize();
        var index = this.cells.indexOf(cell);
        this.cellChange(index);
    };
    /**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 * @param {Boolean} isPositioningSlider - Positions slider after selection
 */ proto.cellChange = function(changedCellIndex, isPositioningSlider) {
        var prevSelectedElem = this.selectedElement;
        this._positionCells(changedCellIndex);
        this._getWrapShiftCells();
        this.setGallerySize();
        // update selectedIndex
        // try to maintain position & select previous selected element
        var cell = this.getCell(prevSelectedElem);
        if (cell) this.selectedIndex = this.getCellSlideIndex(cell);
        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
        this.emitEvent("cellChange", [
            changedCellIndex
        ]);
        // position slider
        this.select(this.selectedIndex);
        // do not position slider after lazy load
        if (isPositioningSlider) this.positionSliderAtSelected();
    };
    // -----  ----- //
    return Flickity;
});

},{"53111b0f0ef7d9da":"4MqCI","6f68cf6f8274e1b8":"79GsT"}],"6nJx2":[function(require,module,exports) {
// lazyload
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "fizzy-ui-utils/utils"
    ], function(Flickity, utils) {
        return factory(window1, Flickity, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("d683b11d5c9395cf"), require("c8fc00c3e86a37cf"));
    else // browser global
    factory(window1, window1.Flickity, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, utils) {
    "use strict";
    Flickity.createMethods.push("_createLazyload");
    var proto = Flickity.prototype;
    proto._createLazyload = function() {
        this.on("select", this.lazyLoad);
    };
    proto.lazyLoad = function() {
        var lazyLoad = this.options.lazyLoad;
        if (!lazyLoad) return;
        // get adjacent cells, use lazyLoad option for adjacent count
        var adjCount = typeof lazyLoad == "number" ? lazyLoad : 0;
        var cellElems = this.getAdjacentCellElements(adjCount);
        // get lazy images in those cells
        var lazyImages = [];
        cellElems.forEach(function(cellElem) {
            var lazyCellImages = getCellLazyImages(cellElem);
            lazyImages = lazyImages.concat(lazyCellImages);
        });
        // load lazy images
        lazyImages.forEach(function(img) {
            new LazyLoader(img, this);
        }, this);
    };
    function getCellLazyImages(cellElem) {
        // check if cell element is lazy image
        if (cellElem.nodeName == "IMG") {
            var lazyloadAttr = cellElem.getAttribute("data-flickity-lazyload");
            var srcAttr = cellElem.getAttribute("data-flickity-lazyload-src");
            var srcsetAttr = cellElem.getAttribute("data-flickity-lazyload-srcset");
            if (lazyloadAttr || srcAttr || srcsetAttr) return [
                cellElem
            ];
        }
        // select lazy images in cell
        var lazySelector = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";
        var imgs = cellElem.querySelectorAll(lazySelector);
        return utils.makeArray(imgs);
    }
    // -------------------------- LazyLoader -------------------------- //
    /**
 * class to handle loading images
 * @param {Image} img - Image element
 * @param {Flickity} flickity - Flickity instance
 */ function LazyLoader(img, flickity) {
        this.img = img;
        this.flickity = flickity;
        this.load();
    }
    LazyLoader.prototype.handleEvent = utils.handleEvent;
    LazyLoader.prototype.load = function() {
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        // get src & srcset
        var src = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src");
        var srcset = this.img.getAttribute("data-flickity-lazyload-srcset");
        // set src & serset
        this.img.src = src;
        if (srcset) this.img.setAttribute("srcset", srcset);
        // remove attr
        this.img.removeAttribute("data-flickity-lazyload");
        this.img.removeAttribute("data-flickity-lazyload-src");
        this.img.removeAttribute("data-flickity-lazyload-srcset");
    };
    LazyLoader.prototype.onload = function(event) {
        this.complete(event, "flickity-lazyloaded");
    };
    LazyLoader.prototype.onerror = function(event) {
        this.complete(event, "flickity-lazyerror");
    };
    LazyLoader.prototype.complete = function(event, className) {
        // unbind events
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
        var cell = this.flickity.getParentCell(this.img);
        var cellElem = cell && cell.element;
        this.flickity.cellSizeChange(cellElem);
        this.img.classList.add(className);
        this.flickity.dispatchEvent("lazyLoad", event, cellElem);
    };
    // -----  ----- //
    Flickity.LazyLoader = LazyLoader;
    return Flickity;
});

},{"d683b11d5c9395cf":"4MqCI","c8fc00c3e86a37cf":"79GsT"}],"euwaz":[function(require,module,exports) {
/**
 * Flickity fade v1.0.0
 * Fade between Flickity slides
 */ /* jshint browser: true, undef: true, unused: true */ (function(window, factory) {
    // universal module definition
    /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "flickity/js/index",
        "fizzy-ui-utils/utils"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("3e76c1670921c973"), require("1f3c0a273bfebfe2"));
    else // browser global
    factory(window.Flickity, window.fizzyUIUtils);
})(this, function factory(Flickity, utils) {
    // ---- Slide ---- //
    var Slide = Flickity.Slide;
    var slideUpdateTarget = Slide.prototype.updateTarget;
    Slide.prototype.updateTarget = function() {
        slideUpdateTarget.apply(this, arguments);
        if (!this.parent.options.fade) return;
        // position cells at selected target
        var slideTargetX = this.target - this.x;
        var firstCellX = this.cells[0].x;
        this.cells.forEach(function(cell) {
            var targetX = cell.x - firstCellX - slideTargetX;
            cell.renderPosition(targetX);
        });
    };
    Slide.prototype.setOpacity = function(alpha) {
        this.cells.forEach(function(cell) {
            cell.element.style.opacity = alpha;
        });
    };
    // ---- Flickity ---- //
    var proto = Flickity.prototype;
    Flickity.createMethods.push("_createFade");
    proto._createFade = function() {
        this.fadeIndex = this.selectedIndex;
        this.prevSelectedIndex = this.selectedIndex;
        this.on("select", this.onSelectFade);
        this.on("dragEnd", this.onDragEndFade);
        this.on("settle", this.onSettleFade);
        this.on("activate", this.onActivateFade);
        this.on("deactivate", this.onDeactivateFade);
    };
    var updateSlides = proto.updateSlides;
    proto.updateSlides = function() {
        updateSlides.apply(this, arguments);
        if (!this.options.fade) return;
        // set initial opacity
        this.slides.forEach(function(slide, i) {
            var alpha = i == this.selectedIndex ? 1 : 0;
            slide.setOpacity(alpha);
        }, this);
    };
    /* ---- events ---- */ proto.onSelectFade = function() {
        // in case of resize, keep fadeIndex within current count
        this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1);
        this.prevSelectedIndex = this.selectedIndex;
    };
    proto.onSettleFade = function() {
        delete this.didDragEnd;
        if (!this.options.fade) return;
        // set full and 0 opacity on selected & faded slides
        this.selectedSlide.setOpacity(1);
        var fadedSlide = this.slides[this.fadeIndex];
        if (fadedSlide && this.fadeIndex != this.selectedIndex) this.slides[this.fadeIndex].setOpacity(0);
    };
    proto.onDragEndFade = function() {
        // set flag
        this.didDragEnd = true;
    };
    proto.onActivateFade = function() {
        if (this.options.fade) this.element.classList.add("is-fade");
    };
    proto.onDeactivateFade = function() {
        if (!this.options.fade) return;
        this.element.classList.remove("is-fade");
        // reset opacity
        this.slides.forEach(function(slide) {
            slide.setOpacity("");
        });
    };
    /* ---- position & fading ---- */ var positionSlider = proto.positionSlider;
    proto.positionSlider = function() {
        if (!this.options.fade) {
            positionSlider.apply(this, arguments);
            return;
        }
        this.fadeSlides();
        this.dispatchScrollEvent();
    };
    var positionSliderAtSelected = proto.positionSliderAtSelected;
    proto.positionSliderAtSelected = function() {
        if (this.options.fade) // position fade slider at origin
        this.setTranslateX(0);
        positionSliderAtSelected.apply(this, arguments);
    };
    proto.fadeSlides = function() {
        if (this.slides.length < 2) return;
        // get slides to fade-in & fade-out
        var indexes = this.getFadeIndexes();
        var fadeSlideA = this.slides[indexes.a];
        var fadeSlideB = this.slides[indexes.b];
        var distance = this.wrapDifference(fadeSlideA.target, fadeSlideB.target);
        var progress = this.wrapDifference(fadeSlideA.target, -this.x);
        progress = progress / distance;
        fadeSlideA.setOpacity(1 - progress);
        fadeSlideB.setOpacity(progress);
        // hide previous slide
        var fadeHideIndex = indexes.a;
        if (this.isDragging) fadeHideIndex = progress > 0.5 ? indexes.a : indexes.b;
        var isNewHideIndex = this.fadeHideIndex != undefined && this.fadeHideIndex != fadeHideIndex && this.fadeHideIndex != indexes.a && this.fadeHideIndex != indexes.b;
        if (isNewHideIndex) // new fadeHideSlide set, hide previous
        this.slides[this.fadeHideIndex].setOpacity(0);
        this.fadeHideIndex = fadeHideIndex;
    };
    proto.getFadeIndexes = function() {
        if (!this.isDragging && !this.didDragEnd) return {
            a: this.fadeIndex,
            b: this.selectedIndex
        };
        if (this.options.wrapAround) return this.getFadeDragWrapIndexes();
        else return this.getFadeDragLimitIndexes();
    };
    proto.getFadeDragWrapIndexes = function() {
        var distances = this.slides.map(function(slide, i) {
            return this.getSlideDistance(-this.x, i);
        }, this);
        var absDistances = distances.map(function(distance) {
            return Math.abs(distance);
        });
        var minDistance = Math.min.apply(Math, absDistances);
        var closestIndex = absDistances.indexOf(minDistance);
        var distance = distances[closestIndex];
        var len = this.slides.length;
        var delta = distance >= 0 ? 1 : -1;
        return {
            a: closestIndex,
            b: utils.modulo(closestIndex + delta, len)
        };
    };
    proto.getFadeDragLimitIndexes = function() {
        // calculate closest previous slide
        var dragIndex = 0;
        for(var i = 0; i < this.slides.length - 1; i++){
            var slide = this.slides[i];
            if (-this.x < slide.target) break;
            dragIndex = i;
        }
        return {
            a: dragIndex,
            b: dragIndex + 1
        };
    };
    proto.wrapDifference = function(a, b) {
        var diff = b - a;
        if (!this.options.wrapAround) return diff;
        var diffPlus = diff + this.slideableWidth;
        var diffMinus = diff - this.slideableWidth;
        if (Math.abs(diffPlus) < Math.abs(diff)) diff = diffPlus;
        if (Math.abs(diffMinus) < Math.abs(diff)) diff = diffMinus;
        return diff;
    };
    // ---- wrapAround ---- //
    var _getWrapShiftCells = proto._getWrapShiftCells;
    proto._getWrapShiftCells = function() {
        if (!this.options.fade) _getWrapShiftCells.apply(this, arguments);
    };
    var shiftWrapCells = proto.shiftWrapCells;
    proto.shiftWrapCells = function() {
        if (!this.options.fade) shiftWrapCells.apply(this, arguments);
    };
    return Flickity;
});

},{"3e76c1670921c973":"f8rAZ","1f3c0a273bfebfe2":"79GsT"}],"iBm0a":[function(require,module,exports) {
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

},{}]},["bG8R7"], "bG8R7", "parcelRequire874f")

//# sourceMappingURL=base_revamp.22a1874c.js.map
