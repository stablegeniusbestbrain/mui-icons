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
      _react2.default.createElement('path', { d: 'M6.1 13c-.5 0-1 .4-1 1s.5 1 1 1h1.5l-3.3 3.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l3.4-3.4V18c0 .6.5 1 1 1s.9-.4.9-1v-5H6.1zm.9-2c.6 0 1-.4 1-1V8h2c.6 0 1-.4 1-1s-.4-1-1-1H6v4c0 .6.4 1 1 1zm10 2c-.6 0-1 .4-1 1v2h-2c-.6 0-1 .4-1 1s.4 1 1 1h4v-4c0-.6-.4-1-1-1zm1.3-8.7L15 7.6V6c0-.6-.4-1-1-1s-1 .4-1 1v5h5c.6 0 1-.4 1-1s-.4-1-1-1h-1.6l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0z' })
    )
  );
};

exports.default = Icon;