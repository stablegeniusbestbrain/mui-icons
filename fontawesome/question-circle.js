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
      _react2.default.createElement('path', { d: 'M13.7 18.4v-2.5q0-.2-.1-.4t-.3-.1h-2.6q-.2 0-.3.1t-.1.4v2.5q0 .2.1.3t.3.2h2.6q.2 0 .3-.2t.1-.3zm3.4-9q0-1.2-.7-2.2t-1.9-1.5-2.2-.6Q9 5.1 7.3 8q-.2.3.1.6l1.8 1.3q.1.1.2.1.2 0 .4-.2.7-.9 1.1-1.2.5-.3 1.2-.3.6 0 1.1.3t.5.8q0 .5-.3.8t-.9.6q-.8.4-1.5 1.2t-.7 1.7v.4q0 .2.1.4t.3.1h2.6q.2 0 .3-.1t.1-.4q0-.2.3-.6t.7-.7q.5-.2.7-.4t.6-.4.6-.7.4-.8.1-1.1zm5.2 2.6q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;