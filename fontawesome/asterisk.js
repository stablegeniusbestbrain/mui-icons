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
      _react2.default.createElement('path', { d: 'M20.7 14.1q.6.3.8 1t-.2 1.3l-.8 1.5q-.4.6-1.1.8t-1.3-.2l-3.5-2v4.1q0 .7-.5 1.2t-1.2.5h-1.8q-.7 0-1.2-.5t-.5-1.2v-4.1l-3.5 2q-.6.4-1.3.2t-1.1-.8l-.8-1.5q-.4-.6-.2-1.3t.8-1L6.9 12 3.3 9.9q-.6-.3-.8-1t.2-1.3l.8-1.5q.4-.6 1.1-.8t1.3.2l3.5 2V3.4q0-.7.5-1.2t1.2-.5h1.8q.7 0 1.2.5t.5 1.2v4.1l3.5-2q.6-.4 1.3-.2t1.1.8l.8 1.5q.4.6.2 1.3t-.8 1L17.1 12z' })
    )
  );
};

exports.default = Icon;