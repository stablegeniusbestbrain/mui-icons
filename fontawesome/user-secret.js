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
      _react2.default.createElement('path', { d: 'M9.4 20.6l1.3-6-1.3-1.7-1.7-.9zm3.5 0l1.7-8.6-1.7.9-1.3 1.7zM15 7h-.1q-.1-.1-1.2-.1-1 0-2.3.2h-.5q-1.3-.2-2.3-.2-1.1 0-1.3.1v.4q.1 0 .1.1t.1.1q.1.1.1.3t.1.3.1.2.1.2.2.2.1.2.2.1.3.1.2.1.4 0q.4 0 .7-.1t.5-.4.2-.5.1-.4.3-.2h.1q.2 0 .3.2t.1.4.2.5.4.4.8.1h.4q.2 0 .2-.1t.3-.1.2-.1.1-.2.1-.2.2-.2.1-.2 0-.3.1-.3l.1-.1.1-.1q.1-.1.1-.4zm5.6 11.8q0 1.6-1 2.6t-2.6.9H5.3q-1.6 0-2.6-.9t-1-2.6q0-.8.1-1.6t.2-1.6.5-1.7.9-1.4 1.2-1L3.4 8.6h2.9Q6 7.7 6 6.9v-.5q-2.6-.5-2.6-1.3 0-.7 2.8-1.3.3-.8.7-1.8t1-1.5q.4-.5 1-.5.4 0 1.1.4t1.1.4 1.2-.4 1.1-.4q.6 0 1 .5.5.6 1 1.5t.6 1.8q2.9.6 2.9 1.3 0 .8-2.6 1.3.1 1.1-.3 2.2h2.9l-1.1 3q.8.4 1.4 1.3t.9 1.9.4 2 .1 2z' })
    )
  );
};

exports.default = Icon;