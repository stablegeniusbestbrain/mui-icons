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
      _react2.default.createElement('path', { d: 'M10.9 8.5a1.4 1.4 0 0 1-.4-1c0-.4.2-.8.4-1.1.3-.2.7-.4 1.1-.4.4 0 .8.2 1.1.4.2.3.4.7.4 1.1 0 .4-.2.8-.4 1A1.5 1.5 0 0 1 12 9c-.4 0-.8-.2-1.1-.5zm2.6 3.5c0-.4-.2-.7-.5-1.1-.3-.2-.6-.4-1-.4h-1.5c-.4 0-.7.2-1 .4-.3.4-.5.7-.5 1.1h1.5v4.5c0 .4.2.7.5 1 .3.3.6.5 1 .5h1.5c.4 0 .7-.2 1-.5.3-.3.5-.6.5-1h-1.5V12zM12 3.4c-4.7 0-8.6 3.9-8.6 8.6 0 4.7 3.9 8.5 8.6 8.5s8.6-3.8 8.6-8.5c0-4.8-3.9-8.6-8.6-8.6zm0-1.9c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5z' })
    )
  );
};

exports.default = Icon;