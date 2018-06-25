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
      _react2.default.createElement('path', { d: 'M18 12.9V4.3h-6v15.2q1.6-.8 2.9-1.8 3.1-2.5 3.1-4.8zm2.6-10.3v10.3q0 1.1-.5 2.2t-1.1 2-1.6 1.8-1.7 1.3-1.6 1.1-1.2.6-.6.3q-.1.1-.3.1t-.3-.1q-.3-.1-.6-.3t-1.2-.6-1.6-1.1-1.7-1.3T5 17.1t-1.1-2-.5-2.2V2.6q0-.4.3-.6t.6-.3h15.4q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;