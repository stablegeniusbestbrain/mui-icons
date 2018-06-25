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
      _react2.default.createElement('path', { d: 'M18 19.7q0-.3-.3-.6t-.6-.2-.6.2-.2.6.2.6.6.3.6-.3.3-.6zm3.4 0q0-.3-.2-.6t-.6-.2-.6.2-.3.6.3.6.6.3.6-.3.2-.6zm1.7-3V21q0 .5-.3.9t-.9.4H2.1q-.5 0-.9-.4T.9 21v-4.3q0-.5.3-.9t.9-.4h5.8q.2.8.9 1.3t1.5.4h3.4q.8 0 1.5-.4t.9-1.3h5.8q.5 0 .9.4t.3.9zM18.8 8q-.2.6-.8.6h-3.4v6q0 .3-.3.6t-.6.2h-3.4q-.4 0-.6-.2t-.3-.6v-6H6q-.6 0-.8-.6-.2-.5.2-.9l6-6q.2-.2.6-.2t.6.2l6 6q.4.4.2.9z' })
    )
  );
};

exports.default = Icon;