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
      _react2.default.createElement('path', { d: 'M11 1.1C7.1 1.6 4 4.9 4 9h7m-7 6c0 4.4 3.6 8 8 8s8-3.6 8-8v-4H4m9-9.9V9h7c0-4.1-3.1-7.4-7-7.9z' })
    )
  );
};

exports.default = Icon;