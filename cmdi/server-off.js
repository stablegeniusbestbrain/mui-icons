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
      _react2.default.createElement('path', { d: 'M4 1h16c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H8.8l-2-2H7V3H5v.2L3.2 1.4c.2-.2.5-.4.8-.4zm18 21.7L20.7 24l-1-1H4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h9.7l-2-2H4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h1.7l-2-2.1c-.3-.1-.5-.3-.6-.6L1 4.3 2.3 3 22 22.7zM20 9c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-3.2l-6-6H20zm0 8c.6 0 1 .4 1 1v1.2L18.8 17H20zM9 5h1V3H9v2zm0 8h.7l-.7-.7v.7zm0 8h1v-2H9v2zM5 11v2h2v-2H5zm0 8v2h2v-2H5z' })
    )
  );
};

exports.default = Icon;