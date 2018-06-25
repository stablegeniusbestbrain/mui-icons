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
      _react2.default.createElement('path', { d: 'M14.5 4L12 10l5 2.9L9.5 20l2.5-6-5-2.9L14.5 4m0-2c-.6 0-1 .2-1.4.5L5.6 9.6c-.4.5-.7 1.1-.6 1.7.1.7.5 1.2 1 1.5l3.5 2.1-1.8 4.3c-.4.9-.1 1.9.7 2.4.3.3.7.4 1.1.4.5 0 1-.2 1.4-.5l7.5-7.1c.4-.5.7-1.1.6-1.7-.1-.7-.5-1.2-1-1.5l-3.5-2 1.8-4.3c.1-.3.2-.6.2-.9 0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;