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
      _react2.default.createElement('path', { d: 'M19.7 9.4v1.7q0 3-2 5.2t-4.8 2.5v1.8h3.4q.3 0 .6.2t.2.6-.2.6-.6.3H7.7q-.3 0-.6-.3t-.2-.6.2-.6.6-.2h3.4v-1.8q-2.9-.3-4.8-2.5t-2-5.2V9.4q0-.3.2-.6t.6-.2.6.2.3.6v1.7q0 2.5 1.8 4.3t4.2 1.7 4.2-1.7 1.8-4.3V9.4q0-.3.3-.6t.6-.2.6.2.2.6zm-3.4-5.1v6.8q0 1.8-1.3 3.1t-3 1.2-3-1.2-1.3-3.1V4.3q0-1.8 1.3-3T12 0t3 1.3 1.3 3z' })
    )
  );
};

exports.default = Icon;