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
      _react2.default.createElement('path', { d: 'M8 3L6.5 5.2 8 7.4h-.1l-2 3.1-1.7-.9 1.4-2.2-1.4-2.2 2-3.1 1.7.9zm5.9-.1l-1.4 2.2 1.4 2.2-2 3.1-1.7-.9 1.4-2.2-1.4-2.2 2-3.1 1.8.9zm6.1 0l-1.4 2.2L20 7.3l-2 3.1-1.7-.9 1.4-2.2-1.4-2.2 2-3.1 1.7.9zM2 22v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v8h-2v-2H4v2H2zm4-8c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zm4 0c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zm4 0c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zm4 0c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;