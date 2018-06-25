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
      _react2.default.createElement('path', { d: 'M9 5c1 0 2.1.2 3 .7.9-.5 2-.7 3-.7 3.9 0 7 3.1 7 7s-3.1 7-7 7c-1 0-2.1-.2-3-.7-.9.5-2 .7-3 .7-3.9 0-7-3.1-7-7s3.1-7 7-7zm0 7c0 2.2 1.2 4.2 3 5.2 1.8-1 3-3 3-5.2s-1.2-4.2-3-5.2c-1.8 1-3 3-3 5.2z' })
    )
  );
};

exports.default = Icon;