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
      _react2.default.createElement('path', { d: 'M18 10h-4V6c0-1.1-.9-2-2-2s-2 .9-2 2l.1 4H6c-1.1 0-2 .9-2 2s.9 2 2 2l4.1-.1L10 18c0 1.1.9 2 2 2s2-.9 2-2v-4.1l4 .1c1.1 0 2-.9 2-2s-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;