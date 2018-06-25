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
      _react2.default.createElement('path', { d: 'M9 2c-.6 0-1 .4-1 1v17c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-5V3c0-.6-.4-1-1-1zm1 7h5v4h-5V9z' })
    )
  );
};

exports.default = Icon;