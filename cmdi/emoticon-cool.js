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
      _react2.default.createElement('path', { d: 'M19 10c0 1.4-2.1 2.5-3.5 2.5s-2.7-1.1-2.7-2.5h-1.5c0 1.4-1.4 2.5-2.8 2.5S5 11.4 5 10h-.7c-.2.6-.3 1.3-.3 2 0 4.4 3.6 8 8 8s8-3.6 8-8c0-.7-.1-1.4-.3-2H19zm-7-6C9 4 6.5 5.6 5.1 8h13.8C17.5 5.6 15 4 12 4zm10 8c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-10 5.2c-1.8 0-3.3-.7-4.2-1.8L9.2 14c.5.7 1.6 1.2 2.8 1.2s2.3-.5 2.8-1.2l1.4 1.4c-.9 1.1-2.4 1.8-4.2 1.8z' })
    )
  );
};

exports.default = Icon;