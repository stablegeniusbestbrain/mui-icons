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
      _react2.default.createElement('path', { d: 'M6 14h2l3 3H9l-3-3zM4 4h1V3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1h2V3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1h1c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2v1h-3v-1H7v1H4v-1c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm14 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm6-1H4v4h16V6zM4 19h16v-7H4v7zM6 7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm7 7h2l3 3h-2l-3-3z' })
    )
  );
};

exports.default = Icon;