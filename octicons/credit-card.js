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
      _react2.default.createElement('path', { d: 'M18 13.5H3V12h15v1.5zm6-9V18c0 .8-.7 1.5-1.5 1.5h-21C.7 19.5 0 18.8 0 18V4.5C0 3.7.7 3 1.5 3h21c.8 0 1.5.7 1.5 1.5zM22.5 9h-21v9h21V9zm0-4.5h-21V6h21V4.5zM9 15H3v1.5h6V15z' })
    )
  );
};

exports.default = Icon;