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
      _react2.default.createElement('path', { d: 'M10 2c1.1 0 2 .9 2 2v4.5s2-.2 2 .8c0 0 2-.3 2 .7 0 0 2-.2 2 .8 0 0 2-.3 2 .7V15c0 1-3 6-3 7H9s-2-7-5-9c0 0-1-6 4-1V4c0-1.1.9-2 2-2z' })
    )
  );
};

exports.default = Icon;