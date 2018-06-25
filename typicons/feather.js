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
      _react2.default.createElement('path', { d: 'M11.7 1h-.4C6.5 1.9 3 6.1 3 11c0 4.6 3.1 8.6 7.5 9.8V22c0 .6.4 1 1 1s1-.4 1-1v-1.2c4.4-1.2 7.5-5.2 7.5-9.8 0-4.9-3.5-9.1-8.3-10zm.8 17.7V7c0-.6-.4-1-1-1s-1 .4-1 1v11.7c-3.2-1.1-5.4-4.1-5.5-7.5l3.1 3.2c.1.1.3.1.4.1s.3-.1.4-.1c.1-.2.1-.6 0-.8L5.1 9.9c.1-1 .4-1.9.9-2.7l2.1 2.2c.1 0 .3.1.4.1s.3-.1.4-.1c.1-.2.1-.6 0-.8L6.5 6.3c1.2-1.6 2.9-2.9 5-3.3 2.1.4 3.8 1.7 5 3.3l-2.4 2.3c-.1.2-.1.6 0 .8.1 0 .3.1.4.1s.3-.1.4-.1L17 7.2c.5.8.8 1.7.9 2.7l-3.8 3.7c-.1.2-.1.6 0 .8.1 0 .3.1.4.1s.3-.1.4-.1l3.1-3.2c-.1 3.4-2.3 6.4-5.5 7.5z' })
    )
  );
};

exports.default = Icon;