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
      _react2.default.createElement('path', { d: 'M18.3 5.7c-.5-.4-.7-.8-1-1.3-.2-.4-.4-1-.5-1.5-.9.5-1.7 1-2.6 1.7-.9.7-1.7 1.4-2.5 2.2-1.1 1.1-2 2.7-2.7 3.7H4.5L0 15h4.5l3-3C7 13.2 6 16.5 6 16.5L7.5 18s3.3-1 4.5-1.5l-3 3V24l4.5-4.5V15c1-.7 2.6-1.6 3.7-2.7.8-.8 1.6-1.7 2.2-2.5.6-.9 1.2-1.8 1.7-2.6-.5-.1-1.1-.3-1.6-.5a5.1 5.1 0 0 1-1.2-1M24 0s-.1.6-.4 1.6c-.3 1-.9 2.4-1.6 4-1.1-.1-1.9-.5-2.5-1.1-.6-.6-1-1.4-1.1-2.5 1.6-.7 2.9-1.3 4-1.6C23.4.1 24 0 24 0' })
    )
  );
};

exports.default = Icon;