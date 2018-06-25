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
      _react2.default.createElement('path', { d: 'M19.1 4.9l-1.4 1.4C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-4.1 3-7.4 7-7.9v2C8.2 6.6 6 9 6 12c0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.7-.7-3.2-1.8-4.2l-1.4 1.4c.8.7 1.2 1.7 1.2 2.8 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.9 1.3-3.4 3-3.9v2.2c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7V2h-1C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-2.8-1.1-5.3-2.9-7.1z' })
    )
  );
};

exports.default = Icon;