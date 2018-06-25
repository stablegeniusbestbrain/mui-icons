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
      _react2.default.createElement('path', { d: 'M23.1 12q0 .1-.1.3L17.9 17q-.2.2-.5.1t-.3-.4v-3H.4q-.2 0-.3-.1t-.1-.3v-2.6q0-.2.1-.3t.3-.1h16.7v-3q0-.3.3-.4t.5.1l5.1 4.7q.1.1.1.3z' })
    )
  );
};

exports.default = Icon;