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
      _react2.default.createElement('path', { d: 'M12 1.7q2.8 0 5.2 1.4t3.7 3.7 1.4 5.2-1.4 5.2-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7zm0 17.6q2 0 3.7-1t2.6-2.6 1-3.7-1-3.7-2.6-2.6-3.7-1-3.7 1-2.6 2.6-1 3.7 1 3.7 2.6 2.6 3.7 1zm-3.9-3q-.1 0-.3-.1t-.1-.3V8.1q0-.1.1-.3t.3-.1h7.8q.1 0 .3.1t.1.3v7.8q0 .1-.1.3t-.3.1H8.1z' })
    )
  );
};

exports.default = Icon;