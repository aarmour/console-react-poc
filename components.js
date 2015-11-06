(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Components"] = factory(require("react"));
	else
		root["Components"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';

	exports.__esModule = true;

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	var _src = __webpack_require__(11);

	_defaults(exports, _interopExportWildcard(_src, _defaults));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _CourseList2 = __webpack_require__(9);

	var _CourseList3 = _interopRequireDefault(_CourseList2);

	exports.CourseList = _CourseList3['default'];

	var _CourseListItem2 = __webpack_require__(4);

	var _CourseListItem3 = _interopRequireDefault(_CourseListItem2);

	exports.CourseListItem = _CourseListItem3['default'];

	var _CourseInfoItem2 = __webpack_require__(8);

	var _CourseInfoItem3 = _interopRequireDefault(_CourseInfoItem2);

	exports.CourseInfoItem = _CourseInfoItem3['default'];

	var _CourseButton2 = __webpack_require__(7);

	var _CourseButton3 = _interopRequireDefault(_CourseButton2);

	exports.CourseButton = _CourseButton3['default'];

	var _CourseActionButtons2 = __webpack_require__(6);

	var _CourseActionButtons3 = _interopRequireDefault(_CourseActionButtons2);

	exports.CourseActionButtons = _CourseActionButtons3['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Title2 = __webpack_require__(13);

	var _Title3 = _interopRequireDefault(_Title2);

	exports.Title = _Title3['default'];

	var _Label2 = __webpack_require__(12);

	var _Label3 = _interopRequireDefault(_Label2);

	exports.Label = _Label3['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CourseListItemCss = __webpack_require__(18);

	var _CourseListItemCss2 = _interopRequireDefault(_CourseListItemCss);

	var _ = __webpack_require__(2);

	var _typography = __webpack_require__(3);

	var _dateFormatting = __webpack_require__(5);

	function handleAction(action, courseId, event) {
	  if (event && event.defaultPrevented) return;
	  if (action) action(courseId);
	  if (event) event.preventDefault();
	}

	function CourseListItem(props) {
	  var educators = props.educators.join(', ');
	  var thumbnailBg = { backgroundImage: 'url(' + props.thumbnailUrl + ')' };

	  return _react2['default'].createElement(
	    'div',
	    { className: _CourseListItemCss2['default'].root, onClick: handleAction.bind(null, props.onSelectCourse, props.id) },
	    _react2['default'].createElement(
	      'div',
	      { className: _CourseListItemCss2['default'].sidebar },
	      _react2['default'].createElement('div', { className: _CourseListItemCss2['default'].thumbnail, style: thumbnailBg })
	    ),
	    _react2['default'].createElement(
	      'div',
	      { className: _CourseListItemCss2['default'].content },
	      _react2['default'].createElement(
	        'span',
	        { className: _CourseListItemCss2['default'].textSecondary },
	        props.brand
	      ),
	      _react2['default'].createElement(
	        _typography.Title,
	        null,
	        _react2['default'].createElement(
	          'a',
	          { href: '#', className: _CourseListItemCss2['default'].link },
	          props.title
	        )
	      ),
	      _react2['default'].createElement(
	        'span',
	        { className: _CourseListItemCss2['default'].textSecondary },
	        props.sectionCode
	      ),
	      _react2['default'].createElement(_.CourseInfoItem, { label: 'Educators:', value: educators }),
	      _react2['default'].createElement(
	        _.CourseInfoItem,
	        { label: 'Course Dates:' },
	        _react2['default'].createElement(_dateFormatting.DateRange, { startDate: props.startDate, endDate: props.endDate })
	      )
	    ),
	    _react2['default'].createElement(
	      'div',
	      { className: _CourseListItemCss2['default'].actionBtnContainer },
	      _react2['default'].createElement(_.CourseActionButtons, {
	        isUserOwner: props.isUserOwner,
	        isDeleted: props.isDeleted,
	        onInviteStudents: handleAction.bind(null, props.onInviteStudents, props.id),
	        onCourseSettings: handleAction.bind(null, props.onCourseSettings, props.id),
	        onSelectCourse: handleAction.bind(null, props.onSelectCourse, props.id),
	        onRemoveCourse: handleAction.bind(null, props.onRemoveCourse, props.id)
	      })
	    )
	  );
	}

	CourseListItem.propTypes = {
	  id: _react.PropTypes.string.isRequired,
	  brand: _react.PropTypes.string,
	  title: _react.PropTypes.string.isRequired,
	  sectionCode: _react.PropTypes.string,
	  educators: _react.PropTypes.array.isRequired,
	  startDate: _react.PropTypes.instanceOf(Date).isRequired,
	  endDate: _react.PropTypes.instanceOf(Date).isRequired,
	  thumbnailUrl: _react.PropTypes.string.isRequired,
	  isDeleted: _react.PropTypes.bool,
	  isUserOwner: _react.PropTypes.bool,
	  onSelectCourse: _react.PropTypes.func,
	  onRemoveCourse: _react.PropTypes.func,
	  onInviteStudents: _react.PropTypes.func,
	  onCourseSettings: _react.PropTypes.func
	};

	CourseListItem.defaultProps = {
	  educators: [],
	  isDeleted: false,
	  isUserOwner: false
	};

	exports['default'] = CourseListItem;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _DateRange2 = __webpack_require__(10);

	var _DateRange3 = _interopRequireDefault(_DateRange2);

	exports.DateRange = _DateRange3['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CourseActionButtonsCss = __webpack_require__(14);

	var _CourseActionButtonsCss2 = _interopRequireDefault(_CourseActionButtonsCss);

	var _ = __webpack_require__(2);

	function handleClick(handler, event) {
	  handler();
	  event.preventDefault();
	}

	function renderDeletedButtons(props) {
	  return _react2['default'].createElement(_.CourseButton, {
	    text: 'Remove this course',
	    onClick: handleClick.bind(this, props.onRemoveCourse)
	  });
	}

	function renderOwnerButtons(props) {
	  return _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'ul',
	      { className: _CourseActionButtonsCss2['default'].buttonGroup },
	      _react2['default'].createElement(
	        'li',
	        { className: _CourseActionButtonsCss2['default'].buttonGroupItem },
	        _react2['default'].createElement(_.CourseButton, {
	          text: 'Invite Students',
	          onClick: handleClick.bind(this, props.onInviteStudents)
	        })
	      ),
	      _react2['default'].createElement(
	        'li',
	        { className: _CourseActionButtonsCss2['default'].buttonGroupItem },
	        _react2['default'].createElement(_.CourseButton, {
	          text: 'Course settings',
	          onClick: handleClick.bind(this, props.onCourseSettings)
	        })
	      )
	    )
	  );
	}

	function renderButtons(props) {
	  return _react2['default'].createElement(_.CourseButton, {
	    text: 'Go to my course',
	    onClick: handleClick.bind(this, props.onSelectCourse)
	  });
	}

	function CourseActionButtons(props) {
	  if (props.isDeleted) return renderDeletedButtons(props);
	  if (props.isUserOwner) return renderOwnerButtons(props);
	  return renderButtons(props);
	}

	CourseActionButtons.propTypes = {
	  isUserOwner: _react.PropTypes.bool,
	  isDeleted: _react.PropTypes.bool,
	  onSelectCourse: _react.PropTypes.func.isRequired,
	  onRemoveCourse: _react.PropTypes.func.isRequired,
	  onInviteStudents: _react.PropTypes.func.isRequired,
	  onCourseSettings: _react.PropTypes.func.isRequired
	};

	exports['default'] = CourseActionButtons;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CourseButtonCss = __webpack_require__(15);

	var _CourseButtonCss2 = _interopRequireDefault(_CourseButtonCss);

	function handleClick(props, event) {
	  if (props.onClick) {
	    props.onClick(event);
	  }

	  event.preventDefault();
	}

	function CourseButton(props) {
	  return _react2['default'].createElement(
	    'a',
	    { href: '#', className: _CourseButtonCss2['default'].root, onClick: handleClick.bind(this, props) },
	    props.text
	  );
	}

	CourseButton.propTypes = {
	  text: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};

	exports['default'] = CourseButton;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CourseInfoItemCss = __webpack_require__(16);

	var _CourseInfoItemCss2 = _interopRequireDefault(_CourseInfoItemCss);

	var _typography = __webpack_require__(3);

	function CourseInfoItem(props) {
	  var value = props.value || props.children;

	  return _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      _typography.Label,
	      { className: _CourseInfoItemCss2['default'].label, type: 'secondary', elementType: 'h3' },
	      props.label
	    ),
	    _react2['default'].createElement(
	      _typography.Label,
	      null,
	      value
	    )
	  );
	}

	CourseInfoItem.propTypes = {
	  label: _react.PropTypes.string.isRequired,
	  value: _react.PropTypes.string
	};

	exports['default'] = CourseInfoItem;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CourseListCss = __webpack_require__(17);

	var _CourseListCss2 = _interopRequireDefault(_CourseListCss);

	var _CourseListItem = __webpack_require__(4);

	var _CourseListItem2 = _interopRequireDefault(_CourseListItem);

	function CourseList(props) {
	  return _react2['default'].createElement(
	    'ul',
	    { className: _CourseListCss2['default'].root },
	    props.courses.map(function (course) {
	      return _react2['default'].createElement(
	        'li',
	        { key: course.id },
	        _react2['default'].createElement(_CourseListItem2['default'], _extends({}, course, props))
	      );
	    })
	  );
	}

	CourseList.propTypes = {
	  courses: _react.PropTypes.array.isRequired,
	  onSelectCourse: _react.PropTypes.func.isRequired,
	  onRemoveCourse: _react.PropTypes.func.isRequired,
	  onInviteStudents: _react.PropTypes.func.isRequired,
	  onCourseSettings: _react.PropTypes.func.isRequired
	};

	exports['default'] = CourseList;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	function formatDateRange(startDate, endDate) {
	  var startDay = startDate.getDate();
	  var startMonth = shortMonths[startDate.getMonth()];
	  var startYear = startDate.getFullYear();
	  var endDay = endDate.getDate();
	  var endMonth = shortMonths[endDate.getMonth()];
	  var endYear = endDate.getFullYear();

	  if (startYear === endYear) {
	    return startMonth + ' ' + startDay + ' to ' + endMonth + ' ' + endDay + ', ' + endYear;
	  } else {
	    return startMonth + ' ' + startDay + ', ' + startYear + ' to ' + endMonth + ' ' + endDay + ', ' + endYear;
	  }
	}

	function DateRange(props) {
	  var dateRange = formatDateRange(props.startDate, props.endDate);

	  return _react2['default'].createElement(
	    'div',
	    null,
	    dateRange
	  );
	}

	DateRange.propTypes = {
	  startDate: _react.PropTypes.instanceOf(Date).isRequired,
	  endDate: _react.PropTypes.instanceOf(Date).isRequired
	};

	exports['default'] = DateRange;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// General atoms and molecules
	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _typography2 = __webpack_require__(3);

	var _typography = _interopRequireWildcard(_typography2);

	exports.typography = _typography;

	var _dateFormatting2 = __webpack_require__(5);

	var _dateFormatting = _interopRequireWildcard(_dateFormatting2);

	exports.dateFormatting = _dateFormatting;

	// Course molecules and organisms

	var _course2 = __webpack_require__(2);

	var _course = _interopRequireWildcard(_course2);

	exports.course = _course;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LabelCss = __webpack_require__(19);

	var _LabelCss2 = _interopRequireDefault(_LabelCss);

	var TYPES = ['primary', 'secondary'];
	var DEFAULT_TYPE = 'primary';
	var ELEMENT_NAMES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'label'];
	var DEFAULT_ELEMENT_NAME = 'div';

	function Label(props) {
	  var className = [props.className, _LabelCss2['default'][props.type]].join(' ');

	  return _react2['default'].createElement(
	    props.elementType,
	    { className: className },
	    props.children
	  );
	}

	Label.propTypes = {
	  className: _react.PropTypes.string,
	  type: _react.PropTypes.oneOf(TYPES),
	  elementType: _react.PropTypes.oneOf(ELEMENT_NAMES)
	};

	Label.defaultProps = {
	  type: DEFAULT_TYPE,
	  elementType: DEFAULT_ELEMENT_NAME
	};

	exports['default'] = Label;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TitleCss = __webpack_require__(20);

	var _TitleCss2 = _interopRequireDefault(_TitleCss);

	var SIZES = ['large', 'extra-large'];

	function Title(props) {
	  return _react2['default'].createElement(
	    'div',
	    { className: _TitleCss2['default'].root },
	    props.children
	  );
	}

	Title.propTypes = {
	  size: _react.PropTypes.oneOf(SIZES)
	};

	exports['default'] = Title;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"buttonGroup":"CourseActionButtons__buttonGroup___38yRU","buttonGroupItem":"CourseActionButtons__buttonGroupItem___17hGN"};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"CourseButton__root___1E6S1"};

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"label":"CourseInfoItem__label___1NF9t"};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"CourseList__root___1G8sj"};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"CourseListItem__root___3-o3T","link":"CourseListItem__link___1D8Iz","sidebar":"CourseListItem__sidebar___3yugG","content":"CourseListItem__content___3sirI","thumbnail":"CourseListItem__thumbnail___1fGn-","actionBtnContainer":"CourseListItem__actionBtnContainer___1URKD","textSecondary":"CourseListItem__textSecondary___2aPvY"};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Label__root___nGePU","secondary":"Label__secondary___2drju Label__root___nGePU"};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Title__root___2O05E"};

/***/ }
/******/ ])
});
;