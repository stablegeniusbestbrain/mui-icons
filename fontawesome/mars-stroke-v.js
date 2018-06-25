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
      _react2.default.createElement('path', { d: 'M12 8.6q2.9.3 4.9 2.5t2 5.2q0 2.2-1.2 4.1t-3.2 2.8-4.2.7q-1.8-.2-3.3-1.1t-2.5-2.5-1-3.4q-.2-2.1.7-3.9t2.4-3 3.7-1.4V6.9H8.1q-.1 0-.3-.2t-.1-.3v-.8q0-.2.1-.3t.3-.2h2.2V2.9L9.1 4.2q-.2.1-.4.1t-.2-.1l-.7-.7q-.1-.1-.1-.2t.1-.4L10.5.3q.3-.3.6-.3t.6.3l2.8 2.6q.1.2.1.4t-.1.2l-.7.7q-.1.1-.3.1t-.3-.1L12 2.9v2.2h2.1q.2 0 .4.2t.1.3v.8q0 .2-.1.3t-.4.2H12v1.7zm-.9 13.7q2.5 0 4.3-1.8t1.7-4.2-1.7-4.3-4.3-1.7T6.9 12t-1.8 4.3 1.8 4.2 4.2 1.8z' })
    )
  );
};

exports.default = Icon;