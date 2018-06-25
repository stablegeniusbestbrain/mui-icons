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
      _react2.default.createElement('path', { d: 'M22 12.5s2 2.2 2 3.5c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.3 2-3.5 2-3.5zM6 6h4c.6 0 1 .4 1 1s-.4 1-1 1H9v2h2c.7 0 1.4.4 1.7 1l6.5-3.8 3.3 1.9c.5.3.6.9.4 1.4-.3.5-.9.6-1.4.4l-2.1-1.3-3.6 6.4c-.4.6-1 1-1.8 1H5c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h2V8H6c-.6 0-1-.4-1-1s.4-1 1-1zm-1 6v3h9l2.1-3.6-3.5 2-.9-1.4H5zM.4 9.2l1.7-1.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-1.7 1.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4z' })
    )
  );
};

exports.default = Icon;