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
      _react2.default.createElement('path', { d: 'M22 17h-4v-7h4m1-2h-6c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zM4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6z' })
    )
  );
};

exports.default = Icon;