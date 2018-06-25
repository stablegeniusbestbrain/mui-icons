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
      _react2.default.createElement('path', { d: 'M24 11.3q0 .8-.4 1.4t-1.1 1q.2.6.2 1.3 0 2.1-1.4 3.8t-3.9 2.8-5.4 1.1-5.3-1.1-3.9-2.8T1.4 15q0-.6.1-1.3-.7-.3-1.1-.9T0 11.3q0-1.1.8-1.9t1.9-.7q1.1 0 1.9.8 2.9-2 6.9-2.2L13.1.4q0-.2.2-.3t.3-.1l4.9 1.1q.3-.5.8-.8t1-.3q.9 0 1.5.6t.5 1.4-.5 1.4-1.5.6-1.4-.6-.6-1.4l-4.4-1-1.4 6.3q4 .2 6.9 2.2.8-.8 1.9-.8 1.1 0 1.9.7t.8 1.9zM5.6 14q0 .8.6 1.4t1.4.6 1.4-.6.6-1.4-.6-1.4-1.4-.6q-.8 0-1.4.6T5.6 14zm10.8 4.8q.2-.2.2-.4t-.2-.3q-.1-.2-.3-.2t-.3.2q-.6.5-1.7.8t-2.1.3-2.1-.3-1.7-.8q-.1-.2-.3-.2t-.3.2q-.2.1-.2.3t.2.4q.5.5 1.5.9t1.7.4 1.2 0 1.2 0 1.7-.4 1.5-.9zm0-2.8q.8 0 1.4-.6t.6-1.4q0-.8-.6-1.4t-1.4-.6q-.8 0-1.4.6t-.6 1.4.6 1.4 1.4.6z' })
    )
  );
};

exports.default = Icon;