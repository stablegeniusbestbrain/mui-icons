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
      _react2.default.createElement('path', { d: 'M13 15.5V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5M18 9.5V6c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v12c0 .5.4 1 1 1h14c.6 0 1-.5 1-1v-3.5l4 4v-13l-4 4z' })
    )
  );
};

exports.default = Icon;