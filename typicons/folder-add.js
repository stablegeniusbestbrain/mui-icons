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
      _react2.default.createElement('path', { d: 'M18 6h-6c0-1.1-.9-2-2-2H6C4.3 4 3 5.3 3 7v10c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zm0 12H6c-.6 0-1-.4-1-1v-7h4c.3 0 .5-.2.5-.5S9.3 9 9 9H5V7c0-.6.4-1 1-1h4c0 1.1.9 2 2 2h6c.6 0 1 .4 1 1h-4c-.3 0-.5.2-.5.5s.2.5.5.5h4v7c0 .6-.4 1-1 1zm-3-6h-2v-2c0-.6-.4-1-1-1s-1 .4-1 1v2H9c-.6 0-1 .4-1 1s.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1v-2h2c.6 0 1-.4 1-1s-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;