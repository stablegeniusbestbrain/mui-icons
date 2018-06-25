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
      _react2.default.createElement('path', { d: 'M24 12q0 .3-.3.6L20.3 16q-.2.3-.6.3t-.6-.3-.2-.6v-1.7H5.1v1.7q0 .4-.2.6t-.6.3-.6-.3L.3 12.6Q0 12.3 0 12t.3-.6L3.7 8q.2-.3.6-.3t.6.3.2.6v1.7h13.8V8.6q0-.4.2-.6t.6-.3.6.3l3.4 3.4q.3.3.3.6z' })
    )
  );
};

exports.default = Icon;