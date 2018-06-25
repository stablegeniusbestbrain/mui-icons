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
      _react2.default.createElement('path', { d: 'M7.1 8.5L5.7 7.1C4.8 8.3 4.2 9.6 4.1 11h2c.1-.9.5-1.7 1-2.5zm-1 4.5h-2c.1 1.4.7 2.7 1.6 3.9l1.4-1.4c-.5-.8-.9-1.6-1-2.5zm1 5.3c1.2.9 2.5 1.5 3.9 1.6v-2c-.9-.1-1.7-.5-2.5-1l-1.4 1.4zM13 4.1V1L8.4 5.5 13 10V6.1c2.8.5 5 2.9 5 5.9s-2.2 5.4-5 5.9v2c3.9-.5 7-3.8 7-7.9s-3.1-7.4-7-7.9z' })
    )
  );
};

exports.default = Icon;