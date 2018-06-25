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
      _react2.default.createElement('path', { d: 'M13 14c-3.4 0-4.5 1.3-4.8 2.2 1 .5 1.8 1.6 1.8 2.8 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1.3.8-2.4 2-2.8V7.8C4.8 7.4 4 6.3 4 5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.3-.8 2.4-2 2.8v5.3c.9-.6 2.2-1.1 4-1.1 2.7 0 3.6-1.3 3.9-2.2C14.8 9.3 14 8.3 14 7c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.3-.9 2.5-2.1 2.9-.2 1.4-1.2 4.1-4.9 4.1zm-6 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zM7 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm10 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;