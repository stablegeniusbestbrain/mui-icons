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
      _react2.default.createElement('path', { d: 'M11.5 9C10.1 9 9 10.1 9 11.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5S12.9 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.2 14.2l-2.9-2.9c-.7.4-1.5.7-2.4.7C9 16 7 14 7 11.5S9 7 11.5 7 16 9 16 11.5c0 .9-.3 1.7-.7 2.4l2.9 2.9-1.4 1.4z' })
    )
  );
};

exports.default = Icon;