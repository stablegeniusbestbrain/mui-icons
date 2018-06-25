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
      _react2.default.createElement('path', { d: 'M7.7 18q0 1.1-.7 1.8t-1.9.8-1.8-.8-.7-1.8.7-1.8 1.8-.8 1.9.8.7 1.8zm6.9 1.6q0 .4-.3.7-.2.3-.6.3h-1.8q-.3 0-.6-.2t-.2-.6q-.3-3.1-2.5-5.2t-5.3-2.5q-.3 0-.5-.3t-.2-.6V9.4q0-.4.3-.6.2-.2.5-.2h.1q2.1.1 4.1 1t3.5 2.5q1.5 1.5 2.4 3.4t1.1 4.1zm6.8.1q.1.3-.2.6-.3.3-.6.3h-1.9q-.4 0-.6-.3t-.3-.5q-.2-2.9-1.4-5.5t-3.1-4.5-4.5-3.1-5.4-1.4q-.4 0-.6-.2t-.2-.6V2.6q0-.4.2-.6.3-.3.6-.3h.1q3.5.2 6.7 1.6t5.7 4q2.5 2.5 3.9 5.7t1.6 6.7z' })
    )
  );
};

exports.default = Icon;