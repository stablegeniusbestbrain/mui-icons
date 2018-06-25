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
      _react2.default.createElement('path', { d: 'M18 14c0-4-6-10.8-6-10.8s-1.3 1.5-2.7 3.5l8.6 8.6c0-.4.1-.9.1-1.3zm-.9 3.1l-4.6-4.6-7.2-7.2L4 6.5l3.3 3.4C6.5 11.3 6 12.8 6 14c0 3.3 2.7 6 6 6 1.5 0 2.9-.6 4-1.5l2.6 2.6 1.3-1.2-2.8-2.8z' })
    )
  );
};

exports.default = Icon;