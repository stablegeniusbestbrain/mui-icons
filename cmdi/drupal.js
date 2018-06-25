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
      _react2.default.createElement('path', { d: 'M20.5 14.7c0 .6-.2 1.7-.7 2.4-.4.7-.7 1-1.4 1-.7-.1-2.1-2.3-3-2.4-1.2 0-3.7 2.5-5.7 2.5-1.2 0-1.6-.2-1.9-.5-.6-.4-.9-1-.9-1.9 0-1.6 1.5-3 3.3-3 2.4 0 4 2.4 5.2 2.3.9 0 2.8-1.9 3.8-1.9.9-.3 1.3.8 1.3 1.5zm-3.9-9.4c-1-.7-2-1-3.1-1.6-.6-.4-1.4-1.4-2.2-2.3-.3 1.4-.5 2-1.1 2.4-1 .7-1.6 1.1-2.5 1.5C6.9 5.7 3 8 3 13.2c0 5.1 4.4 8.8 9.1 8.8 4.7 0 8.9-3.5 8.9-8.7.2-5.3-3.7-7.6-4.4-8z' })
    )
  );
};

exports.default = Icon;