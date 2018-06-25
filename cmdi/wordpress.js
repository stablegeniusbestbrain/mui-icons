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
      _react2.default.createElement('path', { d: 'M12.2 15.5l-2.6 6.2c.8.2 1.6.3 2.4.3.8 0 1.7-.1 2.4-.3m6.2-14.6c.2.9.2 1.9-.2 3.1-1 3.2-3.4 8.8-4.3 10.9 3.5-1.5 5.9-5 5.9-9 0-1.8-.5-3.6-1.4-5zM4.3 8.6s-.5-.6-1-.6h-.5c-.5 1.1-.8 2.6-.8 4 0 4.1 2.5 7.6 6.1 9.1m-5-14C4.8 4 8.1 2 12 2c2.5 0 4.8 1.1 6.5 2.6-.5-.1-1 0-1.6.3-1.3.7-1.7 2.8 0 3.9 1 .6 1.4 2.2 1.4 3.2-.1 1-2.5 5.6-2.5 5.6l-2.3-8s-.1-.5-.1-.7c0-.2.1-.4.2-.6.1-.1.2-.3.4-.3h1.1v-.9h-6V8h.2c.2 0 .4.3.6.5.2.2.5 1.1.8 1.9l.9 2.9-1.9 4.3L7.6 9s.1-.6.2-.7c.1-.1.2-.3.4-.3v-.9H3.1z' })
    )
  );
};

exports.default = Icon;