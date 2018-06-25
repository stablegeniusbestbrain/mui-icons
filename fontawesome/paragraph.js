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
      _react2.default.createElement('path', { d: 'M20.5 2.5v1q0 .4-.2.8t-.6.5H19q-.3 0-.4.4-.1.1-.1.8v15.5q0 .3-.2.5t-.6.3h-1.4q-.4 0-.6-.3t-.2-.5V5.2h-2v16.3q0 .3-.2.5t-.6.3h-1.4q-.4 0-.6-.3t-.2-.5v-6.7q-2-.1-3.3-.8-1.7-.7-2.6-2.4-.9-1.5-.9-3.4 0-2.3 1.2-3.9 1.2-1.5 2.8-2.1 1.5-.5 5.6-.5h6.4q.4 0 .6.3t.2.5z' })
    )
  );
};

exports.default = Icon;