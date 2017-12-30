(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(15);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectDropdown = exports.Option = exports.Select = undefined;

var _select = __webpack_require__(6);

var _select2 = _interopRequireDefault(_select);

var _option = __webpack_require__(7);

var _option2 = _interopRequireDefault(_option);

var _selectDropdown = __webpack_require__(5);

var _selectDropdown2 = _interopRequireDefault(_selectDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Select = _select2.default;
exports.Option = _option2.default;
exports.SelectDropdown = _selectDropdown2.default;
// Shouldn't need to use SelectDropdown directly
// Base components(minimal css)

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This component contains everything between  
// the <Select> tags
var EZSelectDropdown = function EZSelectDropdown(props) {

    var dropId = props.id ? props.id + "-dropdown" : "";

    return _react2.default.createElement(
        'div',
        {
            id: dropId,
            className: "ez-select-dropdown " + props.className },
        props.children
    );
};

EZSelectDropdown.propTypes = {
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    key: _propTypes2.default.string
};

exports.default = EZSelectDropdown;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _selectDropdown = __webpack_require__(5);

var _selectDropdown2 = _interopRequireDefault(_selectDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectInput = function (_React$Component) {
    _inherits(SelectInput, _React$Component);

    function SelectInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            open: false,
            Options: null,
            // TODO (save placeholder, add option to show if selecting)
            PlaceholderOption: null,
            SelectedOption: null,
            selectedIndex: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var selectedIndex = null;
            var SelectedOption = null;

            // filter out 'placeholder' options here to keep array order later
            var filteredChildren = [];
            _react2.default.Children.forEach(this.props.children, function (child) {
                // If not an option
                if (!child.props.isSelectOption ||
                // or not a placeholder
                !child.props.placeholder) {
                    // then add child as is to child list
                    filteredChildren.push(child);
                }
                // otherwise, child must be a placeholder option
                else {
                        // Assigns placeholder child to 'SelectedOption'
                        // note this is why there can only be one placeholder,
                        // which makes sense to me anyway. 

                        // give placeholder needed "option" classNames
                        var newClassName = (_this2.props.optionClassName || "") + ' ' + (child.props.className || "");

                        SelectedOption = _react2.default.cloneElement(child, {
                            // 'selected' refers to the element being what is shown when 'closed'
                            selected: null,
                            // Since it will be active, 
                            onClick: _this2.toggleDropdown.bind(_this2),
                            name: _this2.props.name,
                            className: newClassName,
                            // 'checked' is the actual radio input
                            checked: true
                        });
                    }
            });

            var Options = _react2.default.Children.map(filteredChildren, function (child, index) {
                // (in theory) this allows styling/building of pretty much anything.
                // Only 'option' children are modified and able to alter the 
                // <form> value
                if (!child.props.isSelectOption) {
                    return child;
                } else {
                    // adds individual className after blanket className
                    var newClassName = (_this2.props.optionClassName || "") + ' ' + (child.props.className || "");

                    var newOption = _react2.default.cloneElement(child, {
                        // TODO I don't like this repetition between these two functions
                        selected: null,
                        onClick: _this2.handleChange.bind(_this2),
                        name: _this2.props.name,
                        childIndex: index,
                        className: newClassName,
                        checked: false
                    });

                    // If child has 'selected' attr, set the appropriate index
                    if (child.props.selected) {
                        selectedIndex = index;
                    }

                    // 'placeholder' children were already filtered out,
                    // so can just return the child
                    return newOption;
                }
            });

            // If there is an option selected
            // then grab it and set it as selected
            // *Note: if there is a placeholder and it is not set to 'selected',
            // this will override the placeholder
            if (selectedIndex !== null) {
                SelectedOption = this.findOption(selectedIndex, Options);
            }

            // Initialize state with appropriate vals
            this.setState({
                Options: Options,
                selectedIndex: selectedIndex,
                SelectedOption: SelectedOption
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            // close dropdown
            this.closeDropdown();
            // get new index
            var selectedIndex = e.target.dataset.index;
            // find option, clone, and return it
            var SelectedOption = this.findOption(selectedIndex);

            // Update state with selected child and it's index
            this.setState({
                SelectedOption: SelectedOption,
                selectedIndex: selectedIndex
            });
            // Pass event to parent onChange. 
            // TODO need to decide what 'target' will point to. 
            // Right now it's to an invisible input
            if (this.props.onChange) {
                this.props.onChange(e);
            }
        }
    }, {
        key: 'findOption',
        value: function findOption(childIndex, OptionList) {
            var _this3 = this;

            // get index number (since 'data' attribute stores a string)
            // TODO might need to change to random generated key(uniqid.time() maybe)
            var parsedIndex = parseInt(childIndex, 10);
            // populate options(children) to choose from,
            // either from children passed in or state
            var children = OptionList ? [].concat(_toConsumableArray(OptionList)) : [].concat(_toConsumableArray(this.state.Options));
            // prepare var
            var SelectedOption = void 0;
            // loop through each 'child' option
            _react2.default.Children.forEach(children, function (child, index) {
                // find appropriate child based on index
                if (parsedIndex === index) {
                    // grab Selected child to display
                    SelectedOption =
                    // clone child
                    _react2.default.cloneElement(child, { // replace click event with opening dropdown controls
                        onClick: _this3.toggleDropdown.bind(_this3),
                        // set to 'checked' for form submission
                        checked: true,
                        // 'selectedClassName' is added at render time
                        className: child.props.className
                    });
                }
            });
            // return cloned element
            return SelectedOption;
        }
    }, {
        key: 'closeDropdown',
        value: function closeDropdown() {
            this.setState({ open: false });
        }
    }, {
        key: 'toggleDropdown',
        value: function toggleDropdown() {
            var isOpen = !this.state.open;
            this.setState({ open: isOpen });
        }
    }, {
        key: 'render',
        value: function render() {
            var SelectedOption = this.state.SelectedOption;

            // Adds 'selectedClassName' class to selected element
            var SelectedOptionWithClass = SelectedOption ? _react2.default.cloneElement(SelectedOption, {
                className: SelectedOption.props.className + " selected " + (this.props.selectedClassName || '')
            }) : "";

            return _react2.default.createElement(
                'div',
                {
                    style: this.props.style || {},
                    id: this.props.id,
                    className: "ez-select-wrapper " + (this.props.className || "")
                },
                // Render 'SelectedOption', now cloned with selected class
                SelectedOptionWithClass,
                // Since this is a separate component, it can be wrapped with 
                // cssTransition animation if desired
                this.state.open && _react2.default.createElement(
                    _selectDropdown2.default,
                    {
                        id: this.props.id,
                        className: this.props.dropdownClassName
                    },
                    this.state.Options
                )
            );
        }
    }]);

    return SelectInput;
}(_react2.default.Component);

SelectInput.propTypes = {
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,

    // classNames
    className: _propTypes2.default.string,
    dropdownClassName: _propTypes2.default.string,
    optionClassName: _propTypes2.default.string,
    selectedClassName: _propTypes2.default.string
};
exports.default = SelectInput;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EZSelectOption = function (_React$Component) {
    _inherits(EZSelectOption, _React$Component);

    function EZSelectOption() {
        _classCallCheck(this, EZSelectOption);

        return _possibleConstructorReturn(this, (EZSelectOption.__proto__ || Object.getPrototypeOf(EZSelectOption)).apply(this, arguments));
    }

    _createClass(EZSelectOption, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'label',
                {
                    id: this.props.id,
                    className: "ez-select-item " + (this.props.className || "")
                },
                _react2.default.createElement('input', { type: 'radio',
                    onClick: this.props.onChange || this.props.onClick,
                    name: this.props.name,
                    value: this.props.value || "",
                    style: { display: "none" },
                    'data-index': this.props.childIndex
                }),
                this.props.children
            );
        }
    }]);

    return EZSelectOption;
}(_react2.default.Component);

