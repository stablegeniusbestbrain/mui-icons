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
      _react2.default.createElement('path', { d: 'M18.5 6c-3 0-5.5 2.5-5.5 5.5 0 1.3.5 2.6 1.3 3.5H9.7c.8-.9 1.3-2.2 1.3-3.5C11 8.5 8.5 6 5.5 6S0 8.5 0 11.5 2.5 17 5.5 17h13c3 0 5.5-2.5 5.5-5.5S21.5 6 18.5 6zm-13 9C3.6 15 2 13.4 2 11.5S3.6 8 5.5 8 9 9.6 9 11.5 7.4 15 5.5 15zm13 0c-1.9 0-3.5-1.6-3.5-3.5S16.6 8 18.5 8 22 9.6 22 11.5 20.4 15 18.5 15z' })
    )
  );
};

exports.default = Icon;