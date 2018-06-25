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
      _react2.default.createElement('path', { d: 'M21.8 20.7q0 1.2-.8 2.1t-2.1.8-2-.8-.9-2.1q0-1.2.9-2t2-.9 2.1.9.8 2zM18.7 17q-1.6.2-2.6 1.4t-1 2.7q0 1 .4 1.9-1.9 1-5.1 1-1.4 0-2.7-.3t-2-.7-1.5-1-1-1.2-.6-1.1-.3-.9-.1-.5q0-.3.1-.6t.2-.7.5-.8.9-.6 1.2-.2 1.3.2.8.6.5.7.2.6.1.5q0 .4-.3 1.1.3.3 1.1.5t1.2.2l.6.1q1.5 0 2.5-.7t1-1.8q0-.4-.1-.7t-.4-.5-.7-.6-1-.6-1.2-.6-1.6-.8q-.4-.2-.6-.2Q6.9 12.6 6 12t-1.7-1.4T3.4 9t-.3-2.2q0-1.1.3-2t.9-1.9 1.5-1.5T8 .4t3-.4q1.6 0 2.9.3t2.2.9 1.5 1.3.8 1.4.3 1.4q0 .6-.2 1.1t-.5.8-.7.5-.6.2-.5.1h-.6l-.5-.1-.6-.2-.5-.3-.5-.6-.3-1-.2-1.3q-.2-.2-.8-.3T11.1 4h-.5q-.9 0-1.5.4t-1 1-.3 1q0 .3.1.6t.3.6.7.7 1.3.7 2.1.8q1 .3 1.8.7t1.5.7 1.1.8.8.8.5.8.4.9.2.8.1.8 0 .9z' })
    )
  );
};

exports.default = Icon;