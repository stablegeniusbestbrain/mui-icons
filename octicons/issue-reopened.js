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
      _react2.default.createElement('path', { d: 'M13.5 13.5h-3V6h3v7.5zm-3 4.5h3v-3h-3v3zm9.5-3h-3.5l2.3 2.3c-1.6 1.9-4.1 3.3-6.8 3.3A8.6 8.6 0 0 1 3.4 12c0-.5.1-1 .2-1.5h-2c-.1.5-.1 1-.1 1.5 0 5.8 4.7 10.5 10.5 10.5 3.3 0 6.2-1.5 8.1-3.9l2.4 2.4v-6H20zM4 9h3.5L5.3 6.8c1.5-2 4-3.4 6.7-3.4 4.7 0 8.6 3.9 8.6 8.6 0 .5-.1 1-.2 1.5h2c.1-.5.1-1 .1-1.5 0-5.8-4.7-10.5-10.5-10.5-3.3 0-6.2 1.5-8.1 3.9L1.5 3v6H4z' })
    )
  );
};

exports.default = Icon;