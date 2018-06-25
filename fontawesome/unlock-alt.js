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
      _react2.default.createElement('path', { d: 'M18.4 10.3q.6 0 .9.4t.4.9v7.7q0 .5-.4.9t-.9.4H5.6q-.6 0-.9-.4t-.4-.9v-7.7q0-.6.4-.9t.9-.4H6V6q0-2.5 1.8-4.2T12 0t4.2 1.8T18 6q0 .3-.3.6t-.6.3h-.8q-.4 0-.6-.3t-.3-.6q0-1.4-1-2.4t-2.4-1-2.4 1-1 2.4v4.3h9.8z' })
    )
  );
};

exports.default = Icon;