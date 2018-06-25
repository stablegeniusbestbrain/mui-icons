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
      _react2.default.createElement('path', { d: 'M5.1 5h13.8l-1-1h-12l-.8 1zm15.4.2c.3.4.5.8.5 1.3V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6.5c0-.5.2-.9.5-1.3l1.3-1.6c.3-.4.7-.6 1.2-.6h12c.5 0 .9.2 1.1.5l1.4 1.7zM6 18h6v-3H6v3z' })
    )
  );
};

exports.default = Icon;