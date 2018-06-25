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
      _react2.default.createElement('path', { d: 'M20 2v2h-2v4.4L14.4 12l3.6 3.6V20h2v2H4v-2h2v-4.4L9.6 12 6 8.4V4H4V2h16zm-4 14.4l-3-3v-2.8l3-3V4H8v3.6l3 3v2.8l-3 3v.6h2l2-2 2 2h2v-.6zM12 9l-2-2h4l-2 2z' })
    )
  );
};

exports.default = Icon;