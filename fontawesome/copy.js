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
      _react2.default.createElement('path', { d: 'M22.7 5.1q.5 0 .9.4t.4.9v16.3q0 .5-.4.9t-.9.4H9.9q-.6 0-1-.4t-.3-.9v-3.8H1.3q-.6 0-.9-.4t-.4-.9v-9q0-.6.3-1.2t.6-1L6.4.9q.4-.4 1-.6T8.6 0h5.5q.6 0 1 .4t.3.9v4.4q.9-.6 1.7-.6h5.6zM15.4 8l-4 4h4V8zM6.9 2.9l-4 4h4v-4zm2.6 8.6l4.2-4.2V1.7H8.6v5.6q0 .5-.4.9t-.9.4H1.7v8.5h6.9v-3.4q0-.5.2-1.2t.7-1zm12.8 10.8V6.9h-5.2v5.5q0 .6-.3.9t-.9.4h-5.6v8.6h12z' })
    )
  );
};

exports.default = Icon;