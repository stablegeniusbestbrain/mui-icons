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
      _react2.default.createElement('path', { d: 'M14.6 10.7v.9q0 .1-.2.3t-.3.1h-3v3q0 .2-.1.3t-.3.1h-.8q-.2 0-.3-.1t-.2-.3v-3h-3q-.1 0-.3-.1t-.1-.3v-.9q0-.2.1-.3t.3-.1h3v-3q0-.2.2-.3t.3-.1h.8q.2 0 .3.1t.1.3v3h3q.2 0 .3.1t.2.3zm1.7.4q0-2.4-1.8-4.2t-4.2-1.8T6 6.9t-1.7 4.2T6 15.4t4.3 1.7 4.2-1.7 1.8-4.3zm6.8 11.2q0 .7-.5 1.2t-1.2.5q-.7 0-1.2-.5l-4.6-4.6q-2.4 1.7-5.3 1.7-1.9 0-3.7-.8t-3-2-2-3-.7-3.7.7-3.6 2-3 3-2 3.7-.8 3.6.8 3.1 2 2 3 .7 3.6q0 3-1.6 5.4l4.5 4.6q.5.5.5 1.2z' })
    )
  );
};

exports.default = Icon;