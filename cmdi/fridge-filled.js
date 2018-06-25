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
      _react2.default.createElement('path', { d: 'M7 2h10c1.1 0 2 .9 2 2v5H5V4c0-1.1.9-2 2-2zm12 17c0 1.1-.9 2-2 2v1h-2v-1H9v1H7v-1c-1.1 0-2-.9-2-2v-9h14v9zM8 5v2h2V5H8zm0 7v3h2v-3H8z' })
    )
  );
};

exports.default = Icon;