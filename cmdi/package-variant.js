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
      _react2.default.createElement('path', { d: 'M2 11c-.5-.3-.6-.9-.4-1.4L3.1 7c.1-.2.3-.3.5-.4l7.8-4.4c.2-.1.4-.2.6-.2.2 0 .4.1.6.2l7.9 4.4c.2.1.3.3.4.5l1.5 2.5c.2.5.1 1.1-.4 1.4l-1 .5v5c0 .4-.2.7-.5.9l-7.9 4.4c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-7.9-4.4c-.3-.2-.5-.5-.5-.9V11c-.3.1-.7.1-1 0zm10-6.8v6.7l6-3.4-6-3.3zM5 15.9l6 3.4v-6.7L5 9.2v6.7zm14 0v-3.2l-5 2.9c-.3.2-.7.2-1 0v3.7l6-3.4zm-5.2-2.5l6.3-3.7-.6-1-6.2 3.6.6 1.1z' })
    )
  );
};

exports.default = Icon;