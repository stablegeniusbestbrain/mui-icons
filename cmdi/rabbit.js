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
      _react2.default.createElement('path', { d: 'M22 17.5c0 .8-.7 1.5-1.5 1.5-.6 0-1.1-.3-1.3-.8-.5 1-.6 2-.4 2.7C19 22 18 22 18 22h-8c-1 0-2 0-2.2-.5-.1-.5.5-1.5 2.2-2l.9-.2C5.8 15.8 12 14 12 14c-2-1-4 .3-4 1.3 0 2 .5 2.7.3 3C7 20 6 22 6 22H3.5C3 19 6 21 6 19c0-1 1.3-2.1.5-3.5-.9-1.4-.6-2.7-.2-3.5-.9-.1-2.6-.3-3.3-1-1-1 2-5 4-5 .7 0 1.1.1 1.5.3L9.7 3c.2-.6.7-.8 1.3-.7.5.2.8.8.6 1.3l-.8 2.2 2-1.2c.5-.2 1.1-.1 1.4.4.3.5.1 1.1-.4 1.4l-3.4 2 .6.6c2 2 4.6 0 6.5 1.3 3.9 2.5 3.8 4.6 3.2 5.7.8.1 1.3.8 1.3 1.5zM5.7 7.9c-.4.3-.8.9-.4 1.3.3.5 1.1.5 1.5.1.5-.3.4-.7.1-1.2-.3-.5-.7-.5-1.2-.2z' })
    )
  );
};

exports.default = Icon;