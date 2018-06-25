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
      _react2.default.createElement('path', { d: 'M14 17.5v-2.2q0-.6-.4-.6-.2 0-.4.2v3q.2.2.4.2.4 0 .4-.6zm2.5-1.7h.9v-.4q0-.7-.5-.7t-.4.7v.4zm-7.7-3.5v.9h-1v5.7h-1v-5.7H5.7v-.9h3.1zm2.7 1.6v5h-.9v-.6q-.5.6-1 .6-.4 0-.5-.4-.1-.2-.1-.7v-3.9h.9v4q0 .2.2.2t.5-.4v-3.8h.9zm3.4 1.5v2q0 .7-.1 1-.1.5-.7.5-.5 0-.9-.5v.5h-.9v-6.6h.9v2.1q.4-.5.9-.5.6 0 .7.5.1.3.1 1zm3.4 1.8v.1q0 .4-.1.6 0 .2-.2.5-.3.5-1 .5t-1.1-.5q-.3-.3-.3-1.1v-1.8q0-.8.3-1.1.4-.5 1-.5t1.1.5q.3.4.3 1.1v1.1h-1.8v.8q0 .7.4.7t.4-.3q0-.1.1-.1t0-.3v-.2h.9zM12.2 6.1v2.1q0 .7-.4.7t-.4-.7V6.1q0-.7.4-.7t.4.7zm7.2 9.6q0-2.4-.3-3.5-.1-.6-.6-1t-1-.5q-1.8-.2-5.5-.2t-5.5.2q-.6.1-1 .5t-.6 1q-.3 1.2-.3 3.5t.3 3.5q.1.5.6.9t1 .5q1.8.2 5.5.2t5.5-.2q.6-.1 1-.5t.6-.9q.3-1.2.3-3.5zM9.3 7l1.2-4h-1l-.7 2.6L8.1 3H7l.3.9.3.9q.5 1.4.7 2.2v2.6h1V7zm3.8 1V6.3q0-.8-.3-1.2-.3-.5-1-.5t-1 .5q-.3.4-.3 1.2V8q0 .8.3 1.2.3.5 1 .5t1-.5q.3-.4.3-1.2zm2.4 1.6h.9V4.7h-.9v3.8q-.2.4-.5.4-.2 0-.2-.2v-4h-.9v4.6q.2.4.6.4.5 0 1-.6v.5zm6.8-4v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;