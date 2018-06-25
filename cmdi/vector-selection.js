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
      _react2.default.createElement('path', { d: 'M3 1h2v2H3v2H1V3c0-1.1.9-2 2-2zm11 0c1.1 0 2 .9 2 2v2h-2V3h-2V1h2zm6 6c1.1 0 2 .9 2 2v2h-2V9h-2V7h2zm2 13c0 1.1-.9 2-2 2h-2v-2h2v-2h2v2zm-2-7h2v3h-2v-3zm-7-4V7h3v3h-2V9h-1zm0 13v-2h3v2h-3zm-4 0c-1.1 0-2-.9-2-2v-2h2v2h2v2H9zm-2-6v-3h2v1h1v2H7zM7 3V1h3v2H7zM3 16c-1.1 0-2-.9-2-2v-2h2v2h2v2H3zM1 7h2v3H1V7zm8 0h2v2H9v2H7V9c0-1.1.9-2 2-2zm7 7c0 1.1-.9 2-2 2h-2v-2h2v-2h2v2z' })
    )
  );
};

exports.default = Icon;