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
      _react2.default.createElement('path', { d: 'M4 1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2H1v2h12V9h-3c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4zm0 2h6v4H4V3zm10 10c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h-3v2h12v-2h-3c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-6zm-10.1.5l-1.4 1.4L4.6 17l-2.1 2.1 1.4 1.4L6 18.4l2.1 2.1 1.4-1.4L7.4 17l2.1-2.1-1.4-1.4L6 15.6l-2.1-2.1zM14 15h6v4h-6v-4z' })
    )
  );
};

exports.default = Icon;