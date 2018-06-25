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
      _react2.default.createElement('path', { d: 'M12.6 2.9c2.7 1.2 5.4 2.5 8.1 3.7.1.1.3.1.3.3s-.2.3-.3.4C18 8.5 15.3 9.8 12.6 11c-.4.2-.8.2-1.2 0C8.7 9.8 6 8.5 3.3 7.3c-.1-.1-.3-.2-.3-.4 0-.1.2-.2.3-.3C6 5.4 8.7 4.1 11.4 2.9c.3-.2.9-.2 1.2 0zM12 21.1c-.2 0-.3 0-.6-.1-2.7-1.3-5.4-2.5-8.1-3.8-.1 0-.3-.1-.3-.3 0-.2.2-.2.3-.3.5-.2.9-.4 1.4-.6.4-.2.9-.2 1.3 0 1.8.8 3.6 1.6 5.3 2.5.5.2.9.2 1.4 0 1.7-.9 3.5-1.7 5.3-2.5.4-.2.9-.2 1.3-.1.5.3.9.5 1.4.7.1 0 .2.1.2.1.1.1.1.3 0 .4-.1 0-.2.1-.3.1-2.6 1.3-5.3 2.5-7.9 3.8-.2.1-.5.1-.7.1zm0-4.9c-.1 0-.4-.1-.6-.2-2.7-1.3-5.4-2.5-8.1-3.8-.1 0-.3-.1-.3-.3 0-.2.2-.2.3-.3.5-.2.9-.4 1.4-.6.4-.2.9-.2 1.3 0 1.8.8 3.6 1.7 5.4 2.5.4.2.8.2 1.2 0 1.8-.8 3.6-1.7 5.4-2.5.5-.2.9-.2 1.3 0 .5.2.9.4 1.4.6.1.1.1.1.2.1.1.2.1.3 0 .4-.1.1-.1.1-.2.1-2.7 1.3-5.4 2.5-8.1 3.8-.2.1-.5.2-.6.2z' })
    )
  );
};

exports.default = Icon;