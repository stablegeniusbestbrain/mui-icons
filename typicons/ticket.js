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
      _react2.default.createElement('path', { d: 'M21.5 8.1l-5.4-5.4c-1.1-1.1-3.1-1.1-4.2 0l-9.2 9c-.5.6-.9 1.3-.9 2.1s.3 1.6.9 2.1l5.4 5.4c.5.6 1.3.9 2.1.9s1.6-.3 2.1-.9l9.2-9c.5-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1zm-1.4 2.8l-9.2 9c-.4.4-1 .4-1.4 0l-1.3-1.3c.7-.8.7-2 0-2.7-.8-.8-2-.8-2.8-.1l-1.3-1.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7l9.2-9c.2-.2.4-.3.7-.3.3 0 .5.1.7.3L16 5.4c-.7.8-.7 2 0 2.7.8.8 2 .8 2.8.1l1.3 1.3c.2.2.3.4.3.7s-.1.5-.3.7zM11.6 17l-4.7-4.6L12.6 7l4.7 4.6-5.7 5.4zm-3.2-4.6l3.2 3.2 4.2-4-3.2-3.2-4.2 4z' })
    )
  );
};

exports.default = Icon;