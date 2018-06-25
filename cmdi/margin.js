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
      _react2.default.createElement('path', { d: 'M14.6 6.8l-1.7-1 5.6-3.7-.4 6.7-1.7-1L8.7 21H6.4l8.2-14.2zm2.9 5.2c1.9 0 3.5 1.7 3.5 4.5S19.4 21 17.5 21 14 19.3 14 16.5s1.6-4.5 3.5-4.5zm0 2c-.8 0-1.5.8-1.5 2.5s.7 2.5 1.5 2.5 1.5-.8 1.5-2.5-.7-2.5-1.5-2.5zm-10-9C9.4 5 11 6.7 11 9.5S9.4 14 7.5 14 4 12.3 4 9.5 5.6 5 7.5 5zm0 2C6.7 7 6 7.8 6 9.5S6.7 12 7.5 12 9 11.2 9 9.5 8.3 7 7.5 7z' })
    )
  );
};

exports.default = Icon;