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
      _react2.default.createElement('path', { d: 'M17.1 15q0-.3-.3-.6L14.4 12l2.4-2.4q.3-.3.3-.6 0-.4-.3-.6l-1.2-1.2q-.2-.3-.6-.3-.3 0-.6.3L12 9.6 9.6 7.2q-.3-.3-.6-.3-.4 0-.6.3L7.2 8.4q-.3.2-.3.6 0 .3.3.6L9.6 12l-2.4 2.4q-.3.3-.3.6 0 .4.3.6l1.2 1.2q.2.3.6.3.3 0 .6-.3l2.4-2.4 2.4 2.4q.3.3.6.3.4 0 .6-.3l1.2-1.2q.3-.2.3-.6zm5.2-3q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;