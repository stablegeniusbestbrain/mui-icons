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
      _react2.default.createElement('path', { d: 'M12 2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 6c0-.6.4-1 1-1s1 .4 1 1v3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1h1v-2l1 1-1 1c0 3 0 3-2 4 0-1-1-1-3-1v-2l-2-2V9c-1 0-1 1-1 1l-.6-.6-1.6-1.6C7 5.5 9.3 4 12 4c.7 0 1.4.1 2 .3-.1.9-.6 1.7-1.5 1.7-1 0-1.5 1-1.5 2v3s1 0 1-3zm0 10c-3.9 0-7-3.1-7-7 0-.8.1-1.5.4-2.2l1.9 1.9 1 1 1.7 1.7V15c0 .6.4 1 1 1 .8 0 1.7 0 2 .1 0 .3.2.6.5.7.1.1.3.2.5.2s.3 0 .4-.1c2.4-1.2 2.6-1.6 2.6-4.5l.7-.7c.4-.4.4-1 0-1.4l-1-1c-.2-.2-.4-.3-.7-.3-.1 0-.3 0-.4.1-.4.1-.6.5-.6.9V8c0-.7-.3-1.3-.9-1.7.4-.4.7-1 .8-1.6C17.3 5.8 19 8.2 19 11c0 3.9-3.1 7-7 7z' })
    )
  );
};

exports.default = Icon;