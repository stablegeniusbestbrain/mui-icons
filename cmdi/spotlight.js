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
      _react2.default.createElement('path', { d: 'M2 6l5.1 2.5C6.4 9.5 6 10.7 6 12s.4 2.5 1.1 3.5L2 18V6zm4-3h12l-2.5 4.1C14.5 6.4 13.3 6 12 6s-2.5.4-3.5 1.1L6 3zm16 3v12l-5.1-2.5c.7-1 1.1-2.2 1.1-3.5s-.4-2.5-1.1-3.5L22 6zm-4 15H6l2.5-4.1c1 .7 2.2 1.1 3.5 1.1s2.5-.4 3.5-1.1L18 21zM12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;