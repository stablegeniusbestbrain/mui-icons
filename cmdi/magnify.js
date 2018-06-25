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
      _react2.default.createElement('path', { d: 'M9.5 3C13.1 3 16 5.9 16 9.5c0 1.6-.6 3.1-1.6 4.2l.3.3h.8l5 5-1.5 1.5-5-5v-.8l-.3-.3c-1.1 1-2.6 1.6-4.2 1.6C5.9 16 3 13.1 3 9.5S5.9 3 9.5 3zm0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z' })
    )
  );
};

exports.default = Icon;