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
      _react2.default.createElement('path', { d: 'M18.2 7.6l.6-.5c.4-.4.6-1 .6-1.6-.1-.5-.3-1-.8-1.4-2.1-1.8-4.7-2.8-7.4-3.1H11c-.5 0-1 .2-1.3.5-.5.4-.7.9-.7 1.5v2.2c-3.7.9-6.3 4.2-6.3 8 0 4.6 3.7 8.3 8.2 8.3 1.6 0 3.1-.5 4.4-1.4.3.2.6.3.9.3h.1c.6-.1 1.1-.4 1.5-.8 1.4-1.8 2.2-4 2.2-6.3 0-2-.6-4-1.8-5.7zm-7.3 11.9c-3.4 0-6.2-2.8-6.2-6.3 0-3.1 2.3-5.7 5.3-6.1v6.4l4.6 4.7c-1 .8-2.3 1.3-3.7 1.3zM11 12V3c2.4.2 4.6 1.2 6.4 2.6L11 12zm.2 1.3l5-5c1.1 1.4 1.8 3.1 1.8 5s-.7 3.7-1.8 5.1l-5-5.1z' })
    )
  );
};

exports.default = Icon;