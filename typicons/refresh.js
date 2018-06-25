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
      _react2.default.createElement('path', { d: 'M12.9 13.2H18V8.1c0-1.2-.7-1.4-1.5-.6l-1.1 1.1c-1-.8-2.3-1.2-3.6-1.2-1.5 0-3 .6-4.1 1.7C6.6 10.2 6 11.6 6 13.2c0 1.5.6 3 1.7 4.1 1.1 1.1 2.6 1.7 4.1 1.7 1.6 0 3-.6 4.1-1.7.3-.3.6-.6.8-1 .3-.5.2-1.2-.4-1.6-.5-.3-1.2-.2-1.6.4-.1.2-.3.4-.4.6-.7.6-1.6 1-2.5 1-.9 0-1.8-.4-2.5-1-.6-.7-1-1.6-1-2.5 0-.9.4-1.8 1-2.5.7-.6 1.6-1 2.5-1 .7 0 1.4.2 1.9.6l-1.4 1.4c-.8.8-.6 1.5.6 1.5z' })
    )
  );
};

exports.default = Icon;