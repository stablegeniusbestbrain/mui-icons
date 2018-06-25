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
      _react2.default.createElement('path', { d: 'M17 5c-.8 0-1.5.3-2 .8V4c0-1.7-1.3-3-3-3S9 2.3 9 4v4.8C8.5 8.3 7.8 8 7 8c-1.7 0-3 1.3-3 3v6h16V8c0-1.7-1.3-3-3-3zm-5-2c.6 0 1 .4 1 1v11h-2V4c0-.6.4-1 1-1zM8 15H6v-4c0-.6.5-1 1-1s1 .4 1 1v4zm10 0h-2V8c0-.6.4-1 1-1s1 .4 1 1v7zm1 6H5c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;