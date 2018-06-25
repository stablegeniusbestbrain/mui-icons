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
      _react2.default.createElement('path', { d: 'M11 23c-1.1 0-2-.9-2-2v-2h6v2c0 1.1-.9 2-2 2h-2zm1-22c.7 0 1.4.1 2 .3 1.2 1.5 2 4.4 2 7.7 0 2.3-.4 4.4-1 7 0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2-.6-2.6-1-4.7-1-7 0-3.3.8-6.2 2-7.7.6-.2 1.3-.3 2-.3zm8 7c0 3.2-1.9 7.9-4.5 9.2.9-1.8 1.5-5.4 1.5-8.2 0-2.8-.6-5.4-1.5-7.2C18.1 3.1 20 4.8 20 8zM4 8c0-3.2 1.9-4.9 4.5-6.2C7.6 3.6 7 6.2 7 9s.6 6.4 1.5 8.2C5.9 15.9 4 11.2 4 8z' })
    )
  );
};

exports.default = Icon;