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
      _react2.default.createElement('path', { d: 'M11 5.1V2c-5 .5-9 4.8-9 10s4 9.5 9 10v-3.1c-3-.5-6-3.4-6-6.9s3-6.4 6-6.9zm8 5.9h3c-.5-5-4-8.5-9-9v3.1c3 .4 5.5 2.9 6 5.9zm-6 7.9V22c5-.5 8.5-4 9-9h-3c-.5 3-3 5.5-6 5.9z' })
    )
  );
};

exports.default = Icon;