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
      _react2.default.createElement('path', { d: 'M13 18h1c.6 0 1 .4 1 1h7v2h-7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1H2v-2h7c0-.6.4-1 1-1h1v-1.7C8.1 15.1 6 12 6 8.7v-4L12 2l6 2.7v4c0 3.3-2.1 6.4-5 7.6V18zM12 4L8 5.7V9h4V4zm0 5v6c1.9-.5 4-2.9 4-5V9h-4z' })
    )
  );
};

exports.default = Icon;