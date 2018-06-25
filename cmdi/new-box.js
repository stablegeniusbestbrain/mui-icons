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
      _react2.default.createElement('path', { d: 'M20 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16zM8.5 15V9H7.3v3.5L4.8 9H3.5v6h1.3v-3.5L7.3 15h1.2zm5-4.7V9h-4v6h4v-1.2H11v-1.2h2.5v-1.2H11v-1.1h2.5zm7 3.7V9h-1.2v4.5h-1.2V10h-1.2v3.5h-1.1V9h-1.3v5c0 .6.4 1 1 1h4c.6 0 1-.4 1-1z' })
    )
  );
};

exports.default = Icon;