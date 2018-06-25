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
      _react2.default.createElement('path', { d: 'M4 15h2c1.1 0 2 .9 2 2v2h1v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2h1v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2h1v3H1v-3h1v-2c0-1.1.9-2 2-2zm7-8l4 3-4 3V7zM4 2h16c1.1 0 2 .9 2 2v9.5c-.6-.3-1.3-.5-2-.5V4H4v9c-.7 0-1.4.2-2 .5V4c0-1.1.9-2 2-2z' })
    )
  );
};

exports.default = Icon;