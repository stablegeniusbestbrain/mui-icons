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
      _react2.default.createElement('path', { d: 'M14.1 18.2V8.6H9.9v9.6q0 .3.2.5t.6.2h2.6q.4 0 .6-.2t.2-.5zM8 6.9h2.6L9 4.7q-.4-.4-1-.4-.5 0-.9.4t-.3.9.3.9.9.4zm9.3-1.3q0-.6-.4-.9t-.9-.4q-.6 0-1 .4l-1.6 2.2H16q.5 0 .9-.4t.3-.9zm5 3.4v4.3q0 .2-.1.3t-.3.1h-1.3v5.6q0 .5-.4.9t-.9.4H4.7q-.5 0-.9-.4t-.4-.9v-5.6H2.1q-.1 0-.3-.1t-.1-.3V9q0-.2.1-.3t.3-.1H8q-1.2 0-2.1-.9T5 5.6t.9-2.2T8 2.6q1.5 0 2.3 1L12 5.8l1.7-2.2q.8-1 2.3-1 1.2 0 2.1.8t.9 2.2-.9 2.1-2.1.9h5.9q.1 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;