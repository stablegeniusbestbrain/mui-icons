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
      _react2.default.createElement('path', { d: 'M18 18q0-.3-.3-.6t-.6-.3-.6.3-.2.6.2.6.6.3.6-.3.3-.6zm3.4 0q0-.3-.2-.6t-.6-.3-.6.3-.3.6.3.6.6.3.6-.3.2-.6zm1.7-3v4.3q0 .5-.3.9t-.9.4H2.1q-.5 0-.9-.4t-.3-.9V15q0-.5.3-.9t.9-.4h6.3l1.8 1.8q.8.8 1.8.8t1.8-.8l1.8-1.8h6.3q.5 0 .9.4t.3.9zm-4.3-7.6q.2.5-.2.9l-6 6q-.2.3-.6.3t-.6-.3l-6-6q-.4-.4-.2-.9t.8-.5h3.4v-6q0-.4.3-.6t.6-.3h3.4q.4 0 .6.3t.3.6v6H18q.6 0 .8.5z' })
    )
  );
};

exports.default = Icon;