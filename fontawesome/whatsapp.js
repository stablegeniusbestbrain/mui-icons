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
      _react2.default.createElement('path', { d: 'M14.9 13q.2 0 1.3.6t1.2.7v.2q0 .5-.2 1.1-.2.5-.9.8t-1.4.4q-.8 0-2.6-.8-1.3-.6-2.2-1.6t-2-2.5q-1-1.4-1-2.6v-.1q.1-1.2 1-2.1.4-.3.7-.3h.5q.3 0 .4.1t.2.4l.4 1.2q.3.9.4 1 0 .3-.5.7t-.5.7q0 .1.1.2.5.9 1.4 1.8.7.7 2 1.4h.3q.2 0 .7-.6t.7-.7zm-2.7 7.1q1.7 0 3.2-.6t2.7-1.8 1.8-2.7.7-3.3-.7-3.2-1.8-2.7T15.4 4t-3.2-.7-3.3.7-2.7 1.8-1.8 2.7-.6 3.2q0 2.8 1.6 5l-1.1 3.1 3.3-1q2.1 1.3 4.6 1.3zm0-18.5q2 0 3.9.8t3.2 2.2 2.2 3.2.8 3.9-.8 3.9-2.2 3.3-3.2 2.1-3.9.8q-2.6 0-4.9-1.2l-5.6 1.8 1.8-5.5q-1.4-2.3-1.4-5.2 0-2 .8-3.9T5 4.6t3.3-2.2 3.9-.8z' })
    )
  );
};

exports.default = Icon;