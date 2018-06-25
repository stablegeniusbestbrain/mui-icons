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
      _react2.default.createElement('path', { d: 'M4 3h1v2H3V4c0-.6.4-1 1-1zm16 0c.6 0 1 .4 1 1v1h-2V3h1zm-5 2V3h2v2h-2zm-4 0V3h2v2h-2zM7 5V3h2v2H7zm14 15c0 .6-.4 1-1 1h-1v-2h2v1zm-6 1v-2h2v2h-2zm-4 0v-2h2v2h-2zm-4 0v-2h2v2H7zm-3 0c-.6 0-1-.4-1-1v-1h2v2H4zm-1-6h2v2H3v-2zm18 0v2h-2v-2h2zM3 11h2v2H3v-2zm18 0v2h-2v-2h2zM3 7h2v2H3V7zm18 0v2h-2V7h2z' })
    )
  );
};

exports.default = Icon;