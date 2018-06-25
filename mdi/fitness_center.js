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
      _react2.default.createElement('path', { d: 'M20.6 14.9l1.4-1.5-1.4-1.4-3.6 3.6L8.4 7 12 3.4 10.6 2 9.1 3.4 7.7 2 5.6 4.1 4.1 2.7 2.7 4.1l1.4 1.5L2 7.7l1.4 1.4L2 10.6 3.4 12 7 8.4l8.6 8.6-3.6 3.6 1.4 1.4 1.5-1.4 1.4 1.4 2.1-2.1 1.5 1.4 1.4-1.4-1.4-1.5 2.1-2.1z' })
    )
  );
};

exports.default = Icon;