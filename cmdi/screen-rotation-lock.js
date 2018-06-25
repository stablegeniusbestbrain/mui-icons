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
      _react2.default.createElement('path', { d: 'M16.8 2.5c0-.9.8-1.7 1.7-1.7s1.7.8 1.7 1.7V3h-3.4v-.5zM16 9h5c.6 0 1-.4 1-1V4c0-.5-.4-1-1-1v-.5C21 1.1 19.9 0 18.5 0S16 1.1 16 2.5V3c-.6 0-1 .5-1 1v4c0 .6.4 1 1 1zM8.5 20.5c-3.3-1.6-5.6-4.7-6-8.5H1c.5 6.2 5.7 11 11.9 11h.7l-3.8-3.9-1.3 1.4zm14.8-7.7l-2.6-2.6-1.4 1.4 2.2 2.2-5.7 5.7L4.5 8.2l5.7-5.7 2.1 2.1 1.4-1.4L11.2.8C10.6.2 9.7.2 9.1.8L2.8 7.1c-.6.6-.6 1.6 0 2.1l12 12.1c.6.5 1.5.5 2.1 0l6.4-6.4c.5-.6.5-1.5 0-2.1z' })
    )
  );
};

exports.default = Icon;