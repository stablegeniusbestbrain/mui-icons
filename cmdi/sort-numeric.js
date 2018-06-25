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
      _react2.default.createElement('path', { d: 'M7.8 7c1.3 0 2.2.5 2.8 1.5.5.9.8 2.1.8 3.5 0 1.5-.3 2.7-.9 3.6-.6.9-1.5 1.4-2.8 1.4-1.2 0-2.2-.5-2.7-1.4-.6-1-.9-2.2-.9-3.6s.3-2.6.9-3.6C5.6 7.5 6.5 7 7.8 7zm0 1.6c-.5 0-.8.3-1.1.9-.3.5-.4 1.4-.4 2.5 0 1.2.1 2 .4 2.5.3.6.6.9 1.1.9.9 0 1.4-1.2 1.4-3.4s-.5-3.3-1.4-3.4zm5.5 8.4v-1.8h1l1-.2c.4-.1.7-.2 1-.4.3-.2.6-.5.8-.8.2-.3.3-.7.4-1-.5.4-1.1.6-2 .6-.9 0-1.6-.2-2.2-.7-.5-.5-.8-1.3-.8-2.2 0-1 .3-1.8 1-2.5.6-.6 1.5-1 2.6-1 1.3 0 2.2.4 2.8 1.2.6.8.9 1.8.9 3-.1 1-.2 1.8-.5 2.6-.3.7-.7 1.3-1.2 1.8-.4.5-1 .8-1.6 1-.7.2-1.4.4-2.2.4h-1zm2.8-8.4c-.5 0-.8.2-1 .5-.3.3-.4.7-.4 1.3 0 .4.1.8.3 1.1.3.3.6.4 1.1.4.3 0 .6 0 .8-.2.2-.1.4-.2.5-.4.1-.1.1-.3.1-.6 0-.5-.1-1-.3-1.4-.2-.4-.6-.6-1.1-.7zM9.3 5l3.2-3.2L15.8 5H9.3zm6.5 14l-3.3 3.3L9.3 19h6.5z' })
    )
  );
};

exports.default = Icon;