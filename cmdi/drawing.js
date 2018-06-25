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
      _react2.default.createElement('path', { d: 'M8.5 3c3 0 5.5 2.5 5.5 5.5 0 1.3-.5 2.6-1.3 3.5H21v9h-9v-8.3c-.9.8-2.2 1.3-3.5 1.3-3 0-5.5-2.5-5.5-5.5S5.5 3 8.5 3z' })
    )
  );
};

exports.default = Icon;