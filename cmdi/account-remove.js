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
      _react2.default.createElement('path', { d: 'M15 14c2.7 0 8 1.3 8 4v2H7v-2c0-2.7 5.3-4 8-4zm0-2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM5 9.6l2.1-2.1 1.4 1.4L6.4 11l2.1 2.1-1.4 1.4L5 12.4l-2.1 2.1-1.4-1.4L3.6 11 1.5 8.9l1.4-1.4L5 9.6z' })
    )
  );
};

exports.default = Icon;