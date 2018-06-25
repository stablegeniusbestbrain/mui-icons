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
      _react2.default.createElement('path', { d: 'M1 21h12v2H1zM5.2 8.1l2.9-2.9 14.1 14.2-2.8 2.8zM12.3 1L18 6.7l-2.9 2.8-5.6-5.7zM3.8 9.5l5.7 5.6L6.7 18 1 12.3z' })
    )
  );
};

exports.default = Icon;