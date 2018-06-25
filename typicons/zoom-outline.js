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
      _react2.default.createElement('path', { d: 'M14 8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3m0-1c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM4.2 17.7c0 1.7 1.4 3.1 3.1 3.1.8 0 1.5-.3 2.1-.8l2.4-2.4c.7.3 1.4.4 2.2.4 3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7c0 .8.1 1.5.4 2.2l-2.3 2.3c-.6.5-.9 1.3-.9 2.2zm6.5-1.7l-2.6 2.5c-.2.2-.5.3-.8.3-.6 0-1.1-.5-1.1-1.1 0-.3.1-.6.3-.8L9 14.3c.5.7 1 1.2 1.7 1.7zm3.3 0c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z' })
    )
  );
};

exports.default = Icon;