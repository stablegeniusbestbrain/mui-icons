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
      _react2.default.createElement('path', { d: 'M18 3H7c-.3 0-.5.1-.7.3l-3 3-.1.1c-.1.1-.2.3-.2.6v11c0 1.7 1.3 3 3 3h9c1.3 0 2.4-.8 2.8-2h.7c1.4 0 2.5-1.3 2.5-3V6c0-1.7-1.3-3-3-3zM6 19c-.5 0-1-.4-1-1V8h2v11H6zm10-1c0 .6-.4 1-1 1H8V8h7c.6 0 1 .4 1 1v9zm3-2c0 .6-.3 1-.5 1H18V9c0-1.7-1.3-3-3-3H6.4l1-1H18c.6 0 1 .4 1 1v10z' })
    )
  );
};

exports.default = Icon;