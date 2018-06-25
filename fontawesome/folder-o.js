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
      _react2.default.createElement('path', { d: 'M21.4 17.6V8.1q0-.5-.3-.9t-1-.3h-9.4q-.5 0-.9-.4t-.4-.9v-.9q0-.5-.3-.9t-1-.4H3.9q-.6 0-1 .4t-.3.9v12.9q0 .5.3.9t1 .4h16.2q.6 0 1-.4t.3-.9zm1.7-9.5v9.5q0 1.2-.8 2.1t-2.2.9H3.9q-1.3 0-2.2-.9t-.8-2.1V4.7q0-1.2.8-2.1t2.2-.9h4.2q1.3 0 2.2.9t.8 2.1v.4h9q1.3 0 2.2.9t.8 2.1z' })
    )
  );
};

exports.default = Icon;