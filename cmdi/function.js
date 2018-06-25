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
      _react2.default.createElement('path', { d: 'M15.6 5.3c-1.1-.1-2.1.7-2.2 1.8l-.2 2.9H16v2h-3l-.4 5.1c-.2 2.2-2.2 3.8-4.4 3.6-1.3-.1-2.4-.8-3-1.9l1.5-1.5c.2.8.9 1.3 1.7 1.4 1.1.1 2.1-.7 2.2-1.8L11 12H8v-2h3.2l.2-3.1c.2-2.2 2.2-3.8 4.4-3.6 1.3.1 2.4.8 3 1.9l-1.5 1.5c-.2-.8-.9-1.3-1.7-1.4z' })
    )
  );
};

exports.default = Icon;