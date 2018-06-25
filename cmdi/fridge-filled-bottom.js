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
      _react2.default.createElement('path', { d: 'M8 8V6h2v2H8zM7 2h10c1.1 0 2 .9 2 2v15c0 1.1-.9 2-2 2v1h-2v-1H9v1H7v-1c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm0 2v5h10V4H7zm1 8v3h2v-3H8z' })
    )
  );
};

exports.default = Icon;