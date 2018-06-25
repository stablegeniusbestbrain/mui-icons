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
      _react2.default.createElement('path', { d: 'M8.5 15c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM7 9h10v5H7V9zm8.5 6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm2.5.9V9c0-2.6-2.7-3-6-3-3 0-6 .4-6 3v6.9c0 1.4 1.2 2.6 2.6 2.6l-1.1 1.1v.4h1.7l1.5-1.5h2.8L15 20h1.5v-.4l-1.1-1.1c1.4 0 2.6-1.2 2.6-2.6zm-.2-13.1C20.5 3.8 22 6 22 8.9V22H2V8.9C2 6 3.5 3.8 6.2 2.8 8 2.1 10.1 2 12 2s4 .1 5.8.8z' })
    )
  );
};

exports.default = Icon;