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
      _react2.default.createElement('path', { d: 'M18.4 6.6c-1.6-1.5-4.1-1.5-5.7 0l-4.5 4.6c-.5.4-.8 1.1-.8 1.7 0 .7.3 1.3.8 1.8s1.1.7 1.7.7c.7 0 1.3-.2 1.8-.7l2.1-2.1c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4l-3.5 3.5c-.2.2-.5.2-.7 0-.1-.1-.2-.3-.2-.4 0 0 .1-.2.2-.3l4.5-4.5c.8-.8 2.1-.8 2.8 0 .8.7.8 2 0 2.8l-4.5 4.5-2.5 2.5c-.8.8-2.1.8-2.8 0-.8-.7-.8-2 0-2.8V15c-.4-.6-.7-1.3-.7-2.1l-.8.8c-1.5 1.6-1.5 4.1 0 5.7.8.7 1.8 1.1 2.9 1.1s2-.4 2.8-1.1l7.1-7.1c1.5-1.6 1.5-4.1 0-5.7z' })
    )
  );
};

exports.default = Icon;