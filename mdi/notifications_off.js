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
      _react2.default.createElement('path', { d: 'M20 18.7L7.8 6.1 5.3 3.5 4 4.8l2.8 2.8C6.3 8.6 6 9.7 6 11v5l-2 2v1h13.7l2 2 1.3-1.3-1-1zM12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-7.3V11c0-3.1-1.6-5.6-4.5-6.3V4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v.7c-.2 0-.3.1-.4.1-.1 0-.2.1-.3.1-.3.1-.5.2-.7.3l8.9 9.5z' })
    )
  );
};

exports.default = Icon;