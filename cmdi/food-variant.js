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
      _react2.default.createElement('path', { d: 'M22 18c0 2.2-1.8 4-4 4h-3c-2.2 0-4-1.8-4-4v-2h6.8l2.7-4.8 1.6.9-2.2 3.9H22v2zM9 22H2c0-3 0-6 .3-9.2.3-2.5.8-5.1 1.3-7.8H3V3h5v2h-.6c.5 2.7 1 5.3 1.3 7.8C9 16 9 19 9 22z' })
    )
  );
};

exports.default = Icon;