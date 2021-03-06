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
      _react2.default.createElement('path', { d: 'M3 1c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h2v-2H3V3h11v2h2V3c0-1.1-.9-2-2-2H3zm6 6c-1.1 0-2 .9-2 2v2h2V9h2V7H9zm4 0v2h1v1h2V7h-3zm5 0v2h2v11H9v-2H7v2c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-2zm-4 5v2h-2v2h2c1.1 0 2-.9 2-2v-2h-2zm-7 1v3h3v-2H9v-1H7z' })
    )
  );
};

exports.default = Icon;