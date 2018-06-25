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
      _react2.default.createElement('path', { d: 'M18.5 2c.8 0 1.5.7 1.5 1.5S19.3 5 18.5 5c-.2 0-.4-.1-.6-.1l-3.7 3.6.3.5c2.2-1.3 4.8-2 7.5-2h1v2h-1c-2.6 0-5 .8-7 2 0 2.2-1.8 4-4 4-1.2 2-2 4.4-2 7v1H7v-1c0-2.7.7-5.3 2-7.5l-.5-.3-3.6 3.7c0 .1.1.4.1.6 0 .8-.7 1.5-1.5 1.5S2 19.3 2 18.5 2.7 17 3.5 17c.2 0 .5.1.6.1l3.7-3.6c-.5-.7-.8-1.6-.8-2.5 0-2.2 1.8-4 4-4 .9 0 1.8.3 2.5.8l3.6-3.7c0-.1-.1-.4-.1-.6 0-.8.7-1.5 1.5-1.5zM11 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;