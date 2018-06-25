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
      _react2.default.createElement('path', { d: 'M18.7 9.9q0 .1-.2.3l-6.2 6.2q-.1.1-.3.1t-.3-.1l-6.2-6.2q-.2-.2-.2-.3t.2-.4l.6-.6q.2-.2.3-.2t.3.2l5.3 5.2 5.3-5.2q.1-.2.3-.2t.3.2l.6.6q.2.2.2.4z' })
    )
  );
};

exports.default = Icon;