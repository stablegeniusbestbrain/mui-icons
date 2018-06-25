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
      _react2.default.createElement('path', { d: 'M8.6 14.5v.9q0 .6-.6.8-.1.1-.3.1-.3 0-.6-.3L.3 9.2Q0 8.9 0 8.6T.3 8l6.8-6.9q.4-.4.9-.2.6.3.6.8v.9L3.3 8q-.3.2-.3.6t.3.6zM24 15q0 .8-.2 1.8t-.5 1.8-.7 1.7-.5 1.2l-.3.6q-.1.2-.4.2h-.1q-.3-.1-.3-.5.6-5.3-1.4-7.5-.9-1-2.3-1.5t-3.6-.7v3.3q0 .6-.5.8-.2.1-.3.1-.4 0-.6-.3L5.4 9.2q-.3-.3-.3-.6t.3-.6l6.9-6.9q.3-.4.9-.2.5.3.5.8v3.5q5.5.4 8 3Q24 10.5 24 15z' })
    )
  );
};

exports.default = Icon;