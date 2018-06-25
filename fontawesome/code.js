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
      _react2.default.createElement('path', { d: 'M7.4 18.7l-.7.7q-.1.1-.3.1t-.3-.1l-6.2-6.2q-.2-.2-.2-.3t.2-.4l6.2-6.2q.2-.1.3-.1t.3.1l.7.7q.1.1.1.3t-.1.3l-5.3 5.3 5.3 5.2q.1.2.1.3t-.1.3zm7.9-14.3l-5 17.3q0 .2-.2.3t-.3 0l-.8-.2q-.2 0-.3-.2t0-.3l5-17.3q0-.2.2-.3t.3 0l.8.2q.2.1.3.2t0 .3zm8.8 8.8l-6.2 6.2q-.2.1-.3.1t-.3-.1l-.7-.7q-.1-.1-.1-.3t.1-.3l5.3-5.2-5.3-5.3q-.1-.1-.1-.3t.1-.3l.7-.7q.1-.1.3-.1t.3.1l6.2 6.2q.2.2.2.4t-.2.3z' })
    )
  );
};

exports.default = Icon;