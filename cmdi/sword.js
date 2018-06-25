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
      _react2.default.createElement('path', { d: 'M6.9 5H5l9 9 1-.9m5 6l-.9.9c-.4.4-1 .4-1.4 0l-3.1-3.2-2.7 2.7-1.4-1.4 1.4-1.4L3 7.8V3h4.8l8.9 8.9 1.4-1.4 1.4 1.4-2.7 2.7 3.2 3.1c.4.4.4 1 0 1.4z' })
    )
  );
};

exports.default = Icon;