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
      _react2.default.createElement('path', { d: 'M19 15h4V3h-4m-4 0H6c-.8 0-1.5.5-1.8 1.2l-3.1 7.1c0 .2-.1.4-.1.7v2c0 1.1.9 2 2 2h6.3l-.9 4.6c-.1.1-.1.2-.1.3 0 .4.2.8.5 1l1 1.1 6.6-6.6c.4-.3.6-.9.6-1.4V5c0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;