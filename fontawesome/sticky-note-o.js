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
      _react2.default.createElement('path', { d: 'M20.5 17.1h-3.4v3.4l.6-.3 2.5-2.5.3-.6zm-3.8-1.7h3.9v-12H3.4v17.2h12v-3.9q0-.5.4-.9t.9-.4zM22.3 3v13.7q0 .6-.3 1.2t-.6 1l-2.5 2.5q-.4.4-1 .6t-1.2.3H3q-.5 0-.9-.4t-.4-.9V3q0-.5.4-.9t.9-.4h18q.5 0 .9.4t.4.9z' })
    )
  );
};

exports.default = Icon;