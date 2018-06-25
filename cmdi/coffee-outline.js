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
      _react2.default.createElement('path', { d: 'M2 21v-2h18v2H2zM20 8V5h-2v3h2zm0-5c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-2v3c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V3h16zm-4 2H6v8c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5z' })
    )
  );
};

exports.default = Icon;