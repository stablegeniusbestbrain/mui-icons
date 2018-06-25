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
      _react2.default.createElement('path', { d: 'M6 2c2.2 0 4 1.8 4 4v2h4V6c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4h-2v4h2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4v-2h-4v2c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4h2v-4H6c-2.2 0-4-1.8-4-4s1.8-4 4-4zm10 16c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2h-2v2zm-2-8h-4v4h4v-4zm-8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2v-2H6zM8 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2h2V6zm10 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2v2h2z' })
    )
  );
};

exports.default = Icon;