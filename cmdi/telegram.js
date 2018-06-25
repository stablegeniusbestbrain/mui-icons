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
      _react2.default.createElement('path', { d: 'M9.8 18.6l.3-4.2 7.6-6.9c.4-.3 0-.5-.5-.2l-9.5 6L3.6 12c-.8-.3-.8-.9.2-1.3l16-6.2c.7-.3 1.4.2 1.2 1.3l-2.8 12.8c-.1 1-.7 1.2-1.5.8l-4.1-3.1-2 1.9c-.2.3-.4.4-.8.4z' })
    )
  );
};

exports.default = Icon;