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
      _react2.default.createElement('path', { d: 'M5.1 18q0-.3-.2-.6t-.6-.3-.6.3-.3.6.3.6.6.3.6-.3.2-.6zm15.5-7.7q0-.7-.6-1.2t-1.1-.5h-4.8q0-.8.7-2.2t.6-2.1q0-1.3-.4-2t-1.7-.6q-.4.4-.5 1.2t-.4 1.6-.8 1.5q-.3.3-1.1 1.2 0 .1-.3.4t-.4.6-.5.5-.5.6-.5.5-.5.4-.5.1h-.4v8.6h.8q.2 0 .4.1t.6.1.4.2.5.2.4.1q2.8 1 4.6 1h1.6q2.6 0 2.6-2.3 0-.3-.1-.7.4-.2.6-.7t.3-1-.3-.9q.7-.7.7-1.6 0-.4-.1-.8t-.3-.6q.4 0 .7-.6t.3-1.1zm1.7 0q0 1.2-.7 2.2.2.4.2.9 0 1-.6 1.9.1.3.1.6 0 1.3-.8 2.4 0 1.8-1.2 2.9t-3 1.1h-1.7q-1.3 0-2.6-.3t-2.9-.9q-1.5-.5-1.8-.5H3.4q-.7 0-1.2-.5t-.5-1.2v-8.6q0-.7.5-1.2t1.2-.5h3.7q.5-.3 1.8-2.1.8-1 1.5-1.7.3-.4.4-1.2t.5-1.7.8-1.4q.5-.5 1.2-.5 1.1 0 2 .4t1.4 1.4.4 2.5q0 1.2-.6 2.6h2.4q1.4 0 2.4 1t1 2.4z' })
    )
  );
};

exports.default = Icon;