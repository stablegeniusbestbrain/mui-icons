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
      _react2.default.createElement('path', { d: 'M5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6V3m2 0v8h8V5c0-1.1-.9-2-2-2m-6 10v8h6c1.1 0 2-.9 2-2v-6' })
    )
  );
};

exports.default = Icon;