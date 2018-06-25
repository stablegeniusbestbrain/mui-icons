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
      _react2.default.createElement('path', { d: 'M21.4 5.1q.4.4.6 1t.3 1.2v15.4q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h12q.5 0 1.2.3t1 .6zm-6-3.3v5.1h5.1l-.3-.6L16 2.1l-.6-.3zm5.2 20.5V8.6H15q-.5 0-.9-.4t-.4-.9V1.7H3.4v20.6h17.2zM10 11.4q.3.1.3.4v7.3q0 .3-.3.4h-.1q-.2 0-.4-.1l-2.2-2.3H5.6q-.2 0-.3-.1t-.2-.3v-2.6q0-.1.2-.3t.3-.1h1.7l2.2-2.2q.3-.2.5-.1zm5.6 9.2q.4 0 .7-.3 1.7-2.1 1.7-4.9t-1.7-4.8q-.2-.3-.6-.4t-.6.2q-.3.3-.3.6t.1.7q1.4 1.6 1.4 3.7t-1.4 3.8q-.2.3-.1.6t.3.6q.2.2.5.2zm-2.8-2q.3 0 .6-.2 1.2-1.3 1.2-3t-1.2-2.9q-.2-.3-.6-.3t-.6.3-.3.6.3.6q.7.7.7 1.7t-.7 1.8q-.3.3-.3.6t.3.6q.3.2.6.2z' })
    )
  );
};

exports.default = Icon;