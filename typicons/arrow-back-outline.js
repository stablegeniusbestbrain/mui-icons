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
      _react2.default.createElement('path', { d: 'M19.2 19.5c-1.7-2.5-3.7-3.2-6.2-3.4v1.4c0 .5-.2 1-.6 1.4-.7.8-2.1.8-2.8 0l-6.3-6.2c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7l6.3-6.2c.7-.8 2.1-.8 2.8 0 .4.4.6.9.6 1.4v1.7c4.6.9 8 5 8 9.8v1c0 .4-.3.8-.7 1H20c-.3 0-.6-.2-.8-.5zM12 14c2.2.1 4.7.4 6.8 2.1-.8-3.2-3.5-5.7-6.9-6-.5-.1-.9-.1-.9-.1V6.5L5.4 12l5.6 5.5V14h1z' })
    )
  );
};

exports.default = Icon;