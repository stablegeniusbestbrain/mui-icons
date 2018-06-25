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
      _react2.default.createElement('path', { d: 'M21 16.5c0 .4-.2.7-.5.9l-7.9 4.4c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-7.9-4.4c-.3-.2-.5-.5-.5-.9v-9c0-.4.2-.7.5-.9l7.9-4.4c.2-.1.4-.2.6-.2.2 0 .4.1.6.2l7.9 4.4c.3.2.5.5.5.9v9zM5 9v6h1.3v-2H7c1.1 0 2-.9 2-2s-.9-2-2-2H5zm1.3 3v-2h.5c.5 0 1 .4 1 1s-.5 1-1 1h-.5zm3.5-3v6H11v-2h.8l.6 2h1.3l-.8-2.4c.5-.4.9-.9.9-1.6 0-1.1-.9-2-2-2h-2zm1.2 3v-2h.5c.6 0 1 .4 1 1s-.4 1-1 1H11zm6-3c-1.4 0-2.5 1.3-2.5 3s1.1 3 2.5 3 2.5-1.3 2.5-3-1.1-3-2.5-3zm0 1.3c.8 0 1.4.7 1.4 1.7s-.6 1.8-1.4 1.8c-.8 0-1.4-.8-1.4-1.8s.6-1.7 1.4-1.7z' })
    )
  );
};

exports.default = Icon;