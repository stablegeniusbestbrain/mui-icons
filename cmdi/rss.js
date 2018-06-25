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
      _react2.default.createElement('path', { d: 'M6.2 15.6c1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.2-2.2 2.2C5 20 4 19 4 17.8c0-1.2 1-2.2 2.2-2.2zM4 4.4c8.6 0 15.6 7 15.6 15.6h-2.9C16.7 13 11 7.3 4 7.3V4.4zm0 5.7c5.5 0 9.9 4.4 9.9 9.9h-2.8c0-3.9-3.2-7.1-7.1-7.1v-2.8z' })
    )
  );
};

exports.default = Icon;