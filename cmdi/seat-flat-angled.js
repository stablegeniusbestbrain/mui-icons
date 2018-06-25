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
      _react2.default.createElement('path', { d: 'M22.3 14.3l-.7 1.9-12.4-4.5 2.1-5.6 8.5 3c2.1.8 3.2 3.1 2.5 5.2zM1.5 12.1L8 14.5V19h8v-1.6l4.5 1.6.7-1.9-19-6.8m5.1-.1c1.5-.7 2.1-2.5 1.4-4-.7-1.5-2.5-2.1-4-1.4-1.5.7-2.1 2.5-1.4 4 .7 1.5 2.5 2.1 4 1.4z' })
    )
  );
};

exports.default = Icon;