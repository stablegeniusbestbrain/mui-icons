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
      _react2.default.createElement('path', { d: 'M17.3 3.6C15.9 2.6 14 2 12 2c-1.9 0-3.5.5-4.9 1.3C4.4 5 2.7 8 2.7 11.9 2.7 17.2 6.4 22 12 22c5.6 0 9.3-4.8 9.3-10.1 0-3.7-1.5-6.6-4-8.3zm-5.3.2c3 0 3.6 4.1 3.6 7.9 0 3.5-.3 8.2-3.6 8.2-3.2 0-3.6-4.7-3.6-8.2 0-3.8.6-7.9 3.6-7.9z' })
    )
  );
};

exports.default = Icon;