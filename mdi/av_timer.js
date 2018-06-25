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
      _react2.default.createElement('path', { d: 'M11 17c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1zm0-14v4h2V5.1c3.4.5 6 3.4 6 6.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.7.6-3.2 1.6-4.4L12 13l1.4-1.4-6.8-6.8C4.4 6.5 3 9.1 3 12c0 5 4 9 9 9s9-4 9-9-4-9-9-9h-1zm7 9c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zM6 12c0 .6.5 1 1 1s1-.4 1-1-.5-1-1-1-1 .4-1 1z' })
    )
  );
};

exports.default = Icon;