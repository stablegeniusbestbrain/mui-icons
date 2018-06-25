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
      _react2.default.createElement('path', { d: 'M22.5 17.8L20.3 20q-.2.3-.6.3t-.6-.3L12 12.9 4.9 20q-.3.3-.6.3t-.6-.3l-2.2-2.2q-.3-.2-.3-.6t.3-.6l9.9-9.9q.3-.3.6-.3t.6.3l9.9 9.9q.3.3.3.6t-.3.6z' })
    )
  );
};

exports.default = Icon;