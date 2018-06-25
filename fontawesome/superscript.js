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
      _react2.default.createElement('path', { d: 'M13.7 18.3v2.3h-3.3l-2.1-3.4-.3-.6q-.2-.1-.2-.2l-.2.2q-.1.3-.3.6l-2.1 3.4H1.8v-2.3h1.7l2.6-3.9-2.4-3.6H1.8V8.5h3.7l1.9 3.1q0 .1.3.6.1.1.1.2h.1q0-.1.1-.2l.4-.6 1.8-3.1h3.5v2.3H12l-2.5 3.6 2.8 3.9h1.4zm8.6-9.1V12h-6.9l-.1-.4V11q0-.8.3-1.5t.9-1.2 1.1-.9 1.2-.7.8-.7.4-.9q0-.5-.4-.8t-1-.3q-.7 0-1.3.5-.2.1-.5.5l-1.4-1.2q.4-.5.9-.9 1.1-.9 2.5-.9 1.5 0 2.4.8t.9 2.1q0 .8-.3 1.4t-.9 1-1.1.8-1 .7-.9.7-.4.8h3.1V9.2h1.7z' })
    )
  );
};

exports.default = Icon;