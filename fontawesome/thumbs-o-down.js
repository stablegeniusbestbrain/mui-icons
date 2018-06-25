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
      _react2.default.createElement('path', { d: 'M5.1 6q0-.3-.2-.6t-.6-.3-.6.3-.3.6.3.6.6.3.6-.3.2-.6zm15.5 7.7q0-.5-.3-1.1t-.7-.6q.2-.2.3-.6t.1-.8q0-.9-.7-1.6.3-.4.3-.9t-.3-1-.6-.7q.1-.4.1-.7 0-1.2-.7-1.7t-1.8-.6h-1.7q-1.8 0-4.6 1-.1 0-.4.1t-.5.2-.4.2-.6.1-.4.1-.4 0h-.4v8.6h.4q.2 0 .5.1t.5.4.5.5.5.6.5.5.4.6.3.4q.8.9 1.1 1.2.5.6.8 1.5t.4 1.6.5 1.2q1.3 0 1.7-.6t.4-2q0-.8-.6-2.1t-.7-2.2h4.8q.6 0 1.1-.5t.6-1.2zm1.7 0q0 1.4-1 2.4t-2.4 1h-2.4q.6 1.4.6 2.6 0 1.6-.4 2.5-.5.9-1.4 1.4t-2 .4q-.7 0-1.2-.5-.5-.4-.7-1.1t-.4-1.2-.2-1.1-.4-.9q-.7-.7-1.5-1.7-1.3-1.7-1.8-2.1H3.4q-.7 0-1.2-.5t-.5-1.2V5.1q0-.7.5-1.2t1.2-.5h3.9q.3 0 1.8-.5 1.7-.6 3-.9t2.7-.3h1.5q1.9 0 3 1.1t1.2 2.9q.8 1.1.8 2.4 0 .3-.1.6.5.9.5 1.9 0 .5-.1.9.7 1 .7 2.2z' })
    )
  );
};

exports.default = Icon;