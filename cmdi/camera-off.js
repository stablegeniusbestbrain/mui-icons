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
      _react2.default.createElement('path', { d: 'M1.2 4.5l1.3-1.3L20 20.7 18.7 22l-2-2H4c-1.1 0-2-.9-2-2V6c0-.2 0-.4.1-.6l-.9-.9zM7 4l2-2h6l2 2h3c1.1 0 2 .9 2 2v12c0 .6-.3 1.1-.7 1.5l-5-5c.5-.7.7-1.6.7-2.5 0-2.8-2.2-5-5-5-.9 0-1.8.2-2.5.7L5.8 4H7zm0 8c0 2.8 2.2 5 5 5 .5 0 1-.1 1.5-.2L11.7 15c-1.4-.1-2.6-1.3-2.7-2.7l-1.8-1.8c-.1.5-.2 1-.2 1.5zm5-3c1.7 0 3 1.3 3 3 0 .4-.1.7-.2 1L11 9.2c.3-.1.6-.2 1-.2z' })
    )
  );
};

exports.default = Icon;