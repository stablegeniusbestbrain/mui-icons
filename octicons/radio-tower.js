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
      _react2.default.createElement('path', { d: 'M7.2 9.2c.4-.4.4-1 0-1.4-.5-.5-.7-1.2-.7-1.8 0-.6.2-1.3.7-1.8.4-.4.4-1 0-1.4a.9.9 0 0 0-.7-.2c-.2 0-.5 0-.7.2C5 3.7 4.6 4.9 4.6 6S5 8.3 5.8 9.2c.4.3 1 .3 1.4 0zM3.5.8a1 1 0 0 0-1.4 0C.7 2.2 0 4.1 0 6c0 1.9.7 3.8 2.1 5.2.4.4 1 .4 1.4 0s.4-1 0-1.4C2.5 8.7 1.9 7.4 1.9 6s.6-2.8 1.6-3.8a1 1 0 0 0 0-1.4zM12 8.4A2.4 2.4 0 1 0 9.6 6c0 1.3 1.1 2.4 2.4 2.4zM21.9.8a.9.9 0 0 0-1.4 0c-.4.4-.4 1 0 1.4 1 1.1 1.6 2.4 1.6 3.8s-.6 2.8-1.6 3.8c-.4.4-.4 1 0 1.4a1 1 0 0 0 1.4 0C23.3 9.8 24 7.9 24 6A7.6 7.6 0 0 0 21.9.8zM12 10.4c-.6 0-1.2-.2-1.8-.5L5.5 22.5h2.2L9 21h6l1.3 1.5h2.2L13.8 9.9c-.6.3-1.2.5-1.8.5zm0 .7l1.5 5.4h-3l1.5-5.4zm-3 8.4l1.5-1.5h3l1.5 1.5H9zm7.8-16.7c-.4.4-.4 1 0 1.4.5.5.7 1.2.7 1.8 0 .6-.2 1.3-.7 1.8-.4.4-.4 1 0 1.4a.9.9 0 0 0 1.4 0c.8-.9 1.2-2.1 1.2-3.2s-.4-2.3-1.2-3.2a1 1 0 0 0-1.4 0z' })
    )
  );
};

exports.default = Icon;