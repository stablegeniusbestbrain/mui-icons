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
      _react2.default.createElement('path', { d: 'M11 6h5v2h-5V6zM8 9V3h11v6c1.7 0 3 1.3 3 3v6h-3v3H8v-3H7V9h1zm2-4v4h7V5h-7zm0 10v4h7v-4h-7zm9-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zM4 9h1c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2z' })
    )
  );
};

exports.default = Icon;