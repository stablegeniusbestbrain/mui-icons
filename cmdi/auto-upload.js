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
      _react2.default.createElement('path', { d: 'M5.3 12.6L6.5 9l1.2 3.6M5.5 7l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L7.5 7M11 20h11v-2H11m3-2h5v-5h3l-5.5-5.5L11 11h3v5z' })
    )
  );
};

exports.default = Icon;