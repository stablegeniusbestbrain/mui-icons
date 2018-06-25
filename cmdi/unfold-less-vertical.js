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
      _react2.default.createElement('path', { d: 'M5.4 7.4L10 12l-4.6 4.6L4 15.2 7.2 12 4 8.8l1.4-1.4zm13.2 9.2L14 12l4.6-4.6L20 8.8 16.8 12l3.2 3.2-1.4 1.4z' })
    )
  );
};

exports.default = Icon;