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
      _react2.default.createElement('path', { d: 'M23 11h-5c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1zm0 9h-5v-7h5v7zM20 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.1-.9-2-2-2zm-8 7l-1-3-1 3H7l2.5 1.8-1 2.9 2.5-1.8 2.5 1.8-1-2.9L15 9h-3z' })
    )
  );
};

exports.default = Icon;