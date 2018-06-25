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
      _react2.default.createElement('path', { d: 'M16.5 6v11.5c0 2.2-1.8 4-4 4s-4-1.8-4-4V5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v10.5c0 .6-.4 1-1 1s-1-.4-1-1V6H10v9.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V5c0-2.2-1.8-4-4-4S7 2.8 7 5v12.5c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5V6h-1.5z' })
    )
  );
};

exports.default = Icon;