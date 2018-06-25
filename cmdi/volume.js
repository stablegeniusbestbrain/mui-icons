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
      _react2.default.createElement('path', { d: 'M3 9h4l5-5v16l-5-5H3V9zm18 3c0 4.3-3 7.9-7 8.8v-2.1c2.9-.8 5-3.5 5-6.7s-2.1-5.8-5-6.7V3.2c4 .9 7 4.5 7 8.8zm-4 0c0 2.1-1.2 3.8-3 4.6V7.4c1.8.8 3 2.5 3 4.6z' })
    )
  );
};

exports.default = Icon;