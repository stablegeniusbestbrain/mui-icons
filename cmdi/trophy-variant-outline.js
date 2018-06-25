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
      _react2.default.createElement('path', { d: 'M7 2v2H2v7c0 1 1 2 2 2h3.2c.4 1.9 1.4 3.6 3.8 3.9V19c-3 .2-3 1.3-3 2.6v.4h8v-.3c0-1.3 0-2.4-3-2.6V17c2.5-.3 3.5-2 3.8-3.9H20c1 0 2-1 2-2V4h-5V2H7zm2 2h6v8c0 1.7-1 3-3 3s-3-1.3-3-3V4zM4 6h3v5H4V6zm13 0h3v5h-3V6z' })
    )
  );
};

exports.default = Icon;