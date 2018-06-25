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
      _react2.default.createElement('path', { d: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 6h8v12H3V6zm18 12h-9V6h9v12zm-1-4.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-3zm-3-6c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5v-5zm1.5 2.5h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5zm0 2h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5zm-5 3h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5s.2.5.5.5zm3 1h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm2-8h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5zM10 7.5c0-.3-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-3zM9.5 14h-5c-.3 0-.5.2-.5.5s.2.5.5.5h5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0-2h-5c-.3 0-.5.2-.5.5s.2.5.5.5h5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0 4h-5c-.3 0-.5.2-.5.5s.2.5.5.5h5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z' })
    )
  );
};

exports.default = Icon;