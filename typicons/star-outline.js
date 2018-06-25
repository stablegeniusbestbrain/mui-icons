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
      _react2.default.createElement('path', { d: 'M16.9 21c-.3 0-.5-.1-.7-.2h-.1L12 18.4l-4.1 2.4h-.1c-.5.3-1.1.2-1.5-.1-.5-.4-.7-1-.6-1.5l.9-4.7L5 13.1l-1.9-1.8c-.4-.4-.6-1-.4-1.5.2-.6.6-.9 1.2-1l.1-.1 4.7-.5 1.9-4.3.1-.1c.2-.5.8-.8 1.3-.8s1 .3 1.3.8l.1.1 1.9 4.3 4.7.5.1.1c.6.1 1 .5 1.2 1 .1.5 0 1.1-.4 1.5l-3.5 3.2.9 4.7c.1.6-.1 1.1-.6 1.5-.2.2-.5.3-.8.3zm-8.2-6.6l-.8 4.1 3.6-2.1c.3-.2.7-.2 1 0l3.6 2.1-.8-4.1c-.1-.4 0-.7.3-1l3.1-2.8-4.2-.4c-.3-.1-.6-.3-.8-.6L12 5.7l-1.7 3.9c-.2.3-.5.5-.8.6l-4.2.4 3.1 2.8c.3.3.4.7.3 1z' })
    )
  );
};

exports.default = Icon;