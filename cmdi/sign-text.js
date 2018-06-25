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
      _react2.default.createElement('path', { d: 'M11 3l1-1 1 1v2h7c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1h-7v3c1.1 0 2 .9 2 2H9c0-1.1.9-2 2-2v-3H4c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h7V3zM6 8v2h12V8H6zm0 4v2h7v-2H6z' })
    )
  );
};

exports.default = Icon;