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
      _react2.default.createElement('path', { d: 'M21.3 14.8q-.4 1-1 1.8t-1.2 1.2-1.3.6-1.4.2-1.3-.1-1.1-.3-1-.4-.6-.3l-.2-.1q-1.5 3.1-3.9 4.8T3.2 24q-.3 0-.5-.2t-.1-.4.1-.4.5-.2q2.3 0 4.3-1.4t3.4-4q-.5.2-1 .3t-1.1.2-1.2 0-1.3-.4-1.2-.8T4 15.4t-1-2q1.5-.6 2.8-.8t2.3.1 1.6.8 1.2 1 .8 1.1q.7-1.7 1-3.9-.1 0-.2.1t-.6 0-1 0-1-.1-1.2-.3-1.2-.6-1-.9-.7-1.3-.4-1.7q1-.3 1.8-.5t1.5.1 1.3.4.9.6.8.9.5.8.4.7.2.6l.1.2q.1-1.6.1-2.6l-.2-.2q-.1-.1-.7-.6t-.8-1-.8-1.2-.4-1.5.1-1.7 1-1.9q1 .3 1.7.8t1.1 1 .7 1.2.2 1.2 0 1.1-.1 1-.3.9-.2.5l-.1.2v1.7q0-.1.1-.3t.4-.5.7-.8 1-.8 1.2-.6 1.5-.2 1.8.4q-.1 1-.3 1.9t-.7 1.4-.9.9-1.1.6-1.2.3-1 .2-.9 0-.7-.1h-.2q-.3 1.9-1 3.7.1 0 .3-.2t.6-.5 1.1-.8 1.3-.5 1.6-.3 1.7.3 1.8 1.1z' })
    )
  );
};

exports.default = Icon;