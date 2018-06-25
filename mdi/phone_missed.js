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
      _react2.default.createElement('path', { d: 'M6.5 5.5L12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5zm17.2 11.2c-3-2.9-7.2-4.7-11.7-4.7-4.5 0-8.7 1.8-11.7 4.7-.2.2-.3.4-.3.7s.1.5.3.7l2.5 2.5c.2.2.4.3.7.3.3 0 .5-.1.7-.3.8-.8 1.7-1.4 2.6-1.9.4-.1.6-.5.6-.9v-3.1c1.4-.4 3-.7 4.6-.7 1.6 0 3.2.3 4.6.7v3.1c0 .4.2.8.6.9.9.5 1.8 1.1 2.6 1.9.2.2.5.3.7.3.3 0 .6-.2.7-.3l2.5-2.5c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z' })
    )
  );
};

exports.default = Icon;