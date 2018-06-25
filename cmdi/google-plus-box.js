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
      _react2.default.createElement('path', { d: 'M20 2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16zm0 10h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1zm-11-.7V13h2.9c-.2.7-.9 2.1-2.9 2.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1 0 1.6.4 2 .7l1.4-1.2C11.5 7.5 10.4 7 9 7c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.9 0 4.8-2 4.8-4.9 0-.3 0-.5-.1-.8H9z' })
    )
  );
};

exports.default = Icon;