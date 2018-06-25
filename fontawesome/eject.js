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
      _react2.default.createElement('path', { d: 'M1.9 13.1l9.5-9.5q.3-.3.6-.3t.6.3l9.5 9.5q.3.3.2.4t-.4.2H2.1q-.3 0-.4-.2t.2-.4zm19.5 7.5H2.6q-.4 0-.6-.3t-.3-.6v-3.4q0-.4.3-.6t.6-.3h18.8q.4 0 .6.3t.3.6v3.4q0 .4-.3.6t-.6.3z' })
    )
  );
};

exports.default = Icon;