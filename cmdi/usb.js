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
      _react2.default.createElement('path', { d: 'M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.1c.7-.3 1.2-1.1 1.2-1.9 0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2 0 .8.5 1.6 1.2 1.9V13c0 1.1.9 2 2 2h3v3c-.7.4-1.2 1.1-1.2 2 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-.9-.5-1.6-1.2-2v-3h3c1.1 0 2-.9 2-2v-2h1V7h-4z' })
    )
  );
};

exports.default = Icon;