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
      _react2.default.createElement('path', { d: 'M7 3v2h10V3H7zm2 4v2h6V7H9zM2 8v8l4-4-4-4zm20 0l-4 4 4 4V8zM7 11v2h10v-2H7zm2 4v2h6v-2H9zm-2 4v2h10v-2H7z' })
    )
  );
};

exports.default = Icon;