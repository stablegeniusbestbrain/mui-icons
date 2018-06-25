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
      _react2.default.createElement('path', { d: 'M20 22c1.1 0 2-.9 2-2v-2h-2v2h-2v2h2zm-4 0v-2h-3v2h3zm-5 0v-2H9v-2H7v2c0 1.1.9 2 2 2h2zm11-6v-3h-2v3h2zM9 16V9h7V3c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h6zm-2-2H3V3h11v4H9c-1.1 0-2 .9-2 2v5zm15-3V9c0-1.1-.9-2-2-2h-2v2h2v2h2z' })
    )
  );
};

exports.default = Icon;