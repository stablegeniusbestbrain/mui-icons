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
      _react2.default.createElement('path', { d: 'M15 22c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v6c0 .6-.4 1-1 1zm-6 0c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v6c0 .6-.4 1-1 1zm3 2c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v6c0 .6-.4 1-1 1zm-6-6c-2.2 0-4-1.8-4-4 0-1.9 1.3-3.4 3-3.9V10c0-3.3 2.7-6 6-6 2.6 0 4.8 1.6 5.6 4 3-.2 5.4 2.1 5.4 5 0 2.2-1.5 4.2-3.7 4.8-.5.2-1-.1-1.2-.7-.1-.5.2-1.1.7-1.2 1.3-.4 2.2-1.6 2.2-2.9 0-1.7-1.3-3-3-3-.2 0-.5 0-.8.1l-1.1.3-.2-1.1C14.6 7.4 13 6 11 6c-2.2 0-4 1.8-4 4 0 .3 0 .5.1.8l.2 1.2H5.9c-1 0-1.9.9-1.9 2s.9 2 2 2c.6 0 1 .4 1 1s-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;