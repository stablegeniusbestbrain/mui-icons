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
      _react2.default.createElement('path', { d: 'M9 11.2V7.5C9 6.1 10.1 5 11.5 5S14 6.1 14 7.5v3.7c1.2-.8 2-2.1 2-3.7C16 5 14 3 11.5 3S7 5 7 7.5c0 1.6.8 2.9 2 3.7zm9.8 4.7l-4.5-2.3c-.2-.1-.3-.1-.5-.1H13v-6c0-.8-.7-1.5-1.5-1.5S10 6.7 10 7.5v10.7l-3.4-.7h-.3c-.3 0-.6.1-.8.3l-.7.8 4.9 5c.3.2.6.4 1.1.4h6.7c.8 0 1.4-.5 1.5-1.3l.7-5.2c0-.1.1-.2.1-.2 0-.7-.4-1.2-1-1.4z' })
    )
  );
};

exports.default = Icon;