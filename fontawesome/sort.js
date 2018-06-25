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
      _react2.default.createElement('path', { d: 'M18.9 14.6q0 .3-.3.6l-6 6q-.3.2-.6.2t-.6-.2l-6-6q-.3-.3-.3-.6t.3-.6.6-.3h12q.3 0 .6.3t.3.6zm0-5.2q0 .4-.3.6t-.6.3H6q-.3 0-.6-.3t-.3-.6.3-.6l6-6q.3-.2.6-.2t.6.2l6 6q.3.3.3.6z' })
    )
  );
};

exports.default = Icon;