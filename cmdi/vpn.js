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
      _react2.default.createElement('path', { d: 'M9 5h6l-3 3-3-3zm1.5 9.7c-.3.3-.5.8-.5 1.3 0 1.1.9 2 2 2s2-.9 2-2c0-.6-.2-1.1-.6-1.4l1.4-1.4c.8.7 1.2 1.7 1.2 2.8 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.1.4-2 1.1-2.8l7.1-7C16.9 5.4 17.9 5 19 5c2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.1 0-2.1-.4-2.8-1.2l1.4-1.4c.3.4.8.6 1.4.6 1.1 0 2-.9 2-2s-.9-2-2-2c-.6 0-1.1.2-1.4.6l-7.1 7.1zM6.4 7.6C6.1 7.2 5.6 7 5 7c-1.1 0-2 .9-2 2s.9 2 2 2c.6 0 1.1-.2 1.4-.6l1.4 1.4C7.1 12.6 6.1 13 5 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.1 0 2.1.5 2.8 1.2l2.8 2.7-1.4 1.4-2.8-2.7z' })
    )
  );
};

exports.default = Icon;