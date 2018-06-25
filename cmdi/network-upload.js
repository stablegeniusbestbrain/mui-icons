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
      _react2.default.createElement('path', { d: 'M17 3c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-4v2h1c.6 0 1 .4 1 1h7v2h-7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1H2v-2h7c0-.6.4-1 1-1h1v-2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10zm-5 2.5L7.5 10H11v4h2v-4h3.5L12 5.5z' })
    )
  );
};

exports.default = Icon;