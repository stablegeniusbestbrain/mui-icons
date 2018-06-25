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
      _react2.default.createElement('path', { d: 'M8 16.5v.5c1.7-2.6 3.6-4 6-4v3c0 .6.5 1 1.1 1 .4 0 .7-.2.9-.4 2-2 6-6.1 6-6.1s-4-4.1-6-6.1c-.2-.2-.5-.4-.9-.4-.6 0-1.1.4-1.1 1v3c-4.7 0-6 4.9-6 8.5zM5 21h14c.6 0 1-.4 1-1v-6c-.7.6-1.4 1.3-2 2v3H6V7h7V5H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1z' })
    )
  );
};

exports.default = Icon;