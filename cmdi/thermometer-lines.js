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
      _react2.default.createElement('path', { d: 'M17 3h4v2h-4V3zm0 4h4v2h-4V7zm0 4h4v2h-3.3l-.7-.9V11zm4 4v2h-2c0-.7-.1-1.4-.3-2H21zm-4 2c0 2.8-2.2 5-5 5s-5-2.2-5-5c0-1.6.8-3.1 2-4V5c0-1.7 1.3-3 3-3s3 1.3 3 3v8c1.2.9 2 2.4 2 4zm-6-9v6.2c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8V8h-2zM7 3v2H3V3h4zm0 4v2H3V7h4zm0 4v1.1l-.7.9H3v-2h4zm-4 4h2.3c-.2.6-.3 1.3-.3 2H3v-2z' })
    )
  );
};

exports.default = Icon;