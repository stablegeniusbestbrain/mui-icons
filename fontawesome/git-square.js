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
      _react2.default.createElement('path', { d: 'M9.5 17.5q0 .9-1.2.9-1.5 0-1.5-.8 0-.9 1.3-.9 1.4 0 1.4.8zM9 11.3q0 1.1-1 1.1t-1-1.1q0-1.2 1-1.2.5 0 .8.3t.2.9zm2.3-1V8.6q-1.1.4-1.9.4-.6-.4-1.4-.4-1.2 0-2 .8t-.8 1.9q0 .6.4 1.3t1 .9v.1q-.5.2-.5 1.1 0 .7.6 1.1-1.6.5-1.6 1.9 0 .6.3 1t.7.7 1 .3 1.1.1q3 0 3-2.5 0-.9-.7-1.3t-1.6-.6q-.4-.1-.7-.3t-.4-.5q0-.6.7-.7 1-.2 1.6-1t.6-1.8q0-.3-.1-.7.5-.1.6-.1zm.7 5.6h1.9q-.1-.4-.1-1.1V9.6q0-.6.1-.9H12q.1.3.1.9v5.3q0 .6-.1 1zm6.9-.2V14q-.4.3-1 .3-.7 0-.7-1.1v-3H18.6V8.7h-1.4q0-1.1.1-1.4h-1.9q.1.3.1.7v.7h-.8v1.5h.8-.1v3q0 .4.1.8t.1.8.3.6.6.4.9.2q.9 0 1.5-.3zm-4.8-9.5q0-.5-.3-.8T13 5t-.8.4-.4.8q0 .5.4.9t.8.3.8-.4.3-.8zm8.2-.6v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;