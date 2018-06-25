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
      _react2.default.createElement('path', { d: 'M4.4 20.9c-.6-.2-1.1-.7-1.3-1.3L19.6 3.1c.6.2 1.1.7 1.3 1.3L4.4 20.9zM20 16v2h-7v-2h7zM3 6h3V3h2v3h3v2H8v3H6V8H3V6z' })
    )
  );
};

exports.default = Icon;