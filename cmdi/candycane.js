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
      _react2.default.createElement('path', { d: 'M10 10c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-.6.1-1.2.3-1.8L10 9.9v.1zm2-8c.7 0 1.4.1 2.1.4L12 6c-.9 0-1.6.5-1.9 1.2L7.2 4.3C8.3 2.9 10.1 2 12 2zm5.8 4.3L14 10.1V8c0-.4-.1-.7-.3-1l2.1-3.6c.9.7 1.6 1.7 2 2.9zm.2 6.8l-4 4v-4.2l4-4v4.2zm0 6.9c0 1.1-.9 2-2 2s-2-.9-2-2v-.1l4-4V20z' })
    )
  );
};

exports.default = Icon;