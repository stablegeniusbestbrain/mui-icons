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
      _react2.default.createElement('path', { d: 'M10.2 11.2l2.7-.9.9 2.5-2.7.9-.9-2.5zm7.5 2.5c.5-.2.8-.8.6-1.3-.1-.5-.7-.8-1.3-.7l-1.3.5-.8-2.6 1.3-.4c.5-.2.8-.8.6-1.3-.2-.6-.7-.9-1.3-.7l-1.3.4-.4-1.3c-.2-.5-.8-.8-1.3-.7-.6.2-.9.8-.7 1.4l.4 1.3-2.6.9-.5-1.3c-.2-.6-.7-.9-1.3-.7-.5.2-.8.8-.6 1.3l.4 1.4-1.3.4c-.5.2-.8.8-.6 1.3.1.4.5.7.9.7H7l1.3-.5.8 2.6-1.3.4c-.5.2-.8.8-.6 1.3.1.5.5.7.9.7h.4l1.3-.4.4 1.3c.2.4.6.7 1 .7h.3c.6-.2.9-.8.7-1.4l-.4-1.3 2.6-.9.5 1.3c.1.5.5.7.9.8l.4-.1c.5-.2.8-.8.6-1.3l-.4-1.4 1.3-.4zm3.5-4.4c2 6.8.4 9.8-6.5 11.9-6.8 2-9.8.4-11.9-6.4-2-6.9-.4-9.9 6.5-12 6.8-2 9.8-.4 11.9 6.5z' })
    )
  );
};

exports.default = Icon;