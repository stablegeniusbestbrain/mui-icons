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
      _react2.default.createElement('path', { d: 'M6.2 12.7L4.8 14q-.5-1.4-.5-2.9V9.4q0-.3.2-.6t.6-.2.6.2.3.6v1.7q0 .8.2 1.6zm14.9-8.1l-4.8 4.8v1.7q0 1.8-1.3 3.1t-3 1.2q-.7 0-1.5-.2l-1.2 1.3q1.3.6 2.7.6 2.5 0 4.2-1.7t1.8-4.3V9.4q0-.3.3-.6t.6-.2.6.2.2.6v1.7q0 3-2 5.2t-4.8 2.5v1.8h3.4q.3 0 .6.2t.2.6-.2.6-.6.3H7.7q-.3 0-.6-.3t-.2-.6.2-.6.6-.2h3.4v-1.8q-1.6-.2-3.1-1.1l-3.4 3.4q-.1.2-.3.2t-.3-.2L2.9 20q-.2-.1-.2-.3t.2-.3L19.4 2.9q.1-.2.3-.2t.3.2L21.1 4q.2.1.2.3t-.2.3zM16 2.8l-8.3 8.3V4.3q0-1.8 1.3-3T12 0q1.4 0 2.5.8t1.5 2z' })
    )
  );
};

exports.default = Icon;