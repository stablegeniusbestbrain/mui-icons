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
      _react2.default.createElement('path', { d: 'M1.5 18v4.5H6l12-12L13.5 6l-12 12zM6 21H3v-3h1.5v1.5H6V21zM21.5 7l-2 2L15 4.5l1.9-2a1.5 1.5 0 0 1 2.2 0l2.3 2.4c.6.6.6 1.6 0 2.2z' })
    )
  );
};

exports.default = Icon;