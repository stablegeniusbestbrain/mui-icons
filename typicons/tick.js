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
      _react2.default.createElement('path', { d: 'M17 6.3c-1-.6-2.2-.2-2.7.7l-3.8 6.7-2.1-2.1c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l4 4c.4.4.9.6 1.4.6h.3c.6-.1 1.1-.5 1.4-1l5-9c.6-1 .2-2.2-.7-2.8z' })
    )
  );
};

exports.default = Icon;