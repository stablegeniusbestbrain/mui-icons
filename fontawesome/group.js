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
      _react2.default.createElement('path', { d: 'M7.1 12q-2.2.1-3.6 1.7H1.7q-1.1 0-1.8-.5t-.8-1.6q0-4.7 1.7-4.7.1 0 .6.2t1.3.6 1.6.3q.9 0 1.8-.3-.1.5-.1.9 0 1.8 1.1 3.4zm14.3 8.5q0 1.6-.9 2.6t-2.6.9H6.1q-1.6 0-2.6-.9t-.9-2.6v-1.4q0-.7.2-1.4t.4-1.5.5-1.3.9-1.1 1.1-.7 1.5-.2q.1 0 .6.2t1 .7 1.4.6 1.8.3 1.8-.3 1.4-.6 1-.7.6-.2q.8 0 1.5.2t1.1.7.9 1.1.5 1.3.4 1.5.2 1.4 0 1.4zM7.7 3.4q0 1.4-1 2.5t-2.4 1-2.4-1-1-2.5 1-2.4 2.4-1 2.4 1 1 2.4zm9.4 5.2q0 2.1-1.5 3.6T12 13.7t-3.6-1.5-1.5-3.6 1.5-3.7T12 3.4t3.6 1.5 1.5 3.7zm7.8 3q0 1-.8 1.6t-1.8.5h-1.8q-1.4-1.6-3.6-1.7Q18 10.4 18 8.6q0-.4-.1-.9.9.3 1.8.3.8 0 1.6-.3t1.3-.6.6-.2q1.7 0 1.7 4.7zm-1.8-8.2q0 1.4-1 2.5t-2.4 1-2.4-1-1-2.5 1-2.4 2.4-1 2.4 1 1 2.4z' })
    )
  );
};

exports.default = Icon;