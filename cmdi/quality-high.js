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
      _react2.default.createElement('path', { d: 'M14.5 13.5h2v-3h-2M18 14c0 .5-.4 1-1 1h-.7v1.5h-1.5V15H14c-.6 0-1-.5-1-1v-4c0-.6.4-1 1-1h3c.6 0 1 .4 1 1m-7 5H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11m8-5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;