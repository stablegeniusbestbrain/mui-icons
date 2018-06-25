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
      _react2.default.createElement('path', { d: 'M21.5 10.8l-8.3-8.3c-.7-.7-1.7-.7-2.4 0l-8.3 8.3c-.7.7-.7 1.7 0 2.4l8.3 8.3c.7.7 1.7.7 2.4 0l8.3-8.3c.6-.7.6-1.7 0-2.4M20.3 12L12 20.3 3.7 12 12 3.7l8.3 8.3z' })
    )
  );
};

exports.default = Icon;