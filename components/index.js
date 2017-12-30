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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 2 */,
/* 3 */,
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

/***/ })
/******/ ])));