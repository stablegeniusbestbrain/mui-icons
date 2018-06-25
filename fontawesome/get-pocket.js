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
      _react2.default.createElement('path', { d: 'M21.4 1.7q.9 0 1.5.6t.6 1.5v7q0 2.3-.9 4.5t-2.4 3.6-3.7 2.5-4.5.9q-2.3 0-4.5-.9t-3.7-2.5-2.4-3.6-.9-4.5v-7q0-.9.6-1.5t1.5-.6h18.8zM12 16q.6 0 1.1-.5l5.4-5.2q.5-.4.5-1.1 0-.7-.4-1.1t-1.2-.5q-.6 0-1.1.4L12 12.2 7.7 8q-.5-.4-1.1-.4-.7 0-1.1.5T5 9.2q0 .7.5 1.1l5.4 5.2q.5.5 1.1.5z' })
    )
  );
};

exports.default = Icon;