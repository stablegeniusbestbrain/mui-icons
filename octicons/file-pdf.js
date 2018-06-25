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
      _react2.default.createElement('path', { d: 'M15.8 1.5H4.5A1.5 1.5 0 0 0 3 3v18a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 21V6.8l-5.2-5.3zM4.5 3h6a1 1 0 0 0-.5.3 1.6 1.6 0 0 0-.3.7 6.3 6.3 0 0 0-.1 2.2c0 .9.2 1.8.5 2.7a32.7 32.7 0 0 1-1.7 4c-.8 1.5-1.2 2.5-1.4 2.8a10.7 10.7 0 0 0-1 .4 6.3 6.3 0 0 0-1.5 1V3zm6.6 7.2a8.5 8.5 0 0 0 1.8 3.1c.4.4.9.7 1.4.8-1 .2-1.9.3-2.7.5a18.3 18.3 0 0 0-2.7.9c-.9.4.3-.7.9-1.9.5-1.1 1-2.2 1.3-3.4zM19.5 21H5.3a1.1 1.1 0 0 1-.3 0 3.2 3.2 0 0 0 1.1-.7 15.2 15.2 0 0 0 2.7-3.5c.4-.2.8-.4 1.2-.5l.6-.2c.7-.2 1.4-.4 2.2-.5s1.5-.2 2.2-.3a13 13 0 0 0 2.1.8c.6.2 1.2.3 1.8.3h.6V21zm0-7.3a5.6 5.6 0 0 0-1-.4 6.3 6.3 0 0 0-1.1-.2c-.6 0-1.2.1-1.8.1a4.5 4.5 0 0 1-1.5-.9 9.1 9.1 0 0 1-2-3.5c.2-1 .3-2 .3-3 .1-.4.1-.8 0-1.1a1.6 1.6 0 0 0-.3-1.4 1.2 1.2 0 0 0-.9-.3H15l4.5 4.5v6.2z' })
    )
  );
};

exports.default = Icon;