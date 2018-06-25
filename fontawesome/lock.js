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
      _react2.default.createElement('path', { d: 'M8.6 10.3h6.8V7.7q0-1.4-1-2.4t-2.4-1-2.4 1-1 2.4v2.6zm11.1 1.3v7.7q0 .5-.4.9t-.9.4H5.6q-.6 0-.9-.4t-.4-.9v-7.7q0-.6.4-.9t.9-.4H6V7.7q0-2.4 1.8-4.2T12 1.7t4.2 1.8T18 7.7v2.6h.4q.6 0 .9.4t.4.9z' })
    )
  );
};

exports.default = Icon;