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
      _react2.default.createElement('path', { d: 'M7.2 11.9c-.3.3-.5.8-.5 1.2l5.5 2.3L20.7 7c.7-.8.7-2.1 0-2.9l-1.5-1.4c-.7-.8-2-.8-2.8 0l-9.2 9.2zM5 16v5.8l5.8-5.3-5-2L5 16zM17.1 4.8c.4-.4 1-.4 1.4 0 .4.4.4 1.1 0 1.4-.4.4-1 .4-1.4 0-.4-.3-.4-1 0-1.4z' })
    )
  );
};

exports.default = Icon;