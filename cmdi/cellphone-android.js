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
      _react2.default.createElement('path', { d: 'M17.3 18H6.8V4h10.5M14 21h-4v-1h4m2-19H8C6.3 1 5 2.3 5 4v16c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3V4c0-1.7-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;