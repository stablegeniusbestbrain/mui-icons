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
      _react2.default.createElement('path', { d: 'M22.2 9.2c0-3.9-3.2-7-7-7s-7 3.1-7 7c0 3.4 2.5 6.3 5.8 6.9V20H6v-3h1v-4c0-.6-.5-1-1-1H3c-.5 0-1 .4-1 1v4h1v5h16v-2h-3v-3.9c3.5-.4 6.2-3.3 6.2-6.9zM4.5 11c.8 0 1.5-.7 1.5-1.5S5.3 8 4.5 8 3 8.7 3 9.5 3.7 11 4.5 11z' })
    )
  );
};

exports.default = Icon;