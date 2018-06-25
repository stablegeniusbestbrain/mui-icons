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
      _react2.default.createElement('path', { d: 'M17.7 12l4-4c.4-.4.4-1 0-1.4l-4.3-4.3c-.4-.4-1-.4-1.4 0l-4 4-4-4c-.2-.2-.5-.3-.7-.3-.3 0-.5.1-.7.3L2.3 6.6c-.4.4-.4 1.1 0 1.4l3.9 4-3.9 4c-.4.4-.4 1 0 1.4l4.3 4.4c.4.3 1 .3 1.4 0l4-4 4 4c.2.1.4.2.7.2.2 0 .5-.1.7-.2l4.3-4.4c.4-.4.4-1 0-1.4l-4-4zM12 9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4.7 2L3.7 7.3l3.6-3.6 3.6 3.6L7.3 11zm2.7 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm2.7 9.3L13 16.7l3.7-3.6 3.6 3.6-3.6 3.6z' })
    )
  );
};

exports.default = Icon;