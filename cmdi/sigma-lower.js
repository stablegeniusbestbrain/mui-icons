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
      _react2.default.createElement('path', { d: 'M19 12c0 4.4-3.4 8-7.5 8S4 16.4 4 12s3.4-8 7.5-8H20v2h-3.5C18 7.5 19 9.6 19 12zm-7.5-6C8.5 6 6 8.7 6 12s2.5 6 5.5 6 5.5-2.7 5.5-6-2.5-6-5.5-6z' })
    )
  );
};

exports.default = Icon;