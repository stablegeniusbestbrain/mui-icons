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
      _react2.default.createElement('path', { d: 'M16.2 5.1l-1.5 4.4 1.5.2q2.2-6 2.2-6.9 0-.8-.5-.8-.7 0-1.7 3.1zm-4 9.2l.4 1.1q.5-.5 1-.9h-.5l-.5-.1-.4-.1zm-3.9-12q0 1.3 2.1 6.9.2-.1.7-.1.2 0 1 .1l-1.7-4.7q-1-3-1.6-3-.3 0-.4.3t-.1.5zM7.2 12.4q0 .5.7 1.6t1.6 2.1 1.3.9q.2 0 .4-.2t.1-.3q0-.3-.4-1.4-.2-.4-.4-1T9.8 13 9 11.9t-.8-.5q-.3 0-.6.4t-.4.6zm-2.1 4.5q0 .6.3 1.4.8 1.9 2.5 3t3.8 1.1q3 0 5.1-2.2 2-2.3 2-5.7v-.9q0-.3-.2-.9t-.4-.7q-.7-.7-2.8-1t-3.6-.4q-.5 0-.7.2-.1 0-.1.4 0 .5.3.8t.7.6 1 .3 1.2.1 1.1.1 1 0h.3q.3 0 .5.2.2.3.3.8-.4.4-1.3.7-.8.3-1.2.6-.9.6-1.5 1.5t-.6 1.9q0 .4.3 1.2t.2 1.1v.2l-.1.2q-1.8-.2-1.9-2.9h-.6v.3q0 .7-.5 1.2t-1.3.5q-1.1 0-2.2-1.1t-1.1-2.1q0-.4.4-.9.7.9.8 1 1 1.4 1.8 1.4.1 0 .3-.1t.2-.3q0-.4-1.1-1.9t-1.6-1.5q-.6 0-.9.6t-.4 1.2zm-1.5.1q0-1.3.5-2.1T6 13.7q-.4-1-.4-1.4 0-.8.8-1.7T8 9.8q.4 0 1 .2-2.2-6.2-2.2-7.6 0-1 .6-1.7T8.9 0q1.8 0 4.4 7.8.1.2.1.3.1-.2.4-1.1t.6-1.6.7-1.7.9-1.6.9-1.2 1-.5q1 0 1.5.7t.6 1.6q0 1.5-2.1 7.4.8.2 1.3.6t.8 1.1.3 1.2.1 1.5q0 2-.6 3.7T18 21.3t-2.8 2-3.7.7q-1.5 0-3-.6-2-.7-3.5-2.5T3.6 17z' })
    )
  );
};

exports.default = Icon;