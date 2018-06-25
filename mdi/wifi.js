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
      _react2.default.createElement('path', { d: 'M1 9l2 2c5-5 13-5 18 0l2-2C16.9 2.9 7.1 2.9 1 9zm8 8l3 3 3-3c-1.7-1.7-4.3-1.7-6 0zm-4-4l2 2c2.8-2.8 7.2-2.8 10 0l2-2C15.1 9.1 8.9 9.1 5 13z' })
    )
  );
};

exports.default = Icon;