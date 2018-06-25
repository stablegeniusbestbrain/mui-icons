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
      _react2.default.createElement('path', { d: 'M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm2.5 12c-.8 0-1.5.7-1.5 1.5S6.7 18 7.5 18 9 17.3 9 16.5 8.3 15 7.5 15zM6 10v2c3.3 0 6 2.7 6 6h2c0-4.4-3.6-8-8-8zm0-4v2c5.5 0 10 4.5 10 10h2c0-6.6-5.4-12-12-12z' })
    )
  );
};

exports.default = Icon;