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
      _react2.default.createElement('path', { d: 'M19.7 13.2v3.5q0 1.6-1.1 2.7t-2.7 1.2H4.7q-1.6 0-2.7-1.2T.9 16.7V5.6Q.9 4 2 2.8t2.7-1.1h3.4q.2 0 .3.1t.2.3q0 .4-.4.5-1 .3-1.8.8H4.7q-.9 0-1.5.7t-.6 1.5v11.1q0 .9.6 1.5t1.5.7h11.2q.8 0 1.5-.7t.6-1.5v-2.9q0-.2.2-.3.4-.2.8-.5.2-.3.4-.1.3.1.3.3zm3.2-6.6l-5.2 5.1q-.2.3-.6.3-.1 0-.3-.1-.5-.2-.5-.8V8.6h-2.2q-4.3 0-5.8 1.7-1.6 1.9-1 6.4 0 .3-.3.4h-.1q-.3 0-.4-.1-.1-.2-.3-.4t-.5-1-.7-1.3-.5-1.5-.2-1.7V9.9q0-.6.2-1.2t.4-1.2.6-1.1.9-.9 1.3-.9T9.4 4t2.1-.4 2.6-.2h2.2V.9q0-.6.5-.8.2-.1.3-.1.4 0 .6.3l5.2 5.1q.2.3.2.6t-.2.6z' })
    )
  );
};

exports.default = Icon;