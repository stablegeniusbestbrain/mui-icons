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
      _react2.default.createElement('path', { d: 'M24 18v1.7q0 .4-.3.6t-.6.3H.9q-.4 0-.6-.3t-.3-.6V18q0-.3.3-.6t.6-.3h22.2q.4 0 .6.3t.3.6zm0-5.1v1.7q0 .3-.3.6t-.6.2H6q-.3 0-.6-.2t-.3-.6v-1.7q0-.4.3-.6T6 12h17.1q.4 0 .6.3t.3.6zm0-5.2v1.7q0 .4-.3.6t-.6.3H2.6q-.4 0-.6-.3t-.3-.6V7.7q0-.3.3-.6t.6-.2h20.5q.4 0 .6.2t.3.6zm0-5.1v1.7q0 .3-.3.6t-.6.2H7.7q-.3 0-.6-.2t-.2-.6V2.6q0-.4.2-.6t.6-.3h15.4q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;