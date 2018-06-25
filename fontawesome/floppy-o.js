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
      _react2.default.createElement('path', { d: 'M6.9 20.6h10.2v-5.2H6.9v5.2zm12 0h1.7v-12q0-.2-.2-.5t-.2-.5l-3.8-3.8q-.1-.1-.4-.2t-.6-.2V9q0 .5-.3.9t-1 .4H6.4q-.5 0-.9-.4T5.1 9V3.4H3.4v17.2h1.7V15q0-.5.4-.9t.9-.4h11.2q.5 0 .9.4t.4.9v5.6zM13.7 8.1V3.9q0-.2-.1-.3t-.3-.2h-2.6q-.2 0-.3.2t-.1.3v4.2q0 .2.1.3t.3.2h2.6q.2 0 .3-.2t.1-.3zm8.6.5V21q0 .5-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V3q0-.5.4-.9t.9-.4h12.4q.6 0 1.2.3t1 .6l3.8 3.8q.3.4.6 1t.3 1.2z' })
    )
  );
};

exports.default = Icon;