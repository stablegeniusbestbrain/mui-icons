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
      _react2.default.createElement('path', { d: 'M11.9 15.9l1.5-1.6-2-2-1.5 1.5v.8h1.2v1.3h.8zm5.9-9.7q-.2-.2-.5 0l-4.6 4.7q-.3.2-.1.5t.5-.1l4.7-4.6q.2-.3 0-.5zm1.1 8v2.5q0 1.6-1.2 2.7T15 20.6H3.9q-1.6 0-2.8-1.2T0 16.7V5.6Q0 4 1.1 2.8t2.8-1.1H15q.8 0 1.6.3.2.1.2.4 0 .2-.1.3l-.7.7q-.2.2-.4.1-.3-.1-.6-.1H3.9q-.9 0-1.6.7t-.6 1.5v11.1q0 .9.6 1.5t1.6.7H15q.9 0 1.5-.7t.6-1.5V15q0-.1.2-.3l.8-.8q.2-.2.5-.1t.3.4zm-1.3-9.9l3.8 3.8-9 9H8.6v-3.8zm5.9 1.8l-1.2 1.2-3.9-3.9 1.3-1.2q.3-.4.9-.4t.9.4l2 2q.4.4.4.9t-.4 1z' })
    )
  );
};

exports.default = Icon;