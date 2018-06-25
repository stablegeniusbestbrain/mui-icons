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
      _react2.default.createElement('path', { d: 'M18.4 4.3c-.4-.1-.8-.1-1.1.2-1.3 1.3-3.3 1.3-4.6 0-2-2-5.4-2-7.4 0-.2.2-.3.5-.3.7v13c0 .6.4 1 1 1s1-.4 1-1v-4.5c1.3-1 3.1-.9 4.3.2 2 2.1 5.4 2.1 7.4 0 .2-.1.3-.4.3-.7v-8c0-.4-.2-.7-.6-.9zm-7.1 1.6c1.5 1.6 3.8 2 5.7 1.2v2.3c-1.4.9-3.4.8-4.6-.5C10.9 7.4 8.8 7.1 7 8V5.7c1.3-1 3.1-.9 4.3.3zm1.4 6.6c-1-1-2.4-1.5-3.7-1.5-.7 0-1.4.1-2 .4V9.1c1.4-.9 3.4-.8 4.6.5 1 .9 2.2 1.4 3.4 1.4.7 0 1.4-.2 2-.5v2.3c-1.3 1-3.1.9-4.3-.3z' })
    )
  );
};

exports.default = Icon;