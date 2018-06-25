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
      _react2.default.createElement('path', { d: 'M19 14.5s2 2.2 2 3.5c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.3 2-3.5 2-3.5zM5 18V9c-1.1 0-2-.9-2-2s.9-2 2-2V4c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1h8c1.1 0 2 .9 2 2v4c.6 0 1 .4 1 1s-.4 1-1 1h-4c-.6 0-1-.4-1-1s.4-1 1-1V9h-6v9h1c1.1 0 2 .9 2 2v2H2v-2c0-1.1.9-2 2-2h1z' })
    )
  );
};

exports.default = Icon;