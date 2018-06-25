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
      _react2.default.createElement('path', { d: 'M17.7 8L12 2.4 6.3 8C4.8 9.6 4 11.6 4 13.6s.8 4.2 2.3 5.7 3.6 2.4 5.7 2.4 4.1-.8 5.7-2.4 2.3-3.7 2.3-5.7-.8-4-2.3-5.6zM6 14c0-2 .6-3.3 1.8-4.4L12 5.3l4.2 4.3C17.4 10.8 18 12 18 14H6z' })
    )
  );
};

exports.default = Icon;