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
      _react2.default.createElement('path', { d: 'M18 13.5c-.6 0-1 .4-1 1 0 2.4-1.7 4.4-4 4.9V12h4c.6 0 1-.4 1-1s-.4-1-1-1h-4V8.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3S9 4.3 9 6c0 1.3.8 2.4 2 2.8V10H7c-.6 0-1 .4-1 1s.4 1 1 1h4v7.4c-2.3-.5-4-2.5-4-4.9 0-.6-.4-1-1-1s-1 .4-1 1c0 3.9 3.1 7 7 7s7-3.1 7-7c0-.6-.4-1-1-1zM12 5c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1z' })
    )
  );
};

exports.default = Icon;