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
      _react2.default.createElement('path', { d: 'M16.3 7.1q0 1.9-.8 3.2t-2 1.8l.6 11q0 .4-.2.6t-.6.3h-2.6q-.3 0-.6-.3t-.2-.6l.6-11q-1.3-.4-2-1.8t-.8-3.2q0-1.7.6-3.4t1.6-2.6T12 0t2.1 1.1 1.6 2.6.6 3.4z' })
    )
  );
};

exports.default = Icon;