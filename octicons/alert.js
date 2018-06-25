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
      _react2.default.createElement('path', { d: 'M13.3 2.3c-.3-.5-.8-.8-1.3-.8s-1 .3-1.3.8L.4 20.3c-.3.4-.3 1 0 1.5.3.4.8.7 1.3.7h20.6c.5 0 1-.3 1.3-.7.2-.5.2-1.1 0-1.5l-10.3-18zm.2 17.2h-3v-3h3v3zm0-4.5h-3V9h3v6z' })
    )
  );
};

exports.default = Icon;