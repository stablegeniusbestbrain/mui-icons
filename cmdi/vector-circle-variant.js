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
      _react2.default.createElement('path', { d: 'M22 9h-2c-1.3-3.6-4.7-6-8.5-6-5 0-9 4-9 9s4 9 9 9c3.8 0 7.2-2.4 8.5-6h2m-2-4v2h-2v-2m-.2 4c-1.1 2.4-3.6 4-6.3 4-3.9 0-7-3.1-7-7s3.1-7 7-7c2.7 0 5.2 1.6 6.3 4H16v6' })
    )
  );
};

exports.default = Icon;