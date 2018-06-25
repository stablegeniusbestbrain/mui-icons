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
      _react2.default.createElement('path', { d: 'M22 14c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v7h2v-2h4v2h2v-2h4v2h2v-2h4v2h2v-7zM4 14h4v3H4v-3zm6 0h4v3h-4v-3zm10 0v3h-4v-3h4zm-9-4h2V7h3V5h-3V2h-2v3H8v2h3v3z' })
    )
  );
};

exports.default = Icon;