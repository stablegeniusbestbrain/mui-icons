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
      _react2.default.createElement('path', { d: 'M20.1 13.5H3.9c-.9 0-.9-.6-.9-1.5s0-1.5.9-1.5h16.2c.9 0 .9.6.9 1.5s0 1.5-.9 1.5zm0-6H3.9C3 7.5 3 6.9 3 6s0-1.5.9-1.5h16.2c.9 0 .9.6.9 1.5s0 1.5-.9 1.5zm-16.2 9h16.2c.9 0 .9.6.9 1.5s0 1.5-.9 1.5H3.9c-.9 0-.9-.6-.9-1.5s0-1.5.9-1.5z' })
    )
  );
};

exports.default = Icon;