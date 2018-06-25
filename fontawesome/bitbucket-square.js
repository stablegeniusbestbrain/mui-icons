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
      _react2.default.createElement('path', { d: 'M13.1 11.7q0-.6-.6-.9t-1 0q-.6.2-.6.9t.6 1q.5.3 1.1-.1t.5-.9zm1-.3q.2.9-.4 1.7t-1.5.8-1.6-.6-.8-1.5q0-.6.4-1.2t1-.9q.9-.4 1.9.2t1 1.5zm2.3-5.2q-.2.3-.7.5t-.7.2-.8.1q-2.1.2-4.4 0-.6-.1-.8-.1t-.7-.3-.7-.4q.1-.3.4-.4t.6-.2.6-.1q2.7-.5 5.5 0 .4 0 .6.1t.6.2.5.4zm.6 10q0-.1.1-.4t0-.4-.2-.2q-2.2 1.4-4.9 1.4t-4.9-1.4l-.2.1v.1q.3 2.1.5 2.8.6 1.1 2.8 1.5 3.3.6 5.7-.7.4-.3.6-.7t.3-1.2.2-.9zm1.7-9.3q.2-.7-.1-1-.5-.7-2-1.2-2.9-.8-6.6-.5-1.7.2-3 .7-.5.2-.8.3t-.6.5-.4.7q.1.9.3 1.8t.3 2.3.4 1.8v.5q0 .4.1.4t.2.4.3.4q1.4 1.1 3.8 1.3 3.4.4 5.9-.8.3-.2.5-.3t.4-.4.3-.6q.6-3.5 1.1-6.3zm3.6-1.3v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;