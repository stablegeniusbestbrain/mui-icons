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
      _react2.default.createElement('path', { d: 'M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-4.4c-.4-.1-.4-.7-.4-.9v-2.5c0-.8-.2-1.4-.6-1.6 2-.3 4.1-1 4.1-4.5 0-1-.3-1.8-.9-2.4.1-.2.4-1.1-.1-2.4 0 0-.7-.2-2.4 1-.8-.2-1.5-.3-2.3-.3-.8 0-1.5.1-2.3.3-1.7-1.2-2.4-1-2.4-1-.5 1.3-.2 2.2-.1 2.4-.6.6-.9 1.4-.9 2.4 0 3.5 2.1 4.3 4.1 4.5-.3.2-.5.6-.6 1.2-.5.2-1.8.6-2.6-.8 0 0-.5-.8-1.4-.9 0 0-.9 0-.1.6 0 0 .6.2 1 1.3 0 0 .6 1.7 3.1 1.2v1.5c0 .2 0 .8-.4.9H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z' })
    )
  );
};

exports.default = Icon;