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
      _react2.default.createElement('path', { d: 'M21 19.5c0 .9 0 1.5-.9 1.5H9.9c-.9 0-.9-.6-.9-1.5s0-1.5.9-1.5h10.2c.9 0 .9.6.9 1.5zM9.9 6h10.2c.9 0 .9-.6.9-1.5S21 3 20.1 3H9.9C9 3 9 3.6 9 4.5S9 6 9.9 6zm10.2 4.5H9.9c-.9 0-.9.6-.9 1.5s0 1.5.9 1.5h10.2c.9 0 .9-.6.9-1.5s0-1.5-.9-1.5zM6 1.5H4.9c-.4.3-.9.4-1.5.5v1h1.1v3.2H3.2v1.3h4.3V6.2H6V1.5zm.4 12.2c-.3 0-.7 0-1 .1.8-.9 1.7-1.9 1.7-2.9 0-1.1-.8-1.9-2-1.9-.9 0-1.5.3-2.1 1l.9.8c.2-.3.5-.5.9-.5s.7.2.7.7c0 .8-1.1 1.8-2.5 3.1v.9h4.5l-.2-1.3h-.9zm-.1 5.7v-.1c.6-.3.9-.7.9-1.3 0-1-.8-1.6-2.1-1.6-.8 0-1.4.3-2 .7l.9 1c.3-.3.6-.5 1-.5s.6.2.6.6c0 .4-.3.6-1.3.6V20c1.3 0 1.5.2 1.5.7 0 .3-.3.5-.9.5-.4 0-.8-.2-1.2-.5l-.7 1c.5.5 1.2.8 2.1.8 1.3 0 2.3-.6 2.3-1.7 0-.8-.5-1.3-1.1-1.4z' })
    )
  );
};

exports.default = Icon;