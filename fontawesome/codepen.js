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
      _react2.default.createElement('path', { d: 'M2.9 15.7L11 21v-4.8l-4.5-3zm-.8-2L4.6 12l-2.5-1.7v3.4zM13 21l8.1-5.3-3.6-2.5-4.5 3V21zm-1-6.6l3.6-2.4L12 9.6 8.4 12zm-5.5-3.6l4.5-3V3L2.9 8.3zM19.4 12l2.5 1.7v-3.4zm-1.9-1.2l3.6-2.5L13 3v4.8zM24 8.3v7.4q0 .5-.5.8l-10.9 7.3q-.3.2-.6.2t-.6-.2L.5 16.5q-.5-.3-.5-.8V8.3q0-.5.5-.8L11.4.2q.3-.2.6-.2t.6.2l10.9 7.3q.5.3.5.8z' })
    )
  );
};

exports.default = Icon;