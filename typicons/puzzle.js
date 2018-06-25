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
      _react2.default.createElement('path', { d: 'M16.3 11.3c.3 0 .7.1.9.3.6.4.8 0 .8-.3V9.5c0-.8-.7-1.5-1.5-1.5h-2.7c-.4 0-.8-.2-.4-.8.2-.2.4-.6.4-.9 0-1-1.1-1.8-2.3-1.8s-2.2.8-2.2 1.8c0 .2 0 .5.2.8.5.6.1.9-.2.9H6.5C5.7 8 5 8.7 5 9.5v1.8c0 .3.3.7.9.2.3-.2.6-.2.9-.2.9 0 1.7 1 1.7 2.2s-.8 2.3-1.7 2.3c-.4 0-.8-.2-1-.4-.6-.4-.8 0-.8.4v2.7c0 .8.7 1.5 1.5 1.5h2.8c.3 0 .7-.3.2-.9-.2-.3-.2-.5-.2-.8 0-1 1-1.8 2.2-1.8s2.3.8 2.3 1.8c0 .3-.2.7-.4.9-.4.6 0 .8.4.8h2.7c.8 0 1.5-.7 1.5-1.5v-2.7c0-.4-.3-.8-.9-.3-.3.2-.5.3-.8.3-1 0-1.8-1.1-1.8-2.3s.8-2.2 1.8-2.2z' })
    )
  );
};

exports.default = Icon;