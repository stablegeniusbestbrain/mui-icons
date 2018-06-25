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
      _react2.default.createElement('path', { d: 'M11.8 1.7q-.6 0-1.1.5t-.4 1V12h-.4V4.9q0-.6-.5-1t-1-.5-1.1.5-.4 1v10.5l-2.1-2.7q-.5-.7-1.4-.7-.7 0-1.2.5t-.5 1.2q0 .6.4 1l5.1 6.9q.5.7 1.4.7h9.2q.4 0 .8-.3t.5-.8l1-5.4V8.4q0-.7-.4-1.1t-1.1-.4-1 .4-.5 1.1V12h-.4V4.9q0-.6-.4-1t-1.1-.5-1 .5-.5 1V12h-.4V3.2q0-.6-.5-1t-1-.5zm0-1.7q.9 0 1.7.5t1.2 1.3q.2-.1.5-.1 1.3 0 2.3 1t.9 2.2v.3q1.4-.1 2.4.8t1.1 2.4V15q0 .6-.1 1.1l-1.1 5.4q-.2 1.1-1 1.8t-1.9.7H8.6q-.8 0-1.6-.4t-1.2-1L.7 15.8q-.7-.9-.7-2.1 0-1.4 1-2.4t2.4-1q1.1 0 1.7.4V4.9q0-1.3 1-2.2t2.3-1q.3 0 .5.1.4-.8 1.2-1.3t1.7-.5z' })
    )
  );
};

exports.default = Icon;