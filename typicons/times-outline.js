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
      _react2.default.createElement('path', { d: 'M16 19c-.8 0-1.6-.3-2.1-.9L12 16.2l-1.9 1.9c-1.1 1.2-3.1 1.2-4.2 0-.6-.5-.9-1.3-.9-2.1s.3-1.6.9-2.1L7.8 12l-1.9-1.9C5.3 9.6 5 8.8 5 8s.3-1.6.9-2.1C7 4.7 9 4.7 10.1 5.9L12 7.8l1.9-1.9c1.1-1.2 3.1-1.2 4.2 0 .6.5.9 1.3.9 2.1s-.3 1.6-.9 2.1L16.2 12l1.9 1.9c.6.5.9 1.3.9 2.1s-.3 1.6-.9 2.1c-.5.6-1.3.9-2.1.9zm-4-5.6l3.3 3.3c.4.4 1 .4 1.4 0 .2-.2.3-.4.3-.7s-.1-.5-.3-.7L13.4 12l3.3-3.3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.4-.4-1-.4-1.4 0L12 10.6 8.7 7.3c-.4-.4-1-.4-1.4 0-.2.2-.3.4-.3.7s.1.5.3.7l3.3 3.3-3.3 3.3c-.2.2-.3.4-.3.7s.1.5.3.7c.4.4 1 .4 1.4 0l3.3-3.3z' })
    )
  );
};

exports.default = Icon;