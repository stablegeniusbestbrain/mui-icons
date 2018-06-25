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
      _react2.default.createElement('path', { d: 'M12 1.7q2.8 0 5.2 1.4t3.7 3.7 1.4 5.2-1.4 5.2-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7zm1.7 16.7v-2.5q0-.2-.1-.3t-.3-.2h-2.6q-.1 0-.3.2t-.1.3v2.5q0 .2.1.3t.3.2h2.6q.2 0 .3-.2t.1-.3zm0-4.6l.2-8.3q0-.2-.1-.2-.1-.2-.3-.2h-3q-.2 0-.3.2-.1 0-.1.2l.2 8.3q0 .1.1.2t.4.1h2.4q.2 0 .3-.1t.2-.2z' })
    )
  );
};

exports.default = Icon;