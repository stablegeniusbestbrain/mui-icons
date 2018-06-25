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
      _react2.default.createElement('path', { d: 'M17.1 4.7v14.6q0 .3-.2.6t-.6.2-.6-.2l-4.5-4.5H7.7q-.3 0-.6-.2t-.2-.6V9.4q0-.3.2-.6t.6-.2h3.5l4.5-4.5q.2-.2.6-.2t.6.2.2.6z' })
    )
  );
};

exports.default = Icon;