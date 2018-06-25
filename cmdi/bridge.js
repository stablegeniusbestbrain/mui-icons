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
      _react2.default.createElement('path', { d: 'M7 14v-3.1c-.7-.3-1.4-.7-2-1.2V14h2zm-2 4H3v-2H1v-2h2V7h2v1.4C6.8 10 9.3 11 12 11s5.2-1 7-2.6V7h2v7h2v2h-2v2h-2v-2H5v2zm12-7.1V14h2V9.7c-.6.5-1.3.9-2 1.2zM16 14v-2.7c-.6.2-1.3.4-2 .5V14h2zm-3 0v-2h-2v2h2zm-3 0v-2.2c-.7-.1-1.4-.3-2-.5V14h2z' })
    )
  );
};

exports.default = Icon;