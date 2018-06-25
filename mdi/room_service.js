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
      _react2.default.createElement('path', { d: 'M2 17h20v2H2zm11.8-9.2c.1-.3.2-.5.2-.8 0-1.1-.9-2-2-2s-2 .9-2 2c0 .3.1.5.2.8-3.9.8-6.9 4.1-7.2 8.2h18c-.3-4.1-3.2-7.4-7.2-8.2z' })
    )
  );
};

exports.default = Icon;