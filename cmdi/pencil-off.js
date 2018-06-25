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
      _react2.default.createElement('path', { d: 'M18.7 2c-.3 0-.5.1-.7.3l-1.9 1.8 3.8 3.8L21.7 6c.4-.4.4-1 0-1.4l-2.3-2.3c-.2-.2-.5-.3-.7-.3zM3.3 4L2 5.3l6.5 6.5L4 16.3V20h3.8l4.5-4.5 6.4 6.5 1.3-1.3-6.5-6.4-3.7-3.8L3.3 4zm11.8 1.2l-4.1 4 3.8 3.8 4-4.1-3.7-3.7z' })
    )
  );
};

exports.default = Icon;