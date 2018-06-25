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
      _react2.default.createElement('path', { d: 'M14.4 15.6v-1.2c-.4.2-.8.4-1.2.4-.2 0-.4-.1-.6-.2-.1-.1-.2-.2-.2-.3-.1-.1-.1-.4-.1-.9v-1.9h1.8v-1.3h-1.8V8.3h-1.1c-.1.4-.2.8-.3 1-.1.2-.2.4-.5.6-.2.2-.5.4-.8.5v1.1h.9v2.7c0 .3 0 .5.1.8.1.1.2.3.4.5.2.1.4.3.7.4.3.1.6.1.9.1.3 0 .6 0 .9-.1.3 0 .6-.2.9-.3' }),
      _react2.default.createElement('path', { d: 'M12 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z' })
    )
  );
};

exports.default = Icon;