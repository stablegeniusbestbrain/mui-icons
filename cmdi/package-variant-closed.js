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
      _react2.default.createElement('path', { d: 'M21 16.5c0 .4-.2.7-.5.9l-7.9 4.4c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-7.9-4.4c-.3-.2-.5-.5-.5-.9v-9c0-.4.2-.7.5-.9l7.9-4.4c.2-.1.4-.2.6-.2.2 0 .4.1.6.2l7.9 4.4c.3.2.5.5.5.9v9zM12 4.2l-1.9 1L16 8.6l2-1.1-6-3.3zM6 7.5l6 3.3 2-1-5.9-3.4L6 7.5zm-1 8.4l6 3.4v-6.7L5 9.2v6.7zm14 0V9.2l-6 3.4v6.7l6-3.4z' })
    )
  );
};

exports.default = Icon;