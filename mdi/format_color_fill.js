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
      _react2.default.createElement('path', { d: 'M16.6 8.9L7.6 0 6.2 1.4l2.4 2.4-5.2 5.1c-.6.6-.6 1.6 0 2.2l5.5 5.5c.3.3.7.4 1.1.4s.8-.1 1.1-.4l5.5-5.5c.6-.6.6-1.6 0-2.2zM5.2 10L10 5.2l4.8 4.8H5.2zM19 11.5s-2 2.2-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.3-2-3.5-2-3.5z' }),
      _react2.default.createElement('path', { d: 'M0 20h24v4H0z' })
    )
  );
};

exports.default = Icon;