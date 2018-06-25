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
      _react2.default.createElement('path', { d: 'M20 6c0-.6-.3-1.2-.7-1.6-.9-.7-2.2-.5-2.9.4l-2.8 3.4-2.4-1.8c-.9-.6-2.1-.5-2.8.4l-4 5c-.3.3-.4.8-.4 1.2v3h16V6zm0 13H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;