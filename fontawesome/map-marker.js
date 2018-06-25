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
      _react2.default.createElement('path', { d: 'M15.4 8.6q0-1.4-1-2.5t-2.4-1-2.4 1-1 2.5 1 2.4 2.4 1 2.4-1 1-2.4zm3.5 0q0 1.4-.5 2.4l-4.9 10.3q-.2.5-.6.7t-.9.3-.9-.3-.6-.7L5.6 11q-.5-1-.5-2.4 0-2.9 2.1-4.9t4.8-2 4.8 2 2.1 4.9z' })
    )
  );
};

exports.default = Icon;