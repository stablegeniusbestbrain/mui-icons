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
      _react2.default.createElement('path', { d: 'M15 7.7q0 .2-.1.3t-.3.1-.3-.1-.2-.3q0-.6-.7-.9T12 6.4q-.2 0-.3-.1t-.1-.3.1-.3.3-.1q.7 0 1.3.2t1.2.7.5 1.2zm2.1 0q0-1-.4-1.8t-1.2-1.3-1.7-.9-1.8-.3-1.8.3-1.7.9-1.2 1.3-.4 1.8q0 1.4.9 2.4.1.2.4.5t.4.4q1.7 2.1 1.9 4h3q.2-1.9 1.9-4l.4-.4q.3-.3.4-.5.9-1 .9-2.4zm1.8 0q0 2.1-1.4 3.6-.6.7-1 1.2t-.8 1.2-.5 1.5q.7.4.7 1.1 0 .5-.4.8.4.4.4.9 0 .7-.6 1.1.1.3.1.6 0 .6-.4 1t-1 .3q-.3.6-.8.9t-1.2.4-1.2-.4-.8-.9q-.6 0-1-.3t-.4-1q0-.3.1-.6-.6-.4-.6-1.1 0-.5.4-.9-.4-.3-.4-.8 0-.7.7-1.1-.1-.7-.5-1.5t-.8-1.2-1-1.2Q5.1 9.8 5.1 7.7q0-1.3.6-2.5t1.6-1.9 2.2-1.2 2.5-.4 2.5.4 2.2 1.2 1.6 1.9.6 2.5z' })
    )
  );
};

exports.default = Icon;