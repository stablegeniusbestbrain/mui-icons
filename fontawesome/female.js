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
      _react2.default.createElement('path', { d: 'M20.6 14.1q0 .6-.4 1t-.9.3q-.7 0-1.1-.5l-3-4.6h-.6v1.8l3.3 5.5q.1.2.1.4 0 .3-.3.6t-.6.3h-2.5v3.6q0 .6-.5 1.1t-1 .4h-2.2q-.6 0-1-.4t-.5-1.1v-3.6H6.9q-.4 0-.6-.3T6 18q0-.2.1-.4l3.3-5.5v-1.8h-.6l-3 4.6q-.4.5-1.1.5-.5 0-.9-.3t-.4-1q0-.3.2-.7l3.5-5.1Q8 6.9 9.4 6.9h5.2q1.4 0 2.3 1.4l3.5 5.1q.2.4.2.7zM15 3.4q0 1.3-.9 2.2t-2.1.8-2.1-.8T9 3.4t.9-2.1T12 .4t2.1.9.9 2.1z' })
    )
  );
};

exports.default = Icon;