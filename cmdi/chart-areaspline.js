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
      _react2.default.createElement('path', { d: 'M17.5 15.2L22 7.3V21H2V3h2v12.5L9.5 6 16 9.8l4.2-7.4 1.8 1-5.3 9.1-6.5-3.8L4.3 19h2.3l4.4-7.6 6.5 3.8z' })
    )
  );
};

exports.default = Icon;