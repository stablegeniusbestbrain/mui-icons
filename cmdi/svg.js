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
      _react2.default.createElement('path', { d: 'M5.1 10.7h3.8L6.2 8.1c-1 0-1.8-.9-1.8-1.9 0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8l2.6 2.7V5.1c-.7-.7-.7-1.8 0-2.6.7-.7 1.9-.7 2.6 0 .7.8.7 1.9 0 2.6v3.8l2.6-2.7c0-1 .9-1.8 1.9-1.8s1.8.8 1.8 1.8-.8 1.9-1.8 1.9l-2.7 2.6h3.8c.7-.7 1.8-.7 2.6 0 .7.7.7 1.9 0 2.6-.8.7-1.9.7-2.6 0h-3.8l2.7 2.6c1 0 1.8.9 1.8 1.9s-.8 1.8-1.8 1.8-1.9-.8-1.9-1.8l-2.6-2.7v3.8c.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6v-3.8l-2.6 2.7c0 1-.9 1.8-1.9 1.8s-1.8-.8-1.8-1.8.8-1.9 1.8-1.9l2.7-2.6H5.1c-.7.7-1.8.7-2.6 0-.7-.7-.7-1.9 0-2.6.8-.7 1.9-.7 2.6 0z' })
    )
  );
};

exports.default = Icon;