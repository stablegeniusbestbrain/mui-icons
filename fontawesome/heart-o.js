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
      _react2.default.createElement('path', { d: 'M22.3 8q0-1.1-.3-1.9t-.7-1.4-1.1-.7-1.3-.5-1.3-.1-1.5.4-1.5.8-1.1 1-.8.8q-.3.3-.7.3t-.7-.3q-.3-.4-.8-.8t-1.1-1-1.5-.8-1.5-.4-1.3.1-1.3.5-1.1.7T2 6.1 1.7 8q0 2.2 2.5 4.7l7.8 7.5 7.8-7.4q2.5-2.6 2.5-4.8zM24 8q0 2.9-3.1 6l-8.3 8q-.3.3-.6.3t-.6-.3l-8.3-8q-.2-.1-.4-.4t-.8-.8-.9-1.3-.7-1.7T0 8q0-3 1.7-4.6t4.7-1.7q.8 0 1.7.3t1.6.8 1.3.9 1 .9q.5-.5 1-.9t1.3-.9 1.6-.8 1.7-.3q3 0 4.7 1.7T24 8z' })
    )
  );
};

exports.default = Icon;