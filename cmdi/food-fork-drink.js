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
      _react2.default.createElement('path', { d: 'M3 3c-.6 0-1 .4-1 1v5.5c0 1.7 1 3.1 2.5 3.7v6.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.3c1.5-.6 2.5-2 2.5-3.7V4c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .3-.2.5-.5.5S7 8.3 7 8V4c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .3-.2.5-.5.5S4 8.3 4 8V4c0-.6-.4-1-1-1zm16.9 0c-.2 0-.3.1-.4.2L16 5.3V9h-4v2h1l1 10h6l1-10h1V9h-4V6.3l2.5-1.5c.5-.2.6-.8.3-1.3-.2-.4-.5-.6-.9-.5z' })
    )
  );
};

exports.default = Icon;