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
      _react2.default.createElement('path', { d: 'M3 12V6.8l6-1.4v6.5L3 12zm17-9v8.8l-10 .1V5.2L20 3zM3 13l6 .1v6.8l-6-1.1V13zm17 .3V22l-10-1.9v-7l10 .2z' })
    )
  );
};

exports.default = Icon;