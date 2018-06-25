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
      _react2.default.createElement('path', { d: 'M17.6 5.8c-.3-.5-.9-.8-1.6-.8H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h11c.7 0 1.3-.3 1.6-.8L22 12l-4.4-6.2zM16 17H5V7h11l3.6 5-3.6 5z' })
    )
  );
};

exports.default = Icon;