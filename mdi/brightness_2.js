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
      _react2.default.createElement('path', { d: 'M10 2c-1.8 0-3.5.5-5 1.4 3 1.7 5 4.9 5 8.6s-2 6.9-5 8.6c1.5.9 3.2 1.4 5 1.4 5.5 0 10-4.5 10-10S15.5 2 10 2z' })
    )
  );
};

exports.default = Icon;