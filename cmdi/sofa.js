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
      _react2.default.createElement('path', { d: 'M7 6h2c1.1 0 2 .9 2 2v4H5V8c0-1.1.9-2 2-2zm8 0h2c1.1 0 2 .9 2 2v4h-6V8c0-1.1.9-2 2-2zM1 9h1c.6 0 1 .4 1 1v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v9h-3v-2H3v2H0v-9c0-.6.4-1 1-1z' })
    )
  );
};

exports.default = Icon;