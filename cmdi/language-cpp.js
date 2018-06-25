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
      _react2.default.createElement('path', { d: 'M10.5 16l.4 2.4c-.3.1-.7.3-1.2.4-.6.1-1.3.2-2 .2-2.2 0-3.9-.7-5-2C1.6 15.8 1 14.2 1 12.2c0-2.3.7-4.1 2-5.3C4.3 5.6 6 5 7.9 5c.8 0 1.4.1 2 .2s.9.2 1.2.4l-.6 2.5-1.1-.4c-.4-.1-.8-.1-1.3-.1-1.2 0-2.2.4-2.9 1.1C4.4 9.4 4 10.5 4 12c0 1.4.4 2.5 1.1 3.2.7.8 1.7 1.2 3 1.2l1.3-.1c.4-.1.8-.2 1.1-.3zm.5-5h2V9h2v2h2v2h-2v2h-2v-2h-2v-2zm7 0h2V9h2v2h2v2h-2v2h-2v-2h-2v-2z' })
    )
  );
};

exports.default = Icon;