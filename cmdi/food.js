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
      _react2.default.createElement('path', { d: 'M15.5 21L14 8h2.2l-1.1-4.5 1.7-.5 1.3 5H22l-1.5 13h-5zM5 11h5c1.7 0 3 1.3 3 3H2c0-1.7 1.3-3 3-3zm8 7c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3h11zM3 15h5l1.5 1.5L11 15h1c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1z' })
    )
  );
};

exports.default = Icon;