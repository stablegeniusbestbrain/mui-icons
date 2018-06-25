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
      _react2.default.createElement('path', { d: 'M11 3h2v4h-2V3zM8 4h2v4h4V4h2v7h-3.2L8 6.2V4zm12 16.7L18.7 22 14 17.3V22h-4v-8.7l-8-8L3.3 4 20 20.7z' })
    )
  );
};

exports.default = Icon;