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
      _react2.default.createElement('path', { d: 'M1 4.3L2.3 3 21 21.7 19.7 23l-1.4-1.5c-.4.3-.8.5-1.3.5H7c-1 0-1.9-.8-2-1.8L3.5 6.8 1 4.3zM18.3 8l.5-4h-13l-2-2H21l-1.7 15.5L9.8 8h8.5z' })
    )
  );
};

exports.default = Icon;