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
      _react2.default.createElement('path', { d: 'M20.4 8.5c.1-.4.7-2-.2-4.1 0 0-1.3-.4-4.3 1.6-1.2-.3-2.6-.4-3.9-.4-1.3 0-2.7.1-3.9.4-3-2-4.3-1.6-4.3-1.6-.9 2.1-.3 3.7-.2 4.1C2.6 9.6 2 11 2 12.7c0 6.5 4.2 7.9 10 7.9s10-1.4 10-7.9c0-1.7-.6-3.1-1.6-4.2zM12 19.4c-4.1 0-7.5-.2-7.5-4.2 0-1 .5-1.9 1.3-2.6 1.3-1.2 3.6-.6 6.2-.6s4.9-.6 6.2.6c.8.7 1.3 1.6 1.3 2.6 0 4-3.4 4.2-7.5 4.2zm-3.1-6.3c-.9 0-1.5 1-1.5 2.2 0 1.3.6 2.3 1.5 2.3.8 0 1.5-1 1.5-2.3 0-1.2-.7-2.2-1.5-2.2zm6.2 0c-.8 0-1.5 1-1.5 2.2 0 1.3.7 2.3 1.5 2.3s1.5-1 1.5-2.3c0-1.2-.6-2.2-1.5-2.2z' })
    )
  );
};

exports.default = Icon;