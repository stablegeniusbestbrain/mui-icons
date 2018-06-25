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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M426.666 330.667c-26.666 0-52.27-4.27-75.73-11.73-7.468-2.135-16-1.072-21.33 5.334l-46.94 46.93c-60.802-30.93-109.864-80-140.802-140.804l46.94-46.927c5.33-5.334 7.46-13.865 5.33-21.334-8.536-24.53-12.8-50.136-12.8-76.803 0-11.73-9.6-21.333-21.334-21.333H85.333C73.6 64 64 73.604 64 85.333 64 285.863 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.73-9.604-21.333-21.334-21.333z' })
      )
    )
  );
};

exports.default = Icon;