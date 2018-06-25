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
      _react2.default.createElement('path', { d: 'M18.4 18.9h.5v-8.6h-.5q-.4 0-.9-.2t-.8-.5T16 9t-.6-.7l-.1-.1-.1-.1q-1-1.1-1.5-1.9-.2-.3-.5-1l-.1-.3q-.1-.3-.3-.4t-.3-.5-.3-.4-.2-.2q-1 0-1.5.4t-.6 1.3q0 .6.2 1.2t.4.9.4.7.2.7H3.4q-.6 0-1.2.5t-.5 1.2q0 .7.5 1.2t1.2.5h4.5q-.2.2-.4.6t-.1.8q0 .9.7 1.6-.2.4-.2.9t.2 1 .6.7v.7q0 1.2.6 1.7t1.8.6q1.2 0 2.5-.5t2.6-.8 2.2-.4zm3.9-.9q0-.3-.3-.6t-.6-.3-.6.3-.2.6.2.6.6.3.6-.3.3-.6zm1.7-7.7v8.6q0 .7-.5 1.2t-1.2.5h-3.9q-.8 0-3 .8-2.5.9-4.2.9-1.9 0-3.1-1.1T7 18.3q-.9-1-.9-2.4 0-.3.1-.6-.5-.8-.5-1.6H3.4q-1.4 0-2.4-1t-1-2.4q0-1.4 1-2.4t2.4-1h5q-.3-.8-.3-1.8 0-1.6 1.1-2.5t2.8-.9q.5 0 .9.2t.8.7.5.9.5.9.4.9q.5.7 1.4 1.7l.2.2q.2.2.2.3t.3.3.3.3.3.2.3.2.3.1h3.9q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;