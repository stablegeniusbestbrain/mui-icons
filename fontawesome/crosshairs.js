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
      _react2.default.createElement('path', { d: 'M17.7 13.7h-1.4q-.4 0-.6-.2t-.3-.6v-1.8q0-.3.3-.6t.6-.2h1.4q-.4-1.5-1.5-2.5t-2.5-1.5v1.4q0 .4-.2.6t-.6.3h-1.8q-.3 0-.6-.3t-.2-.6V6.3q-1.5.4-2.5 1.5t-1.5 2.5h1.4q.4 0 .6.2t.3.6v1.8q0 .3-.3.6t-.6.2H6.3q.4 1.5 1.5 2.5t2.5 1.5v-1.4q0-.4.2-.6t.6-.3h1.8q.3 0 .6.3t.2.6v1.4q1.5-.4 2.5-1.5t1.5-2.5zm4.6-2.6v1.8q0 .3-.3.6t-.6.2h-1.9q-.5 2.2-2.1 3.7t-3.7 2.1v1.9q0 .4-.2.6t-.6.3h-1.8q-.3 0-.6-.3t-.2-.6v-1.9q-2.2-.5-3.7-2.1t-2.1-3.7H2.6q-.4 0-.6-.2t-.3-.6v-1.8q0-.3.3-.6t.6-.2h1.9Q5 8.1 6.6 6.6t3.7-2.1V2.6q0-.4.2-.6t.6-.3h1.8q.3 0 .6.3t.2.6v1.9q2.2.5 3.7 2.1t2.1 3.7h1.9q.4 0 .6.2t.3.6z' })
    )
  );
};

exports.default = Icon;