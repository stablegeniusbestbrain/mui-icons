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
      _react2.default.createElement('path', { d: 'M13 11h5l-1.5-1.5 1.4-1.4 3.9 3.9-3.9 3.9-1.4-1.4L18 13h-5v5l1.5-1.5 1.4 1.4-3.9 3.9-3.9-3.9 1.4-1.4L11 18v-5H6l1.5 1.5-1.4 1.4L2.2 12l3.9-3.9 1.4 1.4L6 11h5V6L9.5 7.5 8.1 6.1 12 2.2l3.9 3.9-1.4 1.4L13 6v5z' })
    )
  );
};

exports.default = Icon;