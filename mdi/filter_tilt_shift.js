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
      _react2.default.createElement('path', { d: 'M11 4.1V2c-2 .3-3.8 1-5.3 2.3l1.4 1.4c1.1-.9 2.4-1.4 3.9-1.6zm7.3.2C16.8 3 15 2.3 13 2v2.1c1.5.2 2.8.7 3.9 1.6l1.4-1.4zm1.6 6.7h2c-.1-2-1-3.8-2.2-5.3l-1.4 1.4c.9 1.1 1.5 2.4 1.6 3.9zM5.7 7.1L4.3 5.7C3 7.2 2.3 9 2 11h2.1c.2-1.5.7-2.8 1.6-3.9zM4.1 13H2c.3 2 1 3.8 2.3 5.3l1.4-1.4c-.9-1.1-1.4-2.4-1.6-3.9zM15 12c0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3 3-1.3 3-3zm3.3 4.9l1.4 1.4c1.2-1.5 2.1-3.3 2.2-5.3h-2c-.1 1.5-.7 2.8-1.6 3.9zm-5.3 3v2c2-.1 3.8-1 5.3-2.2l-1.4-1.4c-1.1.9-2.4 1.5-3.9 1.6zm-7.3-.2c1.5 1.2 3.3 2.1 5.3 2.2v-2c-1.5-.1-2.8-.7-3.9-1.6l-1.4 1.4z' })
    )
  );
};

exports.default = Icon;