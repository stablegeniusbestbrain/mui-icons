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
      _react2.default.createElement('path', { d: 'M20.9 9.5l-2.7-2.6c-.6-.5-1.5-.9-2.3-.9H13v-.5c0-.8-.7-1.5-1.5-1.5S10 4.7 10 5.5V6H6.5C4.6 6 3 7.6 3 9.5c0 1.4.8 2.6 2 3.2l-1.8 1.8 2.5 2.6c.6.5 1.5.9 2.3.9h2.2l.8 4h1l.8-4h2.7c1.9 0 3.5-1.6 3.5-3.5 0-.9-.4-1.7-.9-2.3l.1-.1 2.7-2.6zM15.5 16H8c-.3 0-.7-.2-.9-.4L6 14.5l1.1-1.1c.2-.2.6-.4.9-.4h7.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm1.3-5.3c-.2.1-.6.3-.9.3H6.5C5.7 11 5 10.3 5 9.5S5.7 8 6.5 8h9.4c.3 0 .7.2.9.3L18 9.5l-1.2 1.2z' })
    )
  );
};

exports.default = Icon;