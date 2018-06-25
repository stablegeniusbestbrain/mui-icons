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
      _react2.default.createElement('path', { d: 'M6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm7 1.5V9h5.5L13 3.5zm4 7.5h-4v2h1l-2 1.7-2-1.7h1v-2H7v2h1l3 2.5L8 18H7v2h4v-2h-1l2-1.7 2 1.7h-1v2h4v-2h-1l-3-2.5 3-2.5h1v-2z' })
    )
  );
};

exports.default = Icon;