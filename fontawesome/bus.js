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
      _react2.default.createElement('path', { d: 'M6.9 16.3q0-.7-.5-1.2t-1.3-.5-1.2.5-.5 1.2.5 1.2 1.2.5 1.3-.5.5-1.2zm13.7 0q0-.7-.5-1.2t-1.2-.5-1.3.5-.5 1.2.5 1.2 1.3.5 1.2-.5.5-1.2zM20 11l-1-5.2q-.1-.3-.3-.5t-.6-.2H5.9q-.4 0-.6.2t-.3.5L4 11q0 .4.2.7t.7.3h14.2q.4 0 .7-.3t.2-.7zm-3.1-8.2q0-.3-.2-.5t-.4-.2H7.7q-.3 0-.4.2t-.2.5.2.4.4.2h8.6q.3 0 .4-.2t.2-.4zm5.4 9.7v8.1h-1.7v1.7q0 .7-.5 1.2t-1.2.5-1.3-.5-.5-1.2v-1.7H6.9v1.7q0 .7-.5 1.2t-1.3.5-1.2-.5-.5-1.2v-1.7H1.7v-8.1q0-1.5.3-3l1.4-6.1q.1-1 1.3-1.8T7.8.4 12 0t4.2.4 3.1 1.2 1.3 1.8L22 9.5q.3 1.4.3 3z' })
    )
  );
};

exports.default = Icon;