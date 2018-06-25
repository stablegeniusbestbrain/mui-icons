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
      _react2.default.createElement('path', { d: 'M19 11.5s-2 2.2-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.3-2-3.5-2-3.5zM14.7 10H5.2L10 5.2l4.7 4.8zm1.9-1.1L7.6 0 6.2 1.4l2.4 2.4-5.2 5.1c-.5.6-.5 1.6 0 2.2l5.5 5.5c.3.3.7.4 1.1.4s.8-.1 1.1-.4l5.5-5.5c.5-.6.5-1.6 0-2.2zM0 20h24v4H0z' })
    )
  );
};

exports.default = Icon;