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
      _react2.default.createElement('path', { d: 'M19 8h-2.4c.3-.5.4-1 .4-1.5C17 4.6 15.4 3 13.5 3c-1 0-1.9.4-2.5 1.1C10.4 3.4 9.5 3 8.5 3 6.6 3 5 4.6 5 6.5c0 .5.1 1 .4 1.5H3c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1v5c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-5c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zm-1 4h-5v-2h5v2zm-8-5h2v1h-2V7zm2 3v2h-2v-2h2zm1.5-5c.8 0 1.5.7 1.5 1.5S14.3 8 13.5 8c-.2 0-.3 0-.5-.1V7c0-.5-.4-.9-.9-1 .2-.6.7-1 1.4-1zM7 6.5C7 5.7 7.7 5 8.5 5c.7 0 1.2.4 1.4 1-.5.1-.9.5-.9 1v.9c-.2.1-.3.1-.5.1C7.7 8 7 7.3 7 6.5zM9 10v2H4v-2h5zM6 20c-.5 0-1-.4-1-1v-6h4v7H6zm4 0v-7h2v7h-2zm6 0h-3v-7h4v6c0 .6-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;