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
      _react2.default.createElement('path', { d: 'M12 18.1c-6.6 0-12-2.7-12-6.1s5.4-6.1 12-6.1S24 8.6 24 12s-5.4 6.1-12 6.1zm-5.2-8c.6 0 .9.1 1.1.3.2.2.2.6.1 1.1-.1.5-.3.8-.5 1.1-.3.2-.8.3-1.3.3h-.9l.5-2.8h1zm-3.5 5.6h1.4l.4-1.8h1.2c.6 0 1 0 1.4-.1.3-.2.6-.3.9-.6.2-.2.4-.5.6-.7l.3-.9c.2-.8 0-1.4-.3-1.9-.4-.4-1-.6-1.8-.6H4.6l-1.3 6.6zm7.3-8.4l-1.3 6.6h1.4l.7-3.7h1.2c.3 0 .6 0 .7.1.1.2.1.4.1.7l-.6 2.9h1.4l.6-3c.2-.7.1-1.1-.2-1.4-.3-.3-.9-.4-1.7-.4h-1.3l.4-1.8h-1.4zm7.4 2.8c.5 0 .9.1 1.1.3.2.2.2.6.1 1.1-.1.5-.3.8-.6 1.1-.2.2-.7.3-1.2.3h-.9l.5-2.8h1zm-3.5 5.6h1.4l.4-1.8h1.2c.6 0 1 0 1.3-.1.4-.2.7-.3 1-.6.2-.2.4-.5.6-.7l.3-.9c.2-.8 0-1.4-.3-1.9-.4-.4-1-.6-1.9-.6h-2.7l-1.3 6.6z' })
    )
  );
};

exports.default = Icon;