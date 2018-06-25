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
      _react2.default.createElement('path', { d: 'M5.8 2H7v7l2.5-1.5L12 9V2h6c1.1 0 2 .9 2 2v16c0 1-1 2-2 2H6c-1 0-2-1-2-2V4c0-1 .8-1.9 1.8-2zm7.2 8v3h-3v2h3v5h2v-5h3v-2h-3v-3h-2z' })
    )
  );
};

exports.default = Icon;