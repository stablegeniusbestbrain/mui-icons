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
      _react2.default.createElement('circle', { cx: '12', cy: '4', r: '2' }),
      _react2.default.createElement('path', { d: 'M19 13v-2c-1.5 0-3.1-.7-4.1-1.8l-1.3-1.5c-.1-.2-.3-.3-.6-.4-.3-.2-.7-.3-1.2-.3-1 .1-1.8 1-1.8 2.1V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.4c1.3 1 3.3 1.9 5 1.9zm-6.2 5c-.4 1.2-1.5 2-2.8 2-1.7 0-3-1.3-3-3 0-1.3.8-2.4 2-2.8v-2.1c-2.3.5-4 2.5-4 4.9 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-4h-2.1z' })
    )
  );
};

exports.default = Icon;