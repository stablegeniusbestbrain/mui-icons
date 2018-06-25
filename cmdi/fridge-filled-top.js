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
      _react2.default.createElement('path', { d: 'M7 2c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2v1h2v-1h6v1h2v-1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7zm1 4h2v2H8V6zm-1 5h10v8H7v-8zm1 1v3h2v-3H8z' })
    )
  );
};

exports.default = Icon;