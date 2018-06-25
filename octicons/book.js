'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M4.5 7.5h6V9h-6V7.5zm0 4.5h6v-1.5h-6V12zm0 3h6v-1.5h-6V15zM21 7.5h-6V9h6V7.5zm0 3h-6V12h6v-1.5zm0 3h-6V15h6v-1.5zm3-9V18c0 .8-.7 1.5-1.5 1.5h-8.2L12.8 21l-1.5-1.5H3c-.8 0-1.5-.7-1.5-1.5V4.5C1.5 3.7 2.2 3 3 3h8.3l1.5 1.5L14.3 3h8.2c.8 0 1.5.7 1.5 1.5zm-12 .8l-.7-.8H3V18h9V5.3zm10.5-.8h-8.2l-.8.8V18h9V4.5z' })
    )
  );
};

exports.default = Icon;