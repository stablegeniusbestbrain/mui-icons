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
      _react2.default.createElement('path', { d: 'M22.3 2.6v18.8q0 .4-.3.6t-.6.3h-6.8q-.4 0-.6-.3t-.3-.6V2.6q0-.4.3-.6t.6-.3h6.8q.4 0 .6.3t.3.6zm-12 0v18.8q0 .4-.3.6t-.6.3H2.6q-.4 0-.6-.3t-.3-.6V2.6q0-.4.3-.6t.6-.3h6.8q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;