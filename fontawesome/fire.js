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
      _react2.default.createElement('path', { d: 'M21.4 22.7v.9q0 .1-.1.3t-.3.1H3q-.2 0-.3-.1t-.1-.3v-.9q0-.2.1-.3t.3-.1h18q.2 0 .3.1t.1.3zM18 8.6q0 1-.3 1.9t-.9 1.5-1.2 1.2-1.2 1-1.2 1-.9 1.1-.3 1.3q0 1.3.9 3h-.1.1l-2.2-1.1q-1-.5-1.8-1.4t-1.6-1.6-.9-2T6 12q0-1 .3-1.9t.9-1.5 1.2-1.2 1.2-1.1 1.2-.9.9-1.1T12 3q0-1.3-.9-3h.1-.1q1.2.5 2.2 1.1t1.8 1.4 1.6 1.6.9 2 .4 2.5z' })
    )
  );
};

exports.default = Icon;