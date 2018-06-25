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
      _react2.default.createElement('path', { d: 'M12 9.1V6.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3s-.5.1-.7.3L4 12l6.3 6.2c.2.2.4.3.7.3s.5-.1.7-.3.3-.4.3-.7V15c2.8.1 5.8.6 8 4v-1c0-4.6-3.5-8.4-8-8.9z' })
    )
  );
};

exports.default = Icon;