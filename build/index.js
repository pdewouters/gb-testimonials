/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    IconButton = _wp$components.IconButton;
registerBlockType('hm/gb-testimonials', {
  title: 'Testimonials',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: '.testimonial-text'
    },
    author: {
      type: 'string'
    },
    source: {
      type: 'string'
    },
    cite: {
      type: 'string'
    },
    testimonialImg: {
      type: "string",
      source: "attribute",
      selector: ".testimonial-img",
      attribute: "src"
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        content = _props$attributes.content,
        author = _props$attributes.author,
        source = _props$attributes.source,
        cite = _props$attributes.cite,
        testimonialImg = _props$attributes.testimonialImg,
        setAttributes = props.setAttributes,
        className = props.className;

    var onChangeContent = function onChangeContent(content) {
      return props.setAttributes({
        content: content
      });
    };

    var onChangeAuthor = function onChangeAuthor(author) {
      return props.setAttributes({
        author: author
      });
    };

    var onChangeSource = function onChangeSource(source) {
      return props.setAttributes({
        source: source
      });
    };

    var onChangeCite = function onChangeCite(cite) {
      return props.setAttributes({
        cite: cite
      });
    };

    var onChangeImage = function onChangeImage(imgObj) {
      console.log(imgObj);
      setAttributes({
        testimonialImg: imgObj.sizes.thumbnail.url
      });
    }; //console.info(props);


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Blockquote settings"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      className: "gb-testimonial-author",
      label: "Author",
      value: author,
      onChange: onChangeAuthor
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      className: "gb-testimonial-source",
      label: "Source",
      value: source,
      onChange: onChangeSource
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      className: "gb-testimonial-cite",
      label: "Source URL",
      value: cite,
      onChange: onChangeCite
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: testimonialImg,
      alt: "img"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      className: "testimonial-img",
      onSelect: onChangeImage,
      allowedTypes: 'image',
      value: testimonialImg,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "testimonial-logo__button",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Change image."
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", {
      cite: cite
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "testimonial-text",
      tagName: "p",
      onChange: onChangeContent,
      value: content
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("footer", null, "\u2014", author, ", ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("cite", null, source))));
  },
  save: function save(props) {
    console.info(props);
    var _props$attributes2 = props.attributes,
        content = _props$attributes2.content,
        author = _props$attributes2.author,
        source = _props$attributes2.source,
        cite = _props$attributes2.cite,
        testimonialImg = _props$attributes2.testimonialImg,
        className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "testimonial-img"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: testimonialImg,
      alt: "img"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("blockquote", {
      cite: cite
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: "testimonial-text",
      tagName: "p",
      value: content
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("footer", null, "\u2014", author, ", ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("cite", null, source))));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map