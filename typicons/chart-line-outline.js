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
      _react2.default.createElement('path', { d: 'M6 17c-.7 0-1.3-.2-1.9-.7-.6-.5-1-1.2-1.1-2-.1-.8.2-1.5.7-2.2l4-5c.9-1.2 2.8-1.4 4.1-.5l1.7 1.3 2.2-2.8C16.2 4.4 17.1 4 18 4c.7 0 1.3.2 1.9.7.6.5 1 1.2 1.1 2s-.2 1.6-.7 2.2l-4 5c-.9 1.2-2.8 1.4-4.1.5l-1.7-1.3-2.2 2.8C7.8 16.6 6.9 17 6 17zm4-9c-.3 0-.6.1-.8.4l-4 5c-.1.2-.2.4-.2.7 0 .3.2.5.4.7.2.2.4.2.6.2.3 0 .6-.1.8-.4l3.4-4.2 3.2 2.4c.4.3 1.1.2 1.4-.2l4-5c.1-.2.2-.4.2-.7 0-.3-.2-.5-.4-.7-.2-.2-.4-.2-.6-.2-.3 0-.6.1-.8.4l-3.4 4.2-3.2-2.4c-.2-.1-.4-.2-.6-.2zm9 13H5c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;