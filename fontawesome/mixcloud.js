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
      _react2.default.createElement('path', { d: 'M18.6 14.7q0-.8-.5-1.4t-1.1-.9q-.1.6-.3 1.2-.1.3-.4.5t-.6.2h-.3q-.4-.2-.6-.6t-.1-.7q.3-1 .3-2 0-1.6-.8-3T12 5.8 8.9 5q-1.7 0-3.3.9T3.4 8.5q1.4.4 2.5 1.5.3.3.3.7t-.3.7-.7.3-.7-.3q-1-1-2.5-1-1.4 0-2.4 1t-1 2.4 1 2.4 2.4 1h14.1q1 0 1.8-.7t.7-1.8zm2.1 0q0 1.9-1.4 3.2t-3.2 1.4H2q-2.2 0-3.8-1.6t-1.6-3.9q0-2 1.3-3.6t3.3-1.8q.9-2.4 3-4t4.7-1.5q3.2 0 5.5 2.1t2.6 5.2q1.6.4 2.6 1.6t1.1 2.9zm3.3 0q0 2.3-1.3 4.3-.3.4-.9.4-.3 0-.5-.2-.4-.2-.5-.6t.2-.8q1-1.4 1-3.1t-1-3.1q-.2-.4-.2-.8t.5-.6.7-.2.7.4q1.3 1.9 1.3 4.3zm3.4 0q0 3.3-1.8 5.9-.3.5-.8.5-.3 0-.6-.2t-.4-.6.1-.8q1.5-2.2 1.5-4.8 0-2.6-1.5-4.8-.2-.3-.1-.7t.4-.7q.4-.2.8-.2t.6.5q1.8 2.6 1.8 5.9z' })
    )
  );
};

exports.default = Icon;