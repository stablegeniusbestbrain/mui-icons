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
      _react2.default.createElement('path', { d: 'M13 15.1V9.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c-.9.2-1.5 1-1.5 1.9 0 1.1.9 2 2 2s2-.9 2-2c0-.9-.6-1.7-1.5-1.9zm3-1.6v-8C16 3.6 14.4 2 12.5 2S9 3.6 9 5.5v8c-.9.9-1.5 2.1-1.5 3.5 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.4-.6-2.6-1.5-3.5zM12.5 20c-1.7 0-3-1.3-3-3 0-1.1.6-2.1 1.5-2.6V5.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v8.9c.9.5 1.5 1.5 1.5 2.6 0 1.7-1.3 3-3 3z' })
    )
  );
};

exports.default = Icon;