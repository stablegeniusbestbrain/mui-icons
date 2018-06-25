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
      _react2.default.createElement('path', { d: 'M3.3 5L2 6.3l7 6.9L6.5 19h3l1.6-3.7 5.6 5.7 1.3-1.3L3.5 5.3 3.3 5zM6 5v.2L8.8 8h2.4l-.7 1.7 2.1 2.1L14.2 8H20V5H6z' })
    )
  );
};

exports.default = Icon;