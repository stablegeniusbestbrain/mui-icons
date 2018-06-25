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
      _react2.default.createElement('path', { d: 'M17.7 5.3a8.15 8.15 0 0 0-11.4 0c-3.1 3.1-3.1 8.1 0 11.1L12 22l5.7-5.6c3.1-3 3.1-8 0-11.1zM12 13.5c-.7 0-1.3-.3-1.8-.7-.9-1-.9-2.6 0-3.6.5-.4 1.1-.7 1.8-.7s1.3.3 1.8.7c.9 1 .9 2.6 0 3.6-.5.4-1.1.7-1.8.7z' })
    )
  );
};

exports.default = Icon;