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
      _react2.default.createElement('path', { d: 'M12 5c1.6 0 3.1.6 4.3 1.7 1.1 1.1 1.7 2.6 1.7 4.2s-.6 3-1.7 4.1L12 19.2 7.7 15C6.6 13.9 6 12.4 6 10.9s.6-3.1 1.7-4.2C8.9 5.6 10.4 5 12 5m0-2c-2 0-4.1.8-5.7 2.3-3.1 3.1-3.1 8.1 0 11.1L12 22l5.7-5.6c3.1-3 3.1-8 0-11.1C16.1 3.8 14 3 12 3zm0 5.5c.7 0 1.3.3 1.8.7.9 1 .9 2.6 0 3.6-.5.4-1.1.7-1.8.7s-1.3-.3-1.8-.7c-.9-1-.9-2.6 0-3.6.5-.4 1.1-.7 1.8-.7m0-1c-.9 0-1.8.3-2.5 1-1.3 1.4-1.3 3.6 0 5 .7.7 1.6 1 2.5 1s1.8-.3 2.5-1c1.3-1.4 1.3-3.6 0-5-.7-.7-1.6-1-2.5-1z' })
    )
  );
};

exports.default = Icon;