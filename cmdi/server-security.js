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
      _react2.default.createElement('path', { d: 'M3 1h16c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1zm0 8h16c.6 0 1 .4 1 1v.7l-2.5-1.1-6.5 2.8V15H3c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zm0 8h8c.1 2.3 1 4.4 2.5 6H3c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zM8 5h1V3H8v2zm0 8h1v-2H8v2zm0 8h1v-2H8v2zM4 3v2h2V3H4zm0 8v2h2v-2H4zm0 8v2h2v-2H4zm13.5-7l4.5 2v3c0 2.8-1.9 5.4-4.5 6-2.6-.6-4.5-3.2-4.5-6v-3l4.5-2zm0 1.9L15 15.1v2.6c0 1.6 1.1 3 2.5 3.4v-7.2z' })
    )
  );
};

exports.default = Icon;