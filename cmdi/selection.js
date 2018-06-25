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
      _react2.default.createElement('path', { d: 'M2 4c0-1.1.9-2 2-2h3v2H4v3H2V4zm20 0v3h-2V4h-3V2h3c1.1 0 2 .9 2 2zm-2 16v-3h2v3c0 1.1-.9 2-2 2h-3v-2h3zM2 20v-3h2v3h3v2H4c-1.1 0-2-.9-2-2zm8-18h4v2h-4V2zm0 18h4v2h-4v-2zm10-10h2v4h-2v-4zM2 10h2v4H2v-4z' })
    )
  );
};

exports.default = Icon;