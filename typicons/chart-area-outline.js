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
      _react2.default.createElement('path', { d: 'M20 17H4c-.6 0-1-.4-1-1v-3c0-.7.2-1.3.7-1.9l4-5c.9-1.2 2.8-1.4 4.1-.5l1.7 1.3 2.2-2.8C16.2 3.4 17.1 3 18 3c.7 0 1.3.2 1.9.7.7.5 1.1 1.4 1.1 2.3v10c0 .6-.4 1-1 1zM5 15h14V6c0-.3-.1-.6-.4-.8-.2-.2-.4-.2-.6-.2-.3 0-.6.1-.8.4l-2.8 3.5c-.3.4-.9.5-1.3.1l-2.5-1.8c-.4-.3-1.1-.2-1.4.2l-4 5c-.2.2-.2.4-.2.6v2zm15 6H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;