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
      _react2.default.createElement('path', { d: 'M16.8 16.2q0-.4-.4-.7-2.6-1.5-6-1.5-1.8 0-3.8.4-.6.2-.6.7 0 .3.2.5t.5.2l.5-.1q1.7-.4 3.2-.4 3 0 5.3 1.4.3.1.5.1t.4-.1.2-.5zm1.3-2.9q0-.5-.5-.8-3.1-1.9-7.3-1.9-2.1 0-4.1.6-.6.2-.6.8 0 .4.2.6t.6.2q.1 0 .5-.1 1.6-.4 3.3-.4 3.8 0 6.6 1.7.3.1.5.1.3 0 .6-.2t.2-.6zm1.4-3.3q0-.6-.5-.9-1.7-1-3.9-1.5t-4.6-.5q-2.7 0-4.9.6-.3.1-.5.4t-.2.6q0 .4.3.7t.7.3q.1 0 .5-.1 1.8-.5 4.1-.5 2.1 0 4.1.4t3.4 1.3q.3.2.6.2.4 0 .7-.3t.2-.7zm2.8 2q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;