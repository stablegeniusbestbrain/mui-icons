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
      _react2.default.createElement('path', { d: 'M4 4h7.9c.6-1.1 1.2-2.1 2-3L15 2.1c-.4.6-.8 1.2-1.1 1.9H20c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2h-5.1l.4 1.2-1.9.8-.5-2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v13h8.5c0-.3-.1-.7-.1-1H12c-2.8 0-5.2-.5-6.9-1.2l.9-1.7c1 .5 3.2.9 6 .9h.2c0-.7 0-1.3.1-2H9s.4-4 2-8H4zm16 13V6h-7c-.9 2.2-1.4 4.5-1.7 6h2.9c-.2 1.3-.2 2.6-.1 3.9 1.8-.1 3.1-.4 3.9-.8l.9 1.7c-1.2.5-2.8.9-4.6 1.1 0 .4.1.7.2 1.1H20zM6 8h2v3H6V8zm10 0h2v3h-2V8z' })
    )
  );
};

exports.default = Icon;