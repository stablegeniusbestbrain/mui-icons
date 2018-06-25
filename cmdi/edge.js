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
      _react2.default.createElement('path', { d: 'M2.7 10.8C3.8-1.4 22.5-1.4 21.2 13.6H8.6c0 4.3 5.8 5.6 10.9 2.7v4.2C13.2 23.9 5 21.4 5 14.1c0-5.5 5-7.3 5-7.3s-1.4 1.8-1.5 3.3h7.2c0-7.2-9.8-4.5-13 .7z' })
    )
  );
};

exports.default = Icon;