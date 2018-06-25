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
      _react2.default.createElement('path', { d: 'M19.7 9.4q0-.3-.2-.6t-.6-.2-.6.2-.3.6.3.6.6.3.6-.3.2-.6zm1.7 0q0 .9-.4 1.5t-1.3 1v5.2q0 2.2-1.7 3.7t-4.3 1.5-4.2-1.5-1.8-3.7v-1.7q-2.2-.3-3.7-1.7t-1.4-3.4V3.4q0-.3.2-.6t.6-.2h.2q.3-.4.7-.6t.8-.3q.8 0 1.3.5t.5 1.2-.5 1.2-1.3.5q-.4 0-.8-.2v5.4q0 1.4 1.2 2.4t3.1 1 3-1 1.3-2.4V4.9q-.5.2-.9.2-.7 0-1.2-.5t-.5-1.2.5-1.2 1.2-.5q.5 0 .9.3t.6.6h.2q.4 0 .6.2t.3.6v6.9q0 1.9-1.5 3.4t-3.7 1.7v1.7q0 1.5 1.3 2.5t3 1 3-1 1.3-2.5v-5.2q-.8-.3-1.2-1t-.5-1.5q0-1 .7-1.8t1.9-.7 1.8.7.7 1.8z' })
    )
  );
};

exports.default = Icon;