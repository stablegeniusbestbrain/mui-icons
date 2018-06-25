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
      _react2.default.createElement('path', { d: 'M21 16.5c0 .4-.2.7-.5.9l-7.9 4.4c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-7.9-4.4c-.3-.2-.5-.5-.5-.9v-9c0-.4.2-.7.5-.9l7.9-4.4c.2-.1.4-.2.6-.2.2 0 .4.1.6.2l7.9 4.4c.3.2.5.5.5.9v9zM12 4.2L5 8.1v7.8l7 4 7-4V8.1l-7-3.9zm2.9 4.1c1.5 0 2.6 1.1 2.6 2.5v2.7c0 1.4-1.1 2.5-2.6 2.5-1.4.1-2.5-1.1-2.5-2.5v-2.7c0-1.4 1.1-2.5 2.5-2.5zm0 1.4c-.6 0-1 .5-1 1.1v2.7c0 .6.4 1.1 1 1.1s1.1-.5 1.1-1.1v-2.7c0-.6-.5-1.1-1.1-1.1zm-3.4 5.1V16l-5.2-.1v-1s3.4-3.3 3.4-4.3c.1-1.3-1-1.1-1-1.1s-1 0-1.1 1.2l-1.5.1s.1-2.5 2.7-2.5c2.4 0 2.4 1.7 2.4 2.2 0 1.7-3 4.3-3 4.3h3.3z' })
    )
  );
};

exports.default = Icon;