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
      _react2.default.createElement('path', { d: 'M21 21h-4v-6.7c0-1.1-1.2-2-2.2-2-1.1 0-1.8.9-1.8 2V21H9V9h4v2c.7-1.1 2.4-1.8 3.5-1.8 2.5 0 4.5 2.1 4.5 4.6V21zM7 21H3V9h4v12zM5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z' })
    )
  );
};

exports.default = Icon;