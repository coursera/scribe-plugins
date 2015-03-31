define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Scribe Placeholder Plugin.
	 * Plugin to display placeholder text inside the scribe editor.
	 *
	 * @param {string} placeholder Placeholder text.
	 * @param {HTMLElement} editorContainer DOM element wrapping the scribe editor.
	 */
	__webpack_require__(1);

	var CLASS_NAME = 'scribe-plugin-placeholder';

	module.exports = function(placeholder, editorContainer) {
	  return function(scribe) {

	    /**
	     * Get computed style property for given element.
	     * From http://www.quirksmode.org/dom/getstyles.html
	     */
	    function getStyle(el, styleProp) {
	      var y;

	      if (el.currentStyle) {
	        y = el.currentStyle[styleProp];
	      } else if (window.getComputedStyle) {
	        y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
	      }

	      return parseInt(y, 10);
	    }

	    /**
	     * Return true if the scribe editor is empty or has a single empty paragraph node.
	     */
	    function isEditorEmpty() {
	      var childNodes = scribe.el.childNodes;
	      var blockCount = childNodes.length;

	      if (blockCount === 0) {
	        return true;
	      } else if (blockCount === 1) {
	        var node = childNodes[0];
	        var nodeName = node.nodeName.toLowerCase();

	        if (nodeName === 'p' && node.textContent === '')   {
	          return true;
	        }
	      }

	      return false;
	    }

	    /**
	     * Show placeholder.
	     */
	    function show() {
	      var existingPlaceholder = editorContainer.getElementsByClassName(CLASS_NAME);
	      if (existingPlaceholder.length !== 0) {
	        return;
	      }

	      var el = document.createElement('div');
	      var leftPadding = 2;

	      el.className = CLASS_NAME;
	      el.innerText = placeholder;

	      el.style.top = getStyle(scribe.el, 'padding-top') + getStyle(scribe.el, 'border-top-width') + 'px';
	      el.style.left = getStyle(scribe.el, 'padding-left') + leftPadding + 'px';

	      editorContainer.appendChild(el);
	    }

	    /**
	     * Hide placeholder.
	     */
	    function hide() {
	      var placeholders = Array.prototype.slice.call(editorContainer.getElementsByClassName(CLASS_NAME));
	      placeholders.forEach(function(placeholder) {
	        editorContainer.removeChild(placeholder);
	      });
	    }

	    /**
	     * Update visibility of placeholder.
	     */
	    function update() {
	      if (isEditorEmpty()) {
	        show();
	      } else {
	        hide();
	      }
	    }

	    scribe.on('content-changed', update);
	    scribe.el.addEventListener('blur', update);
	    scribe.el.addEventListener('focus', update);
	  };
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])});;