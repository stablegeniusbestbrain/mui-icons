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
      _react2.default.createElement('path', { d: 'M10 15.3H8.4v-5.2H10v5.2zm-.8-5.9c-.5 0-.8-.2-.8-.8 0-.2 0-.4.2-.5.2-.2.4-.3.6-.3.6 0 .9.3.9.8s-.3.8-.9.8zm6.8 5.9h-1.7v-2.9c0-.8-.2-1.1-.8-1.1-.4 0-.7.2-.8.6 0 .1-.1.2-.1.4v3H11v-3.5-1.7h1.4l.1.7c.3-.6.9-.8 1.6-.8.6 0 1 .2 1.4.6.3.3.5.9.5 1.6v3.1zM12 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z' })
    )
  );
};

exports.default = Icon;