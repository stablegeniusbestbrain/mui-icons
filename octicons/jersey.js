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
      _react2.default.createElement('path', { d: 'M8.3 9l-.8.8v7.5l.8.7h3l.7-.7V9.8l-.7-.8h-3zm2.2 7.5H9v-6h1.5v6zm9.4-10.9c-.3-2-.5-3.9-.4-5.6H15c0 .4-.2.7-.6 1-.3.3-.9.5-1.6.5-.8 0-1.4-.2-1.7-.5-.4-.3-.6-.6-.6-1H6c.1 1.7 0 3.6-.4 5.6C5.3 7.7 4.4 8.8 3 9v13.5c0 .4.2.7.5 1 .3.4.6.5 1 .5H21c.4 0 .7-.2 1-.5.4-.3.5-.6.5-1V9c-1.4-.2-2.3-1.3-2.6-3.4zM21 22.5H4.5v-12c1.3-.7 2.2-1.9 2.6-3.4s.4-3.3.4-5.6H9c0 1.2.2 2.2.8 3.1.5.9 1.5 1.3 3 1.4 1.5 0 2.4-.5 3-1.4.5-.9.7-1.9.7-3.1H18c0 2.1.2 3.8.5 5.1.3 1.2 1 3 2.5 3.9v12zM14.3 9l-.8.8v7.5l.8.7h3l.7-.7V9.8l-.7-.8h-3zm2.2 7.5H15v-6h1.5v6z' })
    )
  );
};

exports.default = Icon;