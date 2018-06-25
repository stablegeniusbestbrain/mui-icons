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
      _react2.default.createElement('path', { d: 'M12 5.1q-.7 0-1.2.5t-.5 1.3v1.7h-.4V7.3q0-.6-.5-1.1t-1-.4q-.7 0-1.1.4t-.4 1.1V13l-.5-.4v-2.3q0-.6-.4-1.1t-1.1-.4q-.6 0-1 .4t-.5 1.1v3q0 .6.5 1.1L8 18.3q.6.6.6 1.4 0 .4.2.6t.6.3H18q.3 0 .6-.3t.3-.6v-.3q0-.6.1-1.1l1.4-5.8q.2-.5.2-1V8.2q0-.7-.5-1.1t-1-.5q-.6 0-1.1.5t-.4 1v.5h-.5V6.9q0-.5-.3-1t-.8-.5h-.4q-.6 0-1 .4t-.5 1.1v1.7h-.4V6.9q0-.6-.4-1.2t-1.1-.5q-.1-.1-.2-.1zm0-1.7q1.1 0 2 .7.8-.5 1.6-.5t1.5.4 1.2 1q.3-.1.8-.1 1.3 0 2.2 1t1 2.3v3.3q0 .7-.2 1.4l-1.4 5.9q-.1.3-.1.9 0 1.1-.8 1.8t-1.8.8H9.4q-1.1 0-1.8-.8t-.7-1.9l-4.2-4q-1-.9-1-2.3v-3q0-1.3 1-2.3t2.2-.9h.2q.1-1.3 1.1-2.2t2.2-.8q.7 0 1.3.3.9-1 2.3-1z' })
    )
  );
};

exports.default = Icon;