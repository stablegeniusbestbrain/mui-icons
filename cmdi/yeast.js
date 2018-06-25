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
      _react2.default.createElement('path', { d: 'M18 14c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4l.1-.9c0-.7-.2-1.3-.5-1.6-.3-.2-.5-.3-.9-.4-.9.6-2 .9-3.2.9C5.9 16 3 13.1 3 9.5S5.9 3 9.5 3 16 5.9 16 9.5c0 1.2-.3 2.3-.9 3.2.1.4.2.6.4.9.3.3.9.5 1.6.5l.9-.1zM7.5 10c.8 0 1.5.7 1.5 1.5S8.3 13 7.5 13 6 12.3 6 11.5 6.7 10 7.5 10zm2-5C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z' })
    )
  );
};

exports.default = Icon;