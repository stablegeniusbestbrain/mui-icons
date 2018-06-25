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
      _react2.default.createElement('path', { d: 'M18.9 16q0-.2-.1-.2 0-.1-.5-.4t-1.2-.7l-.7-.4-.2-.2q-.2-.2-.4-.2t-.3 0q-.2 0-.6.4t-.7.9-.6.4h-.3q-.2 0-.2-.1t-.2-.1-.2-.1q-1.3-.8-2.3-1.7t-1.7-2.3q0-.1-.1-.2t-.1-.2-.1-.2 0-.3q0-.1.2-.4t.6-.5.7-.6.2-.4v-.3q0-.1-.2-.4t-.2-.2q-.1-.1-.2-.4t-.4-.6-.3-.6-.3-.6-.3-.2-.2-.1q-.6 0-1.3.3-.6.3-1.1 1.3t-.5 1.8q0 .2.1.4t0 .4.2.5.1.4.2.4.1.4q.8 2.2 2.9 4.3t4.3 2.9q.1 0 .4.1t.4.2.4.1.5.2.4 0 .4.1q.8 0 1.8-.5t1.3-1.1q.3-.7.3-1.3zm3.4-10.4v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;