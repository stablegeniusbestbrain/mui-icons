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
      _react2.default.createElement('path', { d: 'M17 21H7c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM7 5c-.5 0-1 .5-1 1v12c0 .6.5 1 1 1h10c.6 0 1-.4 1-1V6c0-.5-.4-1-1-1H7zm9 6H8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h8c.3 0 .5.2.5.5s-.2.5-.5.5zm0-3H8c-.3 0-.5-.2-.5-.5S7.7 7 8 7h8c.3 0 .5.2.5.5s-.2.5-.5.5zm0 6H8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h8c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3H8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h8c.3 0 .5.2.5.5s-.2.5-.5.5z' })
    )
  );
};

exports.default = Icon;