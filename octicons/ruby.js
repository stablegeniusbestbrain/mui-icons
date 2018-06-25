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
      _react2.default.createElement('path', { d: 'M19.5 9L12 16.5V6h4.5l3 3zM24 9L12 21 0 9l6-6h12l6 6zm-12 9.8L21.8 9l-4.5-4.5H6.8L2.3 9l9.7 9.8z' })
    )
  );
};

exports.default = Icon;