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
      _react2.default.createElement('path', { d: 'M21 19V7h-6v12h6zm.7-14c.7 0 1.3.6 1.3 1.3v13.4c0 .7-.6 1.3-1.3 1.3h-7.4c-.7 0-1.3-.6-1.3-1.3v-2.9H7.8C5.8 16.8 5 19 3 20c-2 0-3.5-3 .5-11.5h.3l.4-.8S7 6 8.3 7.2H13v-.9c0-.7.6-1.3 1.3-1.3H16V3h4v2h1.7zM11 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm6 1h2v5h-2V9zm0 6h2v2h-2v-2z' })
    )
  );
};

exports.default = Icon;