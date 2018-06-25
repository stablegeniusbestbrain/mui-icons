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
      _react2.default.createElement('path', { d: 'M13 6v5h5V7.8l4.3 4.2-4.3 4.3V13h-5v5h3.3L12 22.3 7.8 18H11v-5H6v3.3L1.8 12 6 7.8V11h5V6H7.8L12 1.8 16.3 6H13z' })
    )
  );
};

exports.default = Icon;