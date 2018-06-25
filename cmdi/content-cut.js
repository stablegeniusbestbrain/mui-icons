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
      _react2.default.createElement('path', { d: 'M19 3l-6 6 2 2 7-7V3m-10 9.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zM6 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.6-.4c.3-.5.4-1 .4-1.6 0-2.2-1.8-4-4-4S2 3.8 2 6s1.8 4 4 4c.6 0 1.1-.1 1.6-.4L10 12l-2.4 2.4c-.5-.3-1-.4-1.6-.4-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0-.6-.1-1.1-.4-1.6L12 14l7 7h3v-1L9.6 7.6z' })
    )
  );
};

exports.default = Icon;