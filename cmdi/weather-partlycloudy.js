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
      _react2.default.createElement('path', { d: 'M12.7 5.5c2.4 1 3.7 3.5 3.2 6 1.3 1.1 2.1 2.7 2.1 4.5v.2c.3-.1.6-.2 1-.2 1.7 0 3 1.3 3 3s-1.3 3-3 3H6c-2.2 0-4-1.8-4-4s1.8-4 4-4h.3c-1.3-1.5-1.7-3.8-.8-5.7 1.2-2.8 4.5-4.1 7.2-2.8zm-.8 1.8c-1.7-.8-3.8 0-4.6 1.8-.4 1-.4 2.1.1 3C8.5 10.8 10.2 10 12 10c.7 0 1.4.1 2 .3-.1-1.2-.8-2.4-2.1-3zm1.7-3.7c-.6-.2-1.2-.4-1.7-.5l2.5-1.3.9 2.9c-.5-.4-1.1-.8-1.7-1.1zm-7.5.8c-.5.4-.9.8-1.3 1.2l.1-2.8 3 .7c-.7.2-1.3.5-1.8.9zM18 9.7c-.1-.6-.2-1.2-.4-1.7L20 9.5l-2.1 2.2c.1-.6.1-1.3.1-2zM3 11.3c.1.6.2 1.2.4 1.7l-2.3-1.5 2-2.2c-.1.6-.1 1.3-.1 2zM19 18h-3v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4H6c-1.1 0-2 .9-2 2s.9 2 2 2h13c.6 0 1-.4 1-1s-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;