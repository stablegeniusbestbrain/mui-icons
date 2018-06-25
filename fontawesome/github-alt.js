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
      _react2.default.createElement('path', { d: 'M9.4 16.3q0 .5-.1 1.1t-.6 1-1 .5-1-.5-.5-1-.2-1.1.2-1.1.5-1 1-.5 1 .5.6 1 .1 1.1zm8.6 0q0 .5-.2 1.1t-.5 1-1 .5-1-.5-.6-1-.1-1.1.1-1.1.6-1 1-.5 1 .5.5 1 .2 1.1zm2.1 0q0-1.6-.9-2.7t-2.5-1.2q-.5 0-2.6.3-.9.2-2.1.2t-2.1-.2q-2-.3-2.6-.3-1.6 0-2.5 1.2t-.9 2.7q0 1.2.4 2t1.1 1.4 1.6.8 1.9.4 2 .1h2.2q1.1 0 2-.1t1.9-.4 1.6-.8 1.1-1.4.4-2zm3-2.4q0 2.8-.8 4.5-.5 1-1.4 1.7T19 21.3t-2.3.6-2.2.3-2.3.1q-1 0-1.9-.1t-2-.1-2-.4-1.8-.7-1.7-1.1-1.1-1.5q-.8-1.7-.8-4.5 0-3.1 1.8-5.3-.4-1.1-.4-2.3 0-1.5.7-2.9 1.4 0 2.5.6t2.6 1.6q1.9-.5 4.1-.5 2 0 3.8.5 1.4-1.1 2.5-1.6t2.5-.6q.7 1.4.7 2.9 0 1.2-.4 2.3 1.8 2.1 1.8 5.3z' })
    )
  );
};

exports.default = Icon;