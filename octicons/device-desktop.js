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
      _react2.default.createElement('path', { d: 'M22.5 3h-21C.7 3 0 3.7 0 4.5V18c0 .8.7 1.5 1.5 1.5h8c-.4.9-1.3 2.1-3.5 3h12c-2.2-.9-3.1-2.1-3.5-3h8c.8 0 1.5-.7 1.5-1.5V4.5c0-.8-.7-1.5-1.5-1.5zm0 13.5h-21v-12h21v12z' })
    )
  );
};

exports.default = Icon;