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
      _react2.default.createElement('path', { d: 'M24 10.3q.7 0 1.2.5t.5 1.2-.5 1.2-1.2.5h-.2l-1.5 8.9q-.1.6-.6 1t-1.1.4H3.4q-.6 0-1.1-.4t-.6-1L.2 13.7H0q-.7 0-1.2-.5t-.5-1.2.5-1.2 1.2-.5h24zM4.8 21q.3 0 .6-.3t.2-.6l-.5-5.6q0-.3-.3-.6t-.6-.2-.6.3-.2.6l.5 5.6q0 .3.2.6t.6.2h.1zm5.5-.9v-5.5q0-.4-.3-.6t-.6-.3-.6.3-.2.6v5.5q0 .4.2.6t.6.3.6-.3.3-.6zm5.1 0v-5.5q0-.4-.2-.6t-.6-.3-.6.3-.3.6v5.5q0 .4.3.6t.6.3.6-.3.2-.6zm4.7.1l.5-5.6q0-.3-.2-.6t-.6-.3-.6.2-.3.6l-.5 5.6q0 .3.2.6t.6.3h.1q.3 0 .6-.2t.2-.6zM4.7 3.9L3.4 9.4H1.6L3 3.5q.3-1.2 1.2-1.9T6.3.9h2.3q0-.4.2-.6t.6-.3h5.2q.3 0 .6.3t.2.6h2.3q1.2 0 2.1.7T21 3.5l1.4 5.9h-1.8l-1.3-5.5q-.1-.6-.6-1t-1-.3h-2.3q0 .3-.2.6t-.6.2H9.4q-.3 0-.6-.2t-.2-.6H6.3q-.6 0-1 .3t-.6 1z' })
    )
  );
};

exports.default = Icon;