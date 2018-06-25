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
      _react2.default.createElement('path', { d: 'M15.9 5c-.2 0-.3.1-.4.2l-.1.2L10.2 17c-.1.3-.2.6-.2 1 0 1.1.9 2 2 2 .9 0 1.8-.7 1.9-1.6h.1l2.4-12.9c0-.3-.2-.5-.5-.5zM1 9l2 2c2.9-2.9 6.8-4.1 10.5-3.6l1.2-2.7C9.9 3.8 4.7 5.3 1 9zm20 2l2-2c-1.6-1.6-3.6-2.8-5.6-3.6l-.5 2.9c1.5.6 2.9 1.5 4.1 2.7zm-4 4l2-2c-.8-.8-1.7-1.4-2.7-1.9l-.5 2.9c.4.3.8.6 1.2 1zM5 13l2 2c1.1-1.1 2.6-1.8 4-2l1.3-2.9C9.7 10 7 11 5 13z' })
    )
  );
};

exports.default = Icon;