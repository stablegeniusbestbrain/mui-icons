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
      _react2.default.createElement('path', { d: 'M12 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm1.6 7.6c.1 0 .3.1.4.3.1.2.2.4.2.6 0 .3-.1.5-.2.6-.1.2-.3.3-.4.3-.2 0-.4-.1-.5-.3-.1-.1-.2-.3-.2-.6s.1-.4.2-.6c.1-.2.3-.3.5-.3m2.2-2.3c.5.6.7 1.2.7 1.9 0 .5-.1 1-.2 1.3-.1.4-.2.7-.4 1l-.6.6c-.3.2-.5.3-.7.4-.2.1-.4.2-.7.2-.3.1-.5.1-.6.1h-2.6c-.1 0-.3 0-.6-.1-.3 0-.5-.1-.7-.2-.2-.1-.4-.2-.7-.4l-.6-.6c-.2-.3-.3-.6-.4-1-.1-.3-.2-.8-.2-1.3 0-.7.2-1.3.7-1.9v-.7c.1-.5.2-1 .3-1.4.6.1 1.4.4 2.3 1 .3-.1.7-.1 1.2-.1s1 0 1.2.1c.4-.3.8-.5 1.2-.7.4-.1.6-.2.8-.3h.3c.1.4.2.9.3 1.4v.7M12 15.4c1.1 0 1.9-.2 2.5-.4.5-.3.8-.8.8-1.6 0-.5-.2-.9-.5-1.2-.2-.2-.4-.3-.7-.3-.2-.1-.6-.1-1.1 0h-2.6c-.2-.1-.4 0-.6 0l-.6.3c-.3.3-.5.7-.5 1.2 0 .8.3 1.3.8 1.6.6.2 1.4.4 2.5.4m-1.5-2.8c.1 0 .3.1.4.3.1.2.2.4.2.6 0 .3-.1.5-.2.6-.1.2-.3.3-.4.3-.2 0-.4-.1-.5-.3-.1-.1-.2-.3-.2-.6s.1-.4.2-.6c.1-.2.3-.3.5-.3' })
    )
  );
};

exports.default = Icon;