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
      _react2.default.createElement('path', { d: 'M22.3 8h-2.4c-.4-1.2-1.5-2-2.8-2h-6c0-1.1-.9-2-2-2H5C3.3 4 2 5.3 2 7v10c0 1.7 1.3 3 3 3h12c1.7 0 3.4-1.3 3.8-3L23 9c.1-.6-.2-1-.7-1zM4 9V7c0-.6.4-1 1-1h4c0 1.1.9 2 2 2h6c.6 0 1 .4 1 1H6.9c-.6 0-1.1.4-1.3 1L4 16.3V9zm14.9 7.5c-.2.8-1.1 1.5-1.9 1.5H5s-.4-.2-.2-.8l1.9-7c0-.1.2-.2.3-.2h13.7l-1.8 6.5z' })
    )
  );
};

exports.default = Icon;