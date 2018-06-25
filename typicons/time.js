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
      _react2.default.createElement('path', { d: 'M16 13c0-.6-.4-1-1-1h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1zm-4-7c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7m0-2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm1 6c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6.4 1 1 1s1-.4 1-1v-3zm-1-2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m0-1c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z' })
    )
  );
};

exports.default = Icon;