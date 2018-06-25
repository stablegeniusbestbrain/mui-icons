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
      _react2.default.createElement('path', { d: 'M10 20.4q1 .4 1.9.4 5 0 5-4.5 0-1.5-.5-2.4-.4-.6-.9-1t-.9-.6-1-.3-1.2-.2-1.2 0q-1 0-1.4.1V19.5q0 .6.2.9zm-.2-10q.6.1 1.5.1 1.1 0 1.9-.2t1.5-.6 1-1.2.3-1.9q0-.9-.4-1.6t-1-1.1-1.5-.6-1.6-.2q-.7 0-1.8.2 0 .6.1 2t0 2v3.1zM2.6 22.3V21q.2 0 1.1-.2t1.5-.3q0-.2.1-.4t.1-.5.1-.4.1-.5 0-.5v-.8q0-13.2-.3-13.8-.1-.1-.3-.2t-.6-.1-.7-.1-.6-.1-.4 0L2.6 2q1.3 0 4.6-.2t4.9-.1H14q.9 0 1.8.2t1.7.6 1.5.9 1 1.4.3 1.9q0 .7-.2 1.2t-.5 1-.9.8-1 .6-1.1.5q2.1.5 3.5 1.8t1.3 3.3q0 1.4-.4 2.4t-1.3 1.8-1.8 1.1-2.2.7-2.4.2q-.6 0-1.8-.1t-1.7 0q-1.4 0-4.1.1t-3.1.2z' })
    )
  );
};

exports.default = Icon;