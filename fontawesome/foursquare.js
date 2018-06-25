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
      _react2.default.createElement('path', { d: 'M16.8 5.8l.5-2.6q.1-.3-.1-.5t-.5-.2H7.2q-.3 0-.5.2t-.2.5v14.7q0 .1 0 0l3.9-4.7q.4-.3.6-.4t.6-.1h3.2q.3 0 .5-.2t.2-.4q.4-1.8.5-2.6.1-.3-.1-.5t-.5-.3h-3.9q-.4 0-.7-.2t-.2-.7v-.5q0-.4.2-.7t.7-.2h4.6q.2 0 .5-.2t.2-.4zm3.1-3q-.2 1-.8 3.6t-.9 4.7-.5 2.3q0 .3-.1.5t-.2.4-.3.4-.5.3-.8.1h-3.6q-.2 0-.3.2-.1.1-5.7 6.6-.3.3-.8.4t-.6-.1q-.8-.3-.8-1.3V2q0-.7.5-1.4T6.1 0H18q1.3 0 1.7.7t.2 2.1zm0 0l-2.2 10.6q.1-.2.5-2.3t.9-4.7.8-3.6z' })
    )
  );
};

exports.default = Icon;