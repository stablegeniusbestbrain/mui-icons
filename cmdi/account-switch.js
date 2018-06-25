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
      _react2.default.createElement('path', { d: 'M16 9c2.3 0 7 1.2 7 3.5V15h-6v-2.5c0-1.5-.8-2.6-2-3.4l1-.1zM8 9c2.3 0 7 1.2 7 3.5V15H1v-2.5C1 10.2 5.7 9 8 9zm0-2C6.3 7 5 5.7 5 4s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm8 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm-7 9.8V19h6v-2.2l3.3 3.2-3.3 3.3V21H9v2.3L5.8 20 9 16.8z' })
    )
  );
};

exports.default = Icon;