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
      _react2.default.createElement('path', { d: 'M16.7 4c.7 0 1.3.6 1.3 1.3v15.4c0 .7-.6 1.3-1.3 1.3H7.3c-.7 0-1.3-.6-1.3-1.3V5.3C6 4.6 6.6 4 7.3 4H9V2h6v2h1.7zM16 14v-2h-3V9h-2v3H8v2h3v3h2v-3h3z' })
    )
  );
};

exports.default = Icon;