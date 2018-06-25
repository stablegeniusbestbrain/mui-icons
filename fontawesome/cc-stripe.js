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
      _react2.default.createElement('path', { d: 'M18 12.1q0 .9-.3 1.4-.3.5-.7.5-.3 0-.6-.1v-3q.4-.4.8-.4.8 0 .8 1.6zm5.8-.5h-1.4q0-1.3.7-1.3t.7 1.3zM2.9 13.4q0-.8-.4-1.2t-1.3-.8q-.5-.1-.7-.3t-.3-.3q0-.4.5-.4.8 0 1.7.5l.3-1.5q-.9-.5-2-.5t-1.7.5q-.6.6-.6 1.5 0 .8.4 1.2t1.3.8q.6.2.8.3t.2.4q0 .4-.7.4-.4 0-.9-.2t-1-.4l-.2 1.5q.9.6 2.2.6 1.1 0 1.8-.5.6-.6.6-1.6zm4-2.9l.3-1.4H5.9V7.2l-1.8.3-.2 1.6-.6.1-.2 1.3h.8v3q0 1.1.6 1.6.5.4 1.5.4.4 0 1-.2v-1.5h-.6q-.5 0-.5-.6v-2.7h1zm4.2.4V9h-.3q-.5 0-.8.2t-.4.6l-.2-.7H7.7v6.3h2v-4.1q.3-.5 1.1-.5.2 0 .3.1zm.5 4.5h2V9.1h-2v6.3zM20 12q0-1.6-.6-2.4-.6-.7-1.5-.7t-1.6.8l-.1-.6h-1.8v8.6l2-.3v-2.1q.5.2.9.2 1.2 0 1.8-.8.9-.8.9-2.7zm-6.3-4.6q0-.5-.3-.8t-.8-.3-.7.3-.3.8.3.7.7.3.8-.3.3-.7zm12 4.7q0-1.5-.6-2.3-.7-.9-2-.9-1.2 0-2 .9t-.7 2.4q0 1.7.8 2.5t2.2.8q1.3 0 2.1-.6l-.2-1.3q-.8.4-1.7.4-.6 0-.9-.3-.3-.2-.3-.9h3.3v-.7zm1.7-8.7v17.2q0 .7-.5 1.2t-1.2.5H-1.7q-.7 0-1.2-.5t-.5-1.2V3.4q0-.7.5-1.2t1.2-.5h27.4q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;