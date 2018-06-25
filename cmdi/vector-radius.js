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
      _react2.default.createElement('path', { d: 'M2 4h2V2h6v2c5.5 0 10 4.5 10 10h2v6h-2v2h-2v-2h-2v-6h2c0-4.4-3.6-8-8-8v2H4V6H2V4zm16 12v2h2v-2h-2zM6 4v2h2V4H6z' })
    )
  );
};

exports.default = Icon;