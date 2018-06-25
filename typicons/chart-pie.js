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
      _react2.default.createElement('path', { d: 'M11.6 14l4.9 4.9c.4.4 1 .4 1.3-.1.9-1.4 1.4-3 1.4-4.8 0-2.1-.7-4.1-2-5.6L11.6 14zm-2.6.4V7c-3.4.5-6 3.4-6 7 0 3.9 3.1 7 7 7 1.6 0 3-.5 4.2-1.4L9 14.4zm7.3-8.2c.4-.4.4-1-.1-1.3C15 4 13.5 3.4 12 3.1c-.6-.1-1 .3-1 .9v7.6l5.3-5.4z' })
    )
  );
};

exports.default = Icon;