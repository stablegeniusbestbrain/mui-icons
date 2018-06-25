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
      _react2.default.createElement('path', { d: 'M22 10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V3h2v2h4V3h2v2h4V3h2v2h4V3h2v7zM4 10h4V7H4v3zm6 0h4V7h-4v3zm10 0V7h-4v3h4zm-9 4h2v3h3v2h-3v3h-2v-3H8v-2h3v-3z' })
    )
  );
};

exports.default = Icon;