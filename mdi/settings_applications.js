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
      _react2.default.createElement('path', { d: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.7 9c0 .2-.1.5-.1.7l1.5 1.1c.1.1.2.3.1.5l-1.4 2.4c-.1.2-.3.2-.5.2l-1.7-.7c-.4.2-.8.5-1.2.7l-.2 1.8c-.1.2-.2.3-.4.3h-2.8c-.2 0-.3-.1-.3-.3l-.3-1.8c-.4-.2-.8-.4-1.2-.7l-1.7.7c-.2 0-.4 0-.5-.2l-1.4-2.4c0-.1 0-.3.1-.4l1.5-1.2V12v-.7l-1.5-1.1c-.1-.1-.1-.3-.1-.5l1.4-2.4c.1-.2.3-.2.5-.2l1.7.7c.4-.2.8-.5 1.2-.6l.3-1.9c0-.2.1-.3.3-.3h2.8c.2 0 .3.1.4.3l.2 1.8c.4.2.8.5 1.2.7l1.7-.7c.2 0 .4 0 .5.2l1.4 2.4c0 .2 0 .3-.1.5l-1.5 1.1c0 .2.1.5.1.7z' })
    )
  );
};

exports.default = Icon;