EZSelectOption.propTypes = {
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    value: _propTypes2.default.any.isRequired, //<- Screw you, conventional wisdom! You'll never take me alive!

    // ** Controlled by <Select> parent
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func
};
EZSelectOption.defaultProps = {
    isSelectOption: true
};
exports.default = EZSelectOption;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./wrapper.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./wrapper.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./dropdown.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./dropdown.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./option.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./option.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ColorSelect = exports.BasicSelect = exports.BlankSelect = undefined;

var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(16);

var _index4 = _interopRequireDefault(_index3);

var _colorSelect = __webpack_require__(21);

var _colorSelect2 = _interopRequireDefault(_colorSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import YourComponent from './your-path/';

exports.BlankSelect = _index2.default;
exports.BasicSelect = _index4.default;
exports.ColorSelect = _colorSelect2.default; // Frameworks(examples) to be modified or otherwise used

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(4);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Obviously, this could also be a class
var REPLACE_THIS_NAME = function REPLACE_THIS_NAME(props) {
    var changeMe = function changeMe() {
        alert("<Select> onChange wasn't changed!");
    };

    var fakeProp = 2;
    return _react2.default.createElement(
        _components.Select,
        {
            name: 'formName',
            id: 'id-for-wrapper',
            className: 'applied-to-wrapper',
            dropdownClassName: 'optional-select-dropdown-class',
            optionClassName: 'applied-to-each-Option',
            onChange: changeMe
        },
        _react2.default.createElement(
            _components.Option,
            {
                className: 'unique-class-for-Option',
                value: 'option1',
                placeholder: true /*Need at least one with 'placeholder set'*/,
                selected: fakeProp === 1
            },
            'Option 1'
        ),
        _react2.default.createElement(
            _components.Option,
            {
                className: 'unique-class-for-second-Option',
                value: 'option2',
                placeholder: false,
                selected: fakeProp === 2
            },
            'Selected by fakeProp'
        )
    );
};

REPLACE_THIS_NAME.propTypes = {
    // onChange: PropTypes.isRequired(for example)
};

exports.default = REPLACE_THIS_NAME;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./index.style.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./index.style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".applied-to-wrapper {\r\n    background-color: pink; \r\n    color: green;\r\n}", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(4);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleBoring = function handleBoring(e) {
    alert("I'm a boring ol' select. selected: " + e.target.value);
};

exports.default = function (props) {

    return _react2.default.createElement(
        _components.Select,
        {
            onChange: handleBoring },
        _react2.default.createElement(
            _components.Option,
            {
                value: 'Boring option 1',
                placeholder: true
            },
            'Option 1'
        ),
        _react2.default.createElement(
            _components.Option,
            {
                value: 'Boring option 2'
            },
            'Option 2'
        ),
        _react2.default.createElement(
            _components.Option,
            {
                value: 'Boring option 3'
            },
            'Option 3'
        )
    );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".ez-select-wrapper{\r\n    position: relative;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n    width: 95%;\r\n    max-width: 300px;\r\n}", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".ez-select-dropdown{\r\n    z-index: 200;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 100%;\r\n    transform: translateY(100%);\r\n    bottom: 0;\r\n\r\n    background-color: #fafafa;\r\n    border: 1px solid #ddd;\r\n    border-radius: 0 0 .25rem .25rem;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\r\n.ez-select-item{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    margin: 2px 0;\r\n    padding: 5px 10px;\r\n    max-width: 100%;\r\n\r\n}\r\n.ez-select-item:hover,\r\n.ez-select-item.selected:hover{\r\n    background: #eee;\r\n}\r\n.ez-select-item.selected{\r\n    background-color: #fff;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n}\r\n.ez-select-item.selected::after{\r\n    vertical-align: middle;\r\n    width: 15px;\r\n    height: 15px;\r\n    margin-left: auto; \r\n    content: url(" + __webpack_require__(20) + ");\r\n}\r\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 12 8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" xmlns:serif=\"http://www.serif.com/\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\"><g transform=\"matrix(1,0,0,1,-244.629,-197.966)\"><g transform=\"matrix(1,0,0,1,-676.373,-1522.02)\"><path id=\"Arrow-Icon\" serif:id=\"Arrow Icon\" d=\"M921.256,1721.5C920.917,1721.16 920.917,1720.59 921.256,1720.25C921.595,1719.9 922.143,1719.9 922.482,1720.25L926.997,1724.88L931.512,1720.25C931.851,1719.9 932.4,1719.9 932.739,1720.25C933.077,1720.59 933.077,1721.16 932.739,1721.5L927.628,1726.75C927.455,1726.93 927.225,1727.02 926.997,1727.01C926.769,1727.02 926.54,1726.93 926.366,1726.75L921.256,1721.5Z\" style=\"fill:rgb(131,147,167);\"></path></g></g></svg>"

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(4);

var _colorSplotch = __webpack_require__(22);

var _colorSplotch2 = _interopRequireDefault(_colorSplotch);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Generic styles make select behave like a typical dropdown

// Custom css


var ColorSelect = function (_React$Component) {
    _inherits(ColorSelect, _React$Component);

    function ColorSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ColorSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorSelect.__proto__ || Object.getPrototypeOf(ColorSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectedValue: ''
        }, _this.handleColor = function (e) {
            console.log("Color changed: ", e.target.value);
            this.setState({ selectedValue: e.target.value });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ColorSelect, [{
        key: 'render',
        value: function render() {
            // I use the noPlaceholder prop so I can use this same
            // select menu in multiple places both with and without having
            // something selected by default
            var noPlaceholder = this.props.noPlaceholder;
            var type = this.state.selectedValue;

            // An example for an 'invalid' state. 
            // If (whatever prop name you want) is 'invalid', 
            // append appropriate class to the 'selected' value
            var invalidClassName = this.props.invalid ? " custom-invalid-class " : "";
            var colorBg = this.state.selectedValue ? "color-bg " + this.state.selectedValue : "";
            var selectedClassName = colorBg + invalidClassName;
            return _react2.default.createElement(
                _components.Select,
                {
                    className: 'color-type-select',
                    selectedClassName: selectedClassName,
                    onChange: this.handleColor.bind(this)
                },
                _react2.default.createElement(
                    _components.Option,
                    {
                        placeholder: !noPlaceholder,
                        selected: noPlaceholder,
                        value: noPlaceholder ? "all" : ""
                    },
                    _react2.default.createElement(_colorSplotch2.default, { color: '#444' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        "Select a color"
                    )
                ),
                _react2.default.createElement(
                    _components.Option,
                    {
                        value: 'orange',
                        selected: type === "#fb812e"
                    },
                    _react2.default.createElement(_colorSplotch2.default, { color: '#fb812e' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Orange (#fb812e) '
                    )
                ),
                _react2.default.createElement(
                    _components.Option,
                    {
                        value: 'blue',
                        selected: type === "#4263d4",
                        onClick: function onClick() {
                            console.log("I'm different");
                        }
                    },
                    _react2.default.createElement(_colorSplotch2.default, { color: '#4263d4' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Blue (#4263d4)'
                    )
                ),
                _react2.default.createElement(
                    _components.Option,
                    {
                        value: 'pink',
                        selected: type === "#f742d2"
                    },
                    _react2.default.createElement(_colorSplotch2.default, { color: '#f742d2' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Pink (#f742d2)'
                    )
                ),
                _react2.default.createElement(
                    _components.Option,
                    {
                        value: 'green',
                        selected: type === "#3aa92b"
                    },
                    _react2.default.createElement(_colorSplotch2.default, { color: '#3aa92b' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'Green (#3aa92b)'
                    )
                )
            );
        }
    }]);

    return ColorSelect;
}(_react2.default.Component);

ColorSelect.propTypes = {
    invalid: _propTypes2.default.bool,
    selectedValue: _propTypes2.default.string,
    noPlaceholder: _propTypes2.default.bool
};

exports.default = ColorSelect;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    // props.color
    return _react2.default.createElement('div', {
        style: { backgroundColor: props.color },
        className: "color-splotch " + props.className || ""
    });
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./color-splotch.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./color-splotch.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".color-splotch{\r\n    height: 27px;\r\n    width: 27px;\r\n    border-radius: 10px;\r\n    margin-right: 10px;\r\n\r\n}", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./color-select.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./color-select.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".ez-select-item.color-bg{\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n.ez-select-item.orange{ \r\n    background-color: #fb812e;\r\n}\r\n.ez-select-item.blue{ \r\n    background-color: #4263d4;\r\n}\r\n.ez-select-item.pink{ \r\n    background-color: #f742d2 \r\n} \r\n.ez-select-item.green{ \r\n    background-color: #3aa92b\r\n}\r\n.ez-select-item.selected.color-bg:hover{\r\n    background: purple;\r\n}", ""]);

// exports


/***/ })
/******/ ])));