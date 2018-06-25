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
      _react2.default.createElement('path', { d: 'M11 3h2v7.3l6.3-3.7 1 1.8L14 12l6.3 3.6-1 1.8-6.3-3.7V21h-2v-7.3l-6.3 3.7-1-1.8L10 12 3.7 8.4l1-1.8 6.3 3.7V3z' })
    )
  );
};

exports.default = Icon;