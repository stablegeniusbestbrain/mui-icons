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
      _react2.default.createElement('path', { d: 'M4.3 3.4q0 1-.9 1.5v17q0 .1-.1.3t-.3.1h-.9q-.1 0-.3-.1t-.1-.3v-17Q.9 4.4.9 3.4q0-.7.5-1.2t1.2-.5 1.2.5.5 1.2zm19.7.9v10.2q0 .3-.2.5t-.5.4q-2.9 1.5-4.9 1.5-.9 0-1.7-.3t-1.4-.6-1.6-.6-1.9-.3q-2.6 0-6.2 1.9-.2.1-.5.1t-.6-.2-.2-.6v-10q0-.4.4-.7.3-.2 1.1-.6 3.1-1.6 5.6-1.6 1.4 0 2.7.4T17 5q.5.3 1.2.3t1.6-.3 1.4-.7 1.2-.6.7-.3q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;