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
      _react2.default.createElement('path', { d: 'M19.5 3.7l-1.8-1.8c-.6-.6-1.3-.9-2.1-.9s-1.6.3-2.1.9l-1.6 1.6c-1.2 1.1-1.2 3 0 4.2l1.4 1.4-4.2 4.2-1.4-1.4c-.6-.6-1.3-.9-2.1-.9s-1.6.3-2.1.9l-1.6 1.6c-1.2 1.1-1.2 3 0 4.2l1.8 1.8c.4.5 1.8 1.5 4.1 1.5 2.8 0 5.7-1.5 8.7-4.5 6.2-6.2 4.8-11 3-12.8zm-6.2 1.2l1.6-1.6c.2-.2.4-.3.7-.3s.5.1.7.3l1.1 1.1-3 3-1.1-1.1c-.4-.4-.4-1 0-1.4zm-10 11.4c-.4-.4-.4-1 0-1.4l1.6-1.6c.2-.2.4-.3.7-.3s.5.1.7.3l1.1 1.1-3 3-1.1-1.1zm11.8-1.2C12 18.2 9.5 19 7.8 19c-1.4 0-2.3-.5-2.7-.9l3-3 .3.3c.2.2.4.3.7.3s.5-.1.7-.3l5.6-5.6c.4-.4.4-1 0-1.4l-.3-.3 3-3c1 1 2.4 4.5-3 10z' })
    )
  );
};

exports.default = Icon;