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
      _react2.default.createElement('path', { d: 'M16.7 12.4q0 .2-.1.3L12.3 17q-.1.1-.3.1t-.3-.1l-4.3-4.3q-.2-.2-.1-.4.1-.3.4-.3h2.6V7.3q0-.2.1-.3t.3-.1h2.6q.2 0 .3.1t.1.3V12h2.6q.2 0 .3.1t.1.3zM12 4.7q-2 0-3.7 1T5.7 8.3t-1 3.7 1 3.7 2.6 2.6 3.7 1 3.7-1 2.6-2.6 1-3.7-1-3.7-2.6-2.6-3.7-1zM22.3 12q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;