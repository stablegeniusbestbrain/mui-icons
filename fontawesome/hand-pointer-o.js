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
      _react2.default.createElement('path', { d: 'M8.6 1.7q-.7 0-1.2.5t-.5 1.2v12l-2.1-2.7q-.5-.7-1.4-.7-.7 0-1.2.5t-.5 1.2q0 .6.4 1l5.1 6.9q.5.7 1.4.7h9.6q.3 0 .5-.2t.3-.5l1.3-4.9q.3-1.3.3-2.6v-2.9q0-.5-.4-.9t-.9-.4-.9.3-.4.9h-.4v-.8q0-.6-.5-1.1t-1-.4q-.6 0-1.1.4t-.4 1.1v.8h-.5V9.9q0-.7-.5-1.2t-1.2-.6q-.7 0-1.2.5t-.5 1.3v1.2h-.4V3.5q0-.7-.5-1.3t-1.2-.5zm0-1.7Q10 0 11 1t1 2.5v3q.3-.1.4-.1 1.4 0 2.3 1 .7-.3 1.4-.3 1.5 0 2.4 1.1.4-.1.8-.1 1.2 0 2.1.9t.9 2.2v2.9q0 1.6-.4 3l-1.2 5q-.2.8-.9 1.4t-1.6.5H8.6q-.8 0-1.6-.4t-1.2-1L.7 15.8q-.7-.9-.7-2.1 0-1.4 1-2.4t2.4-1q1 0 1.7.5V3.4q0-1.4 1-2.4t2.5-1zm1.7 18.9v-5.2h-.4v5.2h.4zm3.4 0v-5.2h-.4v5.2h.4zm3.4 0v-5.2h-.4v5.2h.4z' })
    )
  );
};

exports.default = Icon;