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
      _react2.default.createElement('path', { d: 'M5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5zm10.8 2H19v12.2c-.3-.8-1.3-1.4-2.2-1.4h-1v-3c0-.6-.4-1-1-1h-6v-2h2c.6 0 1-.5 1-1v-2h2c1 0 1.9-.8 2-1.8zM5 10.3l4.8 4.5v1c0 1.1.9 2 2 2V19H5v-8.7z' })
    )
  );
};

exports.default = Icon;