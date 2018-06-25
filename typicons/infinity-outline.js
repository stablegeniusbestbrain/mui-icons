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
      _react2.default.createElement('path', { d: 'M16.4 8.6c1.2 0 2.3.4 3.1 1.3.8.8 1.3 1.9 1.3 3s-.5 2.3-1.3 3.1c-.8.8-1.9 1.2-3.1 1.2s-2.2-.4-3-1.2L12 14.7 10.6 16c-.8.8-1.9 1.2-3 1.2-1.2 0-2.3-.4-3.1-1.2-.8-.8-1.2-1.9-1.2-3.1s.4-2.2 1.2-3c.8-.9 1.9-1.3 3.1-1.3s2.2.4 3 1.3l1.4 1.3 1.4-1.4c.8-.8 1.9-1.2 3-1.2m0-2c-1.6 0-3.2.6-4.4 1.8-1.2-1.2-2.7-1.8-4.4-1.8-1.7 0-3.3.7-4.5 1.8-1.2 1.2-1.8 2.8-1.8 4.5s.6 3.3 1.8 4.5c1.2 1.2 2.8 1.8 4.5 1.8 1.7 0 3.2-.6 4.4-1.8 1.2 1.2 2.8 1.8 4.4 1.8 1.7 0 3.3-.6 4.5-1.8 1.2-1.2 1.9-2.8 1.9-4.5 0-1.7-.7-3.3-1.9-4.5-1.2-1.1-2.8-1.8-4.5-1.8zm-8.8 5.5c.2 0 .4.1.6.3l.6.5-.6.6c-.2.1-.4.2-.6.2-.3 0-.5-.1-.6-.2-.2-.2-.2-.4-.2-.6 0-.2 0-.4.2-.6.2-.1.4-.2.6-.2m0-1c-.5 0-1 .2-1.3.5-.4.4-.5.8-.5 1.3s.1 1 .5 1.3c.3.3.8.5 1.3.5s.9-.2 1.3-.5l1.3-1.3-1.3-1.3c-.4-.3-.8-.5-1.3-.5zm8.8 1c.3 0 .5.1.6.2.2.2.3.4.3.6s-.1.4-.3.6c-.1.1-.3.2-.6.2-.2 0-.4-.1-.6-.2l-.5-.6.6-.6c.1-.1.3-.2.5-.2m0-1c-.4 0-.9.2-1.3.5l-1.3 1.3 1.3 1.3c.4.3.9.5 1.3.5.5 0 1-.2 1.3-.5.4-.3.6-.8.6-1.3s-.2-.9-.6-1.3c-.3-.3-.8-.5-1.3-.5z' })
    )
  );
};

exports.default = Icon;