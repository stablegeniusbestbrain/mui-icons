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
      _react2.default.createElement('path', { d: 'M16.1 13.4l4.1-3.9-5.7-.9L12 3.5 9.5 8.6l-5.7.9 4.1 3.9-1 5.7 5.1-2.7 5 2.7zm7-4.7q0 .3-.3.6L17.9 14l1.2 6.7v.3q0 .7-.6.7-.2 0-.5-.2l-6-3.1-6 3.1q-.3.2-.5.2-.3 0-.5-.2t-.1-.5v-.3L6.1 14 1.2 9.3q-.3-.4-.3-.6 0-.5.7-.7l6.7-.9 3-6.1q.3-.6.7-.6t.7.6l3 6.1 6.7.9q.7.2.7.7z' })
    )
  );
};

exports.default = Icon;