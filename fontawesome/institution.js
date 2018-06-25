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
      _react2.default.createElement('path', { d: 'M11.1 0L24 5.1v1.8h-1.7q0 .3-.3.6t-.6.2H.9q-.4 0-.6-.2T0 6.9h-1.7V5.1zM1.7 8.6h3.4v10.3h1.8V8.6h3.4v10.3H12V8.6h3.4v10.3h1.7V8.6h3.5v10.3h.8q.3 0 .6.2t.3.6v.9H0v-.9q0-.3.3-.6t.6-.2h.8V8.6zm21.4 12.8q.4 0 .6.3t.3.6V24H-1.7v-1.7q0-.4.3-.6t.6-.3h23.9z' })
    )
  );
};

exports.default = Icon;