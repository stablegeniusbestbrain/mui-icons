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
      _react2.default.createElement('path', { d: 'M11.7 7.5h3L12 21H9l2.7-13.5zm.6-4.1c0-1 .8-1.9 2-1.9.8 0 1.6.6 1.6 1.5 0 1.2-.8 2-2 2-.8 0-1.6-.6-1.6-1.6z' })
    )
  );
};

exports.default = Icon;