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
      _react2.default.createElement('path', { d: 'M13 19c0 .6.4 1 1 1h2v2h-2.5c-.6 0-1.5-.4-1.5-1 0 .6-.9 1-1.5 1H8v-2h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H8V2h2.5c.6 0 1.5.4 1.5 1 0-.6.9-1 1.5-1H16v2h-2c-.6 0-1 .4-1 1v14z' })
    )
  );
};

exports.default = Icon;