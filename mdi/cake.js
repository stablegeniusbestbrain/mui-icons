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
      _react2.default.createElement('path', { d: 'M12 6c1.1 0 2-.9 2-2 0-.4-.1-.7-.3-1L12 0l-1.7 3c-.2.3-.3.6-.3 1 0 1.1.9 2 2 2zm4.6 10l-1.1-1.1-1 1.1c-1.3 1.3-3.6 1.3-4.9 0l-1.1-1.1L7.4 16c-.6.6-1.5 1-2.4 1-.8 0-1.4-.2-2-.6V21c0 .6.5 1 1 1h16c.6 0 1-.4 1-1v-4.6c-.6.4-1.2.6-2 .6-.9 0-1.7-.4-2.4-1zM18 9h-5V7h-2v2H6c-1.7 0-3 1.3-3 3v1.5c0 1.1.9 2 2 2 .5 0 1-.2 1.3-.6l2.2-2.1 2.1 2.1c.7.8 2 .8 2.8 0l2.1-2.1 2.1 2.1c.4.4.9.6 1.4.6 1.1 0 2-.9 2-2V12c0-1.7-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;