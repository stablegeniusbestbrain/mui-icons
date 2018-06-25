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
      _react2.default.createElement('path', { d: 'M19.8 3h-8.6c-.7 0-1.2.5-1.2 1.2V8h6v6h3.8c.7 0 1.2-.5 1.2-1.2V4.2c0-.7-.5-1.2-1.2-1.2zm-7.4 3.7c-.6 0-1.2-.6-1.2-1.3 0-.6.6-1.2 1.2-1.2.7 0 1.3.6 1.3 1.2 0 .7-.6 1.3-1.3 1.3zm6.2 6.1c-.7 0-1.3-.6-1.3-1.2 0-.7.6-1.3 1.2-1.3.7 0 1.3.6 1.3 1.3 0 .6-.6 1.2-1.2 1.2zm0-6.1c-.7 0-1.3-.6-1.3-1.2 0-.7.6-1.3 1.2-1.3.7 0 1.3.6 1.3 1.2 0 .7-.6 1.3-1.2 1.3zM4.2 10h8.6c.7 0 1.2.5 1.2 1.2v8.6c0 .7-.5 1.2-1.2 1.2H4.2c-.7 0-1.2-.5-1.2-1.2v-8.6c0-.7.5-1.2 1.2-1.2zm4.3 4.3c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2zm-3.1-3.1c-.6 0-1.2.6-1.2 1.2 0 .7.6 1.3 1.2 1.3.7 0 1.3-.6 1.3-1.3 0-.6-.6-1.2-1.3-1.2zm6.2 6.1c-.7 0-1.3.6-1.3 1.3 0 .6.6 1.2 1.3 1.2.6 0 1.2-.6 1.2-1.2 0-.7-.6-1.3-1.2-1.3z' })
    )
  );
};

exports.default = Icon;