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
      _react2.default.createElement('path', { d: 'M10.5 18c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zm3 0c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zM10 11c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 7c0 2.2-2.7 4-6 4s-6-1.8-6-4c0-.9.4-1.7 1.2-2.4-.8-1-1.2-2.3-1.2-3.6l.1-1.2c-.5.1-1.2.1-1.7 0-1-.3-2.6-1.5-2.3-2.3.2-.7 2.1-.9 3.1-.6.6.2 1.2.6 1.6 1.1l.6-.8C6.8 7.1 7 4 10 3l-.1.1c-.3.5-1 1.9-.2 3.4.7-.3 1.5-.5 2.3-.5.8 0 1.6.2 2.3.5.8-1.5.1-2.9-.2-3.4L14 3c3 1 3.2 4.1 2.6 5.2l.6.8c.4-.5 1-.9 1.6-1.1 1-.3 2.9-.1 3.1.7.3.7-1.3 1.9-2.3 2.2-.5.1-1.2.1-1.7 0L18 12c0 1.3-.4 2.6-1.2 3.6.8.7 1.2 1.5 1.2 2.4zm-6-2c-2.2 0-4 .9-4 2s1.8 2 4 2 4-.9 4-2-1.8-2-4-2zm0-2c1.1 0 2.2.2 3.1.6.6-.7.9-1.6.9-2.6 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1 .3 1.9.9 2.6.9-.4 2-.6 3.1-.6zm2.1-10.9z' })
    )
  );
};

exports.default = Icon;