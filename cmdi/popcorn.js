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
      _react2.default.createElement('path', { d: 'M7 22H4.8s-.8 0-1-1.4L2 3.8v-.3C2 2.7 2.9 2 4 2s2 .7 2 1.5C6 2.7 6.9 2 8 2s2 .7 2 1.5c0-.8.9-1.5 2-1.5s2 .7 2 1.5c0-.8.9-1.5 2-1.5s2 .7 2 1.5c0-.8.9-1.5 2-1.5s2 .7 2 1.5v.3l-1.8 16.8c-.2 1.4-.9 1.4-.9 1.4H7zM17.9 4.9c-.3-.5-1.1-.9-1.9-.9-.8 0-1.6.4-2 .9L13.8 20h2.9l1.2-15.1zm-7.9 0C9.6 4.4 8.8 4 8 4s-1.6.4-1.9.9L7.3 20h2.9L10 4.9z' })
    )
  );
};

exports.default = Icon;