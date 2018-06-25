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
      _react2.default.createElement('path', { d: 'M10 21v-2H6.4l4.5-4.5-1.4-1.4L5 17.6V14H3v7h7zm4.5-10.1L19 6.4V10h2V3h-7v2h3.6l-4.5 4.5 1.4 1.4z' })
    )
  );
};

exports.default = Icon;