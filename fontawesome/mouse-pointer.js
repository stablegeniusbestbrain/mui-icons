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
      _react2.default.createElement('path', { d: 'M18.6 14q.4.4.2.9t-.8.5h-5.1l2.7 6.4q.1.3 0 .7t-.5.4l-2.3 1q-.4.2-.7 0t-.5-.4l-2.5-6.1-4.2 4.2q-.3.3-.6.3-.2 0-.3-.1-.6-.2-.6-.8V.9q0-.6.6-.8.1-.1.3-.1.3 0 .6.3z' })
    )
  );
};

exports.default = Icon;