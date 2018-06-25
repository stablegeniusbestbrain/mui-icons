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
      _react2.default.createElement('path', { d: 'M12 15c-4.4 0-8 1.8-8 4v2h16v-2c0-2.2-3.6-4-8-4zM8 9c0 2.2 1.8 4 4 4s4-1.8 4-4m-4.5-7c-.3 0-.5.2-.5.5v3h-1V3s-2.2.9-2.2 3.8c0 0-.8.1-.8 1.2h10c-.1-1.1-.7-1.2-.7-1.2C16.3 3.9 14 3 14 3v2.5h-1v-3c0-.3-.2-.5-.5-.5h-1z' })
    )
  );
};

exports.default = Icon;