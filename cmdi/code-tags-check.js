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
      _react2.default.createElement('path', { d: 'M6.6 3.4L2 8l4.6 4.6L8 11.2 4.8 8 8 4.8 6.6 3.4zm5.8 0L11 4.8 14.2 8 11 11.2l1.4 1.4L17 8l-4.6-4.6zm9.2 8.2l-8.1 8.1L9.8 16l-1.4 1.4 5.1 5.1L23 13l-1.4-1.4z' })
    )
  );
};

exports.default = Icon;