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
      _react2.default.createElement('path', { d: 'M6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 4c-1.1 0-2 .9-2 2s.9 2 2 2c5.5 0 10 4.5 10 10 0 1.1.9 2 2 2s2-.9 2-2c0-7.7-6.3-14-14-14zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2c2.2 0 4 1.8 4 4 0 1.1.9 2 2 2s2-.9 2-2c0-4.4-3.6-8-8-8z' })
    )
  );
};

exports.default = Icon;