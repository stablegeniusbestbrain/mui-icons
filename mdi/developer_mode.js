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
      _react2.default.createElement('path', { d: 'M7 5h10v2h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v4h2V5zm8.4 11.6L20 12l-4.6-4.6L14 8.8l3.2 3.2-3.2 3.2 1.4 1.4zM10 15.2L6.8 12 10 8.8 8.6 7.4 4 12l4.6 4.6 1.4-1.4zm7 3.8H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z' })
    )
  );
};

exports.default = Icon;