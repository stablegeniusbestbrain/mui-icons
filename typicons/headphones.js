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
      _react2.default.createElement('path', { d: 'M21 13c0-5-4-9-9-9s-9 4-9 9v5.5C3 20.4 4.6 22 6.5 22s3.5-1.6 3.5-3.5v-2c0-1.5-.8-2.8-2-3.3.1-2.1 1.9-3.8 4-3.8s3.9 1.7 4 3.8c-1.2.5-2 1.8-2 3.3v2c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5v-2V13zM5 13c0-1.6.5-3 1.4-4.2l.9.9c-.7.9-1.2 2-1.3 3.3v1H5v-1zm3 5.5c0 .8-.7 1.5-1.5 1.5S5 19.3 5 18.5v-2c0-.7.1-1.2.1-1.5H7c.5 0 1 .6 1 1.5v2zm7.8-9.3l-.4.3c-.9-.9-2.1-1.4-3.4-1.4s-2.5.5-3.4 1.4l-.4-.3L7.1 8l-.6-.6C7.9 5.9 9.9 5.1 12 5.1s4.1.8 5.5 2.3l-.6.6-1.1 1.2zm3.2 9.3c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-2c0-.9.5-1.5 1-1.5h1.9c0 .3.1.8.1 1.5v2zm0-4.5h-1v-1c-.1-1.3-.6-2.4-1.3-3.3l.9-.9C18.5 10 19 11.4 19 13v1z' })
    )
  );
};

exports.default = Icon;