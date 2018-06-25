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
      _react2.default.createElement('path', { d: 'M4 6c0 1.2.4 2.3 1 3-1.7 0-3-1.3-3-3s1.3-3 3-3c-.6.7-1 1.8-1 3zM2 21v-2h2.8L12 4.8 19.2 19H22v2H2zM12 9.2L7 19h10l-5-9.8z' })
    )
  );
};

exports.default = Icon;