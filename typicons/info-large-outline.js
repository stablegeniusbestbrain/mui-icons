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
      _react2.default.createElement('path', { d: 'M14.2 16l.6-1.1c.8-1.6.9-3.2.2-4.5-.1-.3-.2-.5-.4-.7C16 9 17 7.6 17 6c0-2.2-1.8-4-4-4S9 3.8 9 6c0 .8.2 1.5.6 2.1-1.7.4-2.8 1.3-2.9 1.4-.7.6-.9 1.7-.4 2.5.3.6.9.9 1.5 1l-.6 1.1c-.8 1.6-.9 3.2-.2 4.5.5 1.2 1.6 2 2.9 2.3.4.1.9.1 1.3.1 2.4 0 3.9-1.3 4.1-1.5.7-.6.9-1.7.4-2.5-.3-.6-.9-.9-1.5-1zM13 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-1.8 15c-.3 0-.6 0-.9-.1C8.7 18.6 8 17 9 15l1-2c.5-1 .5-1.6-.1-2-.2-.2-.4-.2-.7-.2-.6 0-1.2.2-1.2.2s1.1-1 2.8-1c.3 0 .6 0 .9.1 1.6.3 2.3 1.9 1.3 3.9l-1 2c-.5 1-.5 1.6.1 2 .2.2.4.2.7.2.6 0 1.2-.2 1.2-.2s-1.1 1-2.8 1z' })
    )
  );
};

exports.default = Icon;