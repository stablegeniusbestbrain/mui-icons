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
      _react2.default.createElement('path', { d: 'M8.5 15.1L7 16.5l-1.3-1.4c-.9 1.1-1.5 2.4-1.6 3.9H6v2H2v-1c0-4.8 3.4-8.9 8-9.8v-2L2 5V3h20v2l-8 3.2v2c4.6.9 8 5 8 9.8v1h-4v-2h1.9c-.1-1.5-.7-2.8-1.6-3.9L17 16.5l-1.5-1.4 1.4-1.4c-1.1-.9-2.4-1.5-3.9-1.6V14h-2v-1.9c-1.5.1-2.8.7-3.9 1.6l1.4 1.4zM12 18c1.1 0 2 .9 2 2s-.9 2-2 2c-.3 0-.6-.1-.9-.2L7.3 20l3.8-1.8c.3-.1.6-.2.9-.2z' })
    )
  );
};

exports.default = Icon;