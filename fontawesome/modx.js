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
      _react2.default.createElement('path', { d: 'M19.1 9.5l-8.2-5.2 1.2-2h11.5zM5.4 13L3 11.5V0l15.8 10zm13.7-1.8l1.9 1.3V24l-7.1-4.5zm-.5-.2l-6.7 10.7H.4L5.2 14z' })
    )
  );
};

exports.default = Icon;