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
      _react2.default.createElement('path', { d: 'M6.5 3c2 0 3.6 1.3 4.2 3H22v3h-4v3h-3V9h-4.3c-.6 1.7-2.2 3-4.2 3C4 12 2 10 2 7.5S4 3 6.5 3zm0 3C5.7 6 5 6.7 5 7.5S5.7 9 6.5 9 8 8.3 8 7.5 7.3 6 6.5 6zM8 17h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z' })
    )
  );
};

exports.default = Icon;