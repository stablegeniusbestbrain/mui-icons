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
      _react2.default.createElement('path', { d: 'M8 2h8c-.3 3-.7 6-1.2 7.8-.6 1.9-1.5 2.5-1.9 4.3-.4 1.7-.4 4.6.2 5.9.6 1.3 1.7 1.2 2.3 1.3.6 0 .6.4.6.7H8c0-.3 0-.7.6-.7.6-.1 1.7 0 2.3-1.3.6-1.3.6-4.2.2-5.9-.4-1.8-1.3-2.4-1.8-4.3C8.7 8 8.3 5 8 2zm2 2c.1 1 .1 2.1.2 3h3.6c.1-.9.1-2 .2-3h-4z' })
    )
  );
};

exports.default = Icon;