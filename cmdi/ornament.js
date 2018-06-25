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
      _react2.default.createElement('path', { d: 'M12 1c1.7 0 3 1.3 3 3v1c.6 0 1 .4 1 1v1.1c2.4 1.4 4 3.9 4 6.9 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-3 1.6-5.5 4-6.9V6c0-.6.4-1 1-1V4c0-1.7 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1v1h2V4c0-.6-.4-1-1-1zm0 5c-1.8 0-3.4.8-4.5 2h9c-1.1-1.2-2.7-2-4.5-2zm-5.7 8h1.3L6 14.4c.1.6.2 1.1.3 1.6zm6.3 0l-4-4H6.4l4 4h2.2zm5.1-4h-1.3l1.6 1.6c-.1-.6-.2-1.1-.3-1.6zm-6.3 0l4 4h2.2l-4-4h-2.2zm.6 8c1.8 0 3.4-.8 4.5-2h-9c1.1 1.2 2.7 2 4.5 2z' })
    )
  );
};

exports.default = Icon;