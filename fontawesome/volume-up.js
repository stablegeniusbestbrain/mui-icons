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
      _react2.default.createElement('path', { d: 'M11.1 4.7v14.6q0 .3-.2.6t-.6.2-.6-.2l-4.5-4.5H1.7q-.3 0-.6-.2t-.2-.6V9.4q0-.3.2-.6t.6-.2h3.5l4.5-4.5q.2-.2.6-.2t.6.2.2.6zm5.2 7.3q0 1-.6 1.9t-1.5 1.2q-.1.1-.3.1-.4 0-.6-.2t-.3-.6q0-.3.2-.5t.4-.4.4-.3.4-.4.2-.8-.2-.8-.4-.4-.4-.3-.4-.4-.2-.5q0-.3.3-.6t.6-.2q.2 0 .3.1.9.3 1.5 1.2t.6 1.9zm3.4 0q0 2-1.1 3.8t-3 2.5q-.2.1-.4.1-.3 0-.6-.3t-.2-.6q0-.5.5-.8.7-.4 1-.6 1-.7 1.5-1.8T18 12t-.6-2.3-1.5-1.8q-.3-.2-1-.6-.5-.3-.5-.8 0-.4.2-.6t.6-.3q.2 0 .4.1 1.8.8 3 2.5t1.1 3.8zm3.4 0q0 3.1-1.7 5.7t-4.5 3.8h-.3q-.4 0-.6-.2t-.3-.6q0-.5.5-.8.1-.1.3-.2t.3-.1q.7-.3 1.1-.7 1.7-1.2 2.6-3t.9-3.9-.9-3.9-2.6-3q-.4-.4-1.1-.7-.1 0-.3-.1t-.3-.2q-.5-.3-.5-.8 0-.3.3-.6t.6-.2h.3q2.8 1.3 4.5 3.8t1.7 5.7z' })
    )
  );
};

exports.default = Icon;