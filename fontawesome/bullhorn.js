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
      _react2.default.createElement('path', { d: 'M22.3 8.6q.7 0 1.2.5t.5 1.2-.5 1.2-1.2.5v5.1q0 .7-.5 1.2t-1.2.6Q15 14.2 9.7 13.8q-.8.2-1.2.9T8.1 16t.5 1.2q-.3.5-.3.9t.1.8.4.7.7.7.8.7q-.4.8-1.5 1.1t-2.3.1-1.7-.7l-.4-1.2q-.3-.9-.5-1.2t-.3-1.2-.2-1.4.1-1.3.3-1.5H2.1q-.8 0-1.5-.6T0 11.6V9q0-.9.6-1.5t1.5-.6h6.5q5.8 0 12-5.2.7 0 1.2.5t.5 1.2v5.2zm-1.7 8.1V3.9q-5.3 4-10.3 4.6v3.6q5 .6 10.3 4.6z' })
    )
  );
};

exports.default = Icon;