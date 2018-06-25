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
      _react2.default.createElement('path', { d: 'M17.8 17.8l1.1 3.2q-.4.4-1.5.9t-2.4.4q-1.4 0-2.6-.4t-1.9-1-1.2-1.4-.8-1.6-.2-1.6V9.1H6.1V6.2q.9-.4 1.7-1T9 4t.8-1.3.4-1.4.2-1.1q0-.1.1-.2t.1 0h3.3v5.7h4.4v3.4h-4.5V16q0 .4.1.7t.3.7.7.6 1.1.2q1 0 1.8-.4z' })
    )
  );
};

exports.default = Icon;