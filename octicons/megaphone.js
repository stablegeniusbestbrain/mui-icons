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
      _react2.default.createElement('path', { d: 'M15 1.5c-.3 0-.5.1-.8.2C12.1 3 6.8 6.9 4.5 7.5c-2.1 0-4.5 1-4.5 3.8S2.4 15 4.5 15c.5.1 1 .3 1.5.6v6.9h3v-5.2c2 1.3 4 2.8 5.2 3.5.3.1.5.2.8.2.8 0 1.5-.6 1.5-1.5V3c0-.9-.7-1.5-1.5-1.5zm0 18c-.6-.3-1.3-.9-2.2-1.5-.3-.2-.5-.3-.8-.5V5c.2-.2.5-.3.7-.5.9-.6 1.7-1.2 2.3-1.5v16.5zm3-9h6V12h-6v-1.5zm0 3l6 3V18l-6-3v-1.5zm6-9V6l-6 3V7.5l6-3z' })
    )
  );
};

exports.default = Icon;