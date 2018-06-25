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
      _react2.default.createElement('path', { d: 'M12 2c-4.4 0-8 3.6-8 8 0 4 3 7.4 7 7.9V19h-1c-.6 0-1 .4-1 1H2v2h7c0 .6.4 1 1 1h4c.6 0 1-.4 1-1h7v-2h-7c0-.6-.4-1-1-1h-1v-1.1c4-.5 7-3.9 7-7.9 0-4.4-3.6-8-8-8zm0 2s.7 1.3 1.3 3h-2.6c.6-1.7 1.3-3 1.3-3zm-2.2.4c-.3.5-.7 1.4-1.1 2.6H6.8c.7-1.2 1.7-2.1 3-2.6zm4.4 0c1.3.5 2.3 1.4 3 2.6h-1.9c-.4-1.2-.8-2.1-1.1-2.6zM6.1 9h2.2c0 .3-.1.7-.1 1 0 .3.1.7.1 1H6.1c-.1-.3-.1-.7-.1-1 0-.3 0-.7.1-1zm4.2 0h3.4c0 .3.1.7.1 1 0 .3-.1.7-.1 1h-3.4c0-.3-.1-.7-.1-1 0-.3.1-.7.1-1zm5.4 0h2.2c.1.3.1.7.1 1 0 .3 0 .7-.1 1h-2.2v-1-1zm-8.9 4h1.9c.4 1.2.8 2.1 1.1 2.6-1.3-.5-2.3-1.4-3-2.6zm3.9 0h2.6c-.6 1.7-1.3 3-1.3 3s-.7-1.3-1.3-3zm4.6 0h1.9c-.7 1.2-1.7 2.1-3 2.6.3-.5.7-1.4 1.1-2.6z' })
    )
  );
};

exports.default = Icon;