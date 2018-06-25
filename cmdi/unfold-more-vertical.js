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
      _react2.default.createElement('path', { d: 'M18.2 12L15 8.8l1.4-1.4L21 12l-4.6 4.6-1.4-1.4 3.2-3.2zM5.8 12L9 15.2l-1.4 1.4L3 12l4.6-4.6L9 8.8 5.8 12z' })
    )
  );
};

exports.default = Icon;