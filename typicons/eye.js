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
      _react2.default.createElement('path', { d: 'M21.8 12.4c-.1-.1-2-2.9-4.8-4.8-1.4-1-3.2-1.6-5-1.6-1.8 0-3.6.6-5 1.6-2.8 1.9-4.7 4.7-4.8 4.8-.3.4-.3.8 0 1.2.1.1 2 2.9 4.8 4.8 1.4 1 3.2 1.6 5 1.6 1.8 0 3.6-.6 5-1.6 2.8-1.9 4.7-4.7 4.8-4.8.3-.4.3-.8 0-1.2zM12 16.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm2-3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z' })
    )
  );
};

exports.default = Icon;