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
      _react2.default.createElement('path', { d: 'M7.8 17.1c-.8.1-4.3.6-3.7 3.2.6 3 5.8 2.3 5.7-1.3V9.2s0-.7.6-.8l7.8-1.6s.6-.1.6.5v6.9s.1.6-.7.8c-.8.1-4.2.4-3.9 3 .3 3.1 5.8 2.6 5.8-.9V2.6s0-1-1.1-.7L9.5 3.8s-.8.2-.8 1v11.3s0 .9-.9 1z' })
    )
  );
};

exports.default = Icon;