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
      _react2.default.createElement('path', { d: 'M13 5.5c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7v2.6c-4.5.5-8 4.3-8 8.9v1c2.2-3.4 5.3-3.9 8-4v2.5c0 .3.1.5.3.7s.4.3.7.3.5-.1.7-.3L20 12l-6.3-6.2c-.2-.2-.4-.3-.7-.3z' })
    )
  );
};

exports.default = Icon;