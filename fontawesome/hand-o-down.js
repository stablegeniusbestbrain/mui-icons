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
      _react2.default.createElement('path', { d: 'M20.6 12.9q0-1.2-.5-2.5t-.8-2.6-.4-2.2v-.5h-8.6v.5q0 .4-.2.9t-.5.8T9 8t-.7.6l-.2.2q-1.1 1-1.9 1.5-.3.2-1 .5l-.3.1q-.3.1-.4.3t-.5.3-.4.3-.2.2q0 1 .4 1.5t1.3.6q.6 0 1.2-.2t.9-.4.7-.4.7-.2v7.7q0 .6.5 1.2t1.2.5q.7 0 1.2-.5t.5-1.2v-4.5q.6.5 1.4.5.9 0 1.6-.7.4.2.9.2t1-.2.7-.6h.7q1.2 0 1.7-.6t.6-1.8zM18.9 2.6q0-.4-.3-.6t-.6-.3-.6.3-.3.6.3.6.6.2.6-.2.3-.6zm3.4 10.2q0 1.9-1.1 3.1T18.3 17q-1 .9-2.4.9-.3 0-.6-.1-.7.4-1.6.5v2.3q0 1.4-1 2.4t-2.4 1q-1.4 0-2.4-1t-1-2.4v-5q-.8.3-1.8.3-1.6 0-2.5-1.1T1.7 12q0-.5.2-.9t.7-.8.9-.5.9-.5.9-.4Q6 8.4 7 7.5l.2-.2q.2-.2.3-.2t.3-.3.3-.3.2-.3.2-.3.1-.3V1.7q0-.7.5-1.2t1.2-.5h8.6q.7 0 1.2.5t.5 1.2v3.9q0 .8.8 3 .9 2.5.9 4.2z' })
    )
  );
};

exports.default = Icon;