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
      _react2.default.createElement('path', { d: 'M20.6 5.5c-1-1.5-2.9-1.7-4.4-.8l-.2.1c-1.1 0-2 .5-2.6 1.4h-.1c-.4.7-.7 1.2-1 1.8-.2.5-.5 1-.8 1.5-.3-.5-.6-1-.8-1.5-.3-.6-.6-1.1-1-1.8h-.1C9 5.3 8.1 4.8 7 4.8 5.3 4.8 3.9 6.2 3.9 8c0 1.7 1.4 3.1 3.1 3.1.8 0 1.5-.3 2.1-.8l.7 1.2c-1.7 1.9-3 4.1-3 4.2-1.3 1.7.7 4.4.7 4.5.1.1.3.2.4.2.2 0 .4-.1.5-.3l3.1-5.7 3.1 5.7c.1.2.2.3.4.3s.4-.1.5-.2c0-.1 2-2.8.8-4.5l-.4-.5c-1-1.8-1.1-1.9-2.7-3.7l.7-1.2c.5.5 1.3.8 2.1.8 1.7 0 3.1-1.4 3.1-3.1 0-.7-.2-1.3-.5-1.8.5-.3 1-.1 1.4.1.5.2.9-.4.6-.8zM7 9c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4.5 3.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zM16 9c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;