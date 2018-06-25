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
      _react2.default.createElement('path', { d: 'M10.5 15h3v3h-3v-3zm6-5.2c0 3.2-3 3.7-3 3.7h-3c0-.8.7-1.5 1.5-1.5h.8c.4 0 .7-.3.7-.7V9.8c0-.5-.3-.8-.7-.8h-1.5c-.5 0-.8.3-.8.8v.7h-3C7.5 8.3 9.8 6 12 6s4.5 1.5 4.5 3.8zM12 3.4c4.7 0 8.6 3.9 8.6 8.6s-3.9 8.6-8.6 8.6A8.6 8.6 0 0 1 3.4 12c0-4.7 3.9-8.6 8.6-8.6zm0-1.9C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5z' })
    )
  );
};

exports.default = Icon;