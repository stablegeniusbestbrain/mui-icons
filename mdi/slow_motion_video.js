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
      _react2.default.createElement('path', { d: 'M13.1 9.8L10 7.5v9l3.1-2.3L16 12zm0 0L10 7.5v9l3.1-2.3L16 12zm0 0L10 7.5v9l3.1-2.3L16 12zM11 4.1V2c-2 .3-3.8 1-5.3 2.3l1.4 1.4c1.1-.9 2.4-1.4 3.9-1.6zm-5.3 3L4.3 5.7C3 7.2 2.3 9 2 11h2.1c.2-1.5.7-2.8 1.6-3.9zM4.1 13H2c.3 2 1 3.8 2.3 5.3l1.4-1.4c-.9-1.1-1.4-2.4-1.6-3.9zm1.6 6.7c1.5 1.2 3.3 2.1 5.3 2.2v-2c-1.5-.1-2.8-.7-3.9-1.6l-1.4 1.4zM22 12c0 5.2-3.9 9.4-8.9 9.9v-2C17 19.4 20 16.1 20 12s-3-7.4-6.9-7.9V2c5 .6 8.9 4.8 8.9 10z' })
    )
  );
};

exports.default = Icon;