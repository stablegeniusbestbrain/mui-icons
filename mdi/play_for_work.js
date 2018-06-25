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
      _react2.default.createElement('path', { d: 'M11 5v5.6H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.3 2.7 6 6 6s6-2.7 6-6h-2c0 2.2-1.8 4-4 4s-4-1.8-4-4H6z' })
    )
  );
};

exports.default = Icon;