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
      _react2.default.createElement('path', { d: 'M11.1 13.4v-2.6Q8.7 11 6 12.4v2.5q2.7-1.3 5.1-1.5zm0-5.6V5.2Q8.8 5.3 6 6.8v2.6q2.9-1.5 5.1-1.6zM22.3 14v-2.5q-3.2 1.6-5.2 1v-3q-.2-.1-.5-.2 0-.1-.4-.2t-.5-.3-.4-.2-.5-.2-.4-.2-.5-.1-.5-.1-.5-.1-.5-.1-.6 0h-.7v3h.3q1.4 0 2.6.4t2.6 1.1q.3.1.5.2V15q.6.2 1.3.2 1.6 0 3.9-1.2zm0-5.7V5.7Q20 7 18.2 7q-.6 0-1.1-.1v2.6q2 .5 5.2-1.2zm-18-4.9q0 .5-.2.9t-.7.6v17q0 .1-.1.3t-.3.1h-.9q-.1 0-.3-.1t-.1-.3v-17q-.4-.2-.6-.6t-.2-.9q0-.7.5-1.2t1.2-.5 1.2.5.5 1.2zm19.7.9v10.2q0 .5-.5.8-.1 0-.2.1-2.9 1.5-4.9 1.5-1.2 0-2.2-.4l-.3-.2q-.9-.5-1.4-.7t-1.2-.3-1.5-.2q-1.4 0-3.2.6t-3 1.3q-.2.1-.5.1-.2 0-.4-.1-.4-.2-.4-.7v-10q0-.4.4-.7.5-.3 1.1-.6t1.5-.7 2-.6 2.1-.3q1.5 0 2.8.4T17 5q.5.3 1.2.3 1.6 0 4.1-1.5.3-.2.5-.3.4-.2.8 0 .4.3.4.8z' })
    )
  );
};

exports.default = Icon;