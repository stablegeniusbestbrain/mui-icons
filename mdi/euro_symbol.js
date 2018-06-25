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
      _react2.default.createElement('path', { d: 'M15 18.5c-2.5 0-4.7-1.4-5.8-3.5H15v-2H8.6c-.1-.3-.1-.7-.1-1s0-.7.1-1H15V9H9.2c1.1-2.1 3.3-3.5 5.8-3.5 1.6 0 3.1.6 4.2 1.6L21 5.3C19.4 3.9 17.3 3 15 3c-3.9 0-7.2 2.5-8.5 6H3v2h3.1c-.1.3-.1.7-.1 1 0 .3 0 .7.1 1H3v2h3.5c1.3 3.5 4.6 6 8.5 6 2.3 0 4.4-.9 6-2.3l-1.8-1.8c-1.1 1-2.6 1.6-4.2 1.6z' })
    )
  );
};

exports.default = Icon;