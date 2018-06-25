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
      _react2.default.createElement('path', { d: 'M2 18c2.2-1 4.4-2 6.7-2 2.2 0 4.4 2 6.6 2 2.3 0 4.5-2 6.7-2v3c-2.2 0-4.4 2-6.7 2-2.2 0-4.4-2-6.6-2-2.3 0-4.5 1-6.7 2v-3zm6.7-5c-.8 0-1.6.1-2.3.3l4.9-3.4-1.1-1.3c-.1-.1-.2-.4-.2-.6 0-.3.2-.6.4-.8l5.8-4 1.1 1.6-4.8 3.4 5.2 6.2c-.8.3-1.6.6-2.4.6-2.2 0-4.4-2-6.6-2zM18 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z' })
    )
  );
};

exports.default = Icon;