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
      _react2.default.createElement('path', { d: 'M13 12H8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zm6.4 4l-2.3-2.3c.3-.7.4-1.4.4-2.2 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c.8 0 1.5-.1 2.2-.4l2.4 2.4c.6.5 1.3.8 2.1.8 1.7 0 3.1-1.4 3.1-3.1 0-.9-.3-1.7-.9-2.2zm-3.9-1.2l2.5 2.6c.2.2.3.5.3.8 0 .6-.5 1.1-1.1 1.1-.3 0-.6-.1-.8-.3l-2.6-2.5c.7-.5 1.2-1 1.7-1.7zm-10-3.3c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z' })
    )
  );
};

exports.default = Icon;