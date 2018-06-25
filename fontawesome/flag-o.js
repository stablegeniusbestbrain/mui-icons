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
      _react2.default.createElement('path', { d: 'M22.3 14V5.7Q20 7 18.2 7q-1.1 0-2-.5-1.3-.6-2.4-1t-2.4-.4Q9.1 5.1 6 6.8v8.1q3.3-1.5 5.8-1.5.7 0 1.4.1t1.3.3 1 .4 1.1.5l.4.2q.6.3 1.4.3 1.6 0 3.9-1.2zM4.3 3.4q0 .5-.2.9t-.7.6v17q0 .1-.1.3t-.3.1h-.9q-.1 0-.3-.1t-.1-.3v-17q-.4-.2-.6-.6t-.2-.9q0-.7.5-1.2t1.2-.5 1.2.5.5 1.2zm19.7.9v10.2q0 .5-.5.8-.1 0-.2.1-2.9 1.5-4.9 1.5-1.2 0-2.2-.4l-.3-.2q-.9-.5-1.4-.7t-1.2-.3-1.5-.2q-1.4 0-3.2.6t-3 1.3q-.2.1-.5.1-.2 0-.4-.1-.4-.2-.4-.7v-10q0-.4.4-.7.5-.3 1.1-.6t1.5-.7 2-.6 2.1-.3q1.5 0 2.8.4T17 5q.5.3 1.2.3 1.6 0 4.1-1.5.3-.2.5-.3.4-.2.8 0 .4.3.4.8z' })
    )
  );
};

exports.default = Icon;