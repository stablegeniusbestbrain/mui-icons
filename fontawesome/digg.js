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
      _react2.default.createElement('path', { d: 'M2.7 3.8h2.7v13.1h-7.1V7.6h4.4V3.8zm0 10.9V9.8H1v4.9h1.7zm3.8-7.1v9.3h2.8V7.6H6.5zm0-3.8v2.7h2.8V3.8H6.5zm3.9 3.8h7.1v12.6h-7.1V18h4.3v-1.1h-4.3V7.6zm4.3 7.1V9.8h-1.6v4.9h1.6zm3.9-7.1h7.1v12.6h-7.1V18H23v-1.1h-4.4V7.6zm4.4 7.1V9.8h-1.7v4.9H23z' })
    )
  );
};

exports.default = Icon;