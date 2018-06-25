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
      _react2.default.createElement('path', { d: 'M12 4.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5zm0 15c-3.6 0-6.5-2.9-6.5-6.5S8.4 6.5 12 6.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm3.3-7.5h1.1c-.4-1.7-1.7-3-3.4-3.4v.9c0 .6-.4 1-1 1-.5 0-.9-.4-1-.8V8.6C9.3 9 8 10.3 7.6 12h1.1c.4.1.8.5.8 1s-.4.9-.8 1H7.6c.4 1.7 1.7 3 3.4 3.4v-1.1c.1-.4.5-.8 1-.8s.9.4 1 .8v1.1c1.7-.4 3-1.7 3.4-3.4h-1.1c-.4-.1-.8-.5-.8-1s.4-.9.8-1zm-.4 2.9c-.3.4-.6.7-1 1-.3-.8-1-1.4-1.9-1.4s-1.6.6-1.9 1.4c-.4-.3-.7-.6-1-1 .8-.3 1.4-1 1.4-1.9 0-.9-.6-1.6-1.4-1.9.3-.4.6-.7 1-1 .3.8 1 1.4 1.9 1.4.9 0 1.6-.6 1.9-1.4.4.3.7.6 1 1-.8.3-1.4 1-1.4 1.9 0 .9.6 1.6 1.4 1.9z' })
    )
  );
};

exports.default = Icon;