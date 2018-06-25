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
      _react2.default.createElement('path', { d: 'M10 4h2v2h-2V4zM7 3h2v2H7V3zm0 3h2v2H7V6zM6 8v2H4V8h2zm0-3v2H4V5h2zm0-3v2H4V2h2zm7 20c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2V7h1V4h3v3h1v1c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-5zm0-12v10h5V10h-5z' })
    )
  );
};

exports.default = Icon;