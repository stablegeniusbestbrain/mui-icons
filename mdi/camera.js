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
      _react2.default.createElement('path', { d: 'M9.4 10.5l4.8-8.3c-.7-.1-1.4-.2-2.2-.2-2.4 0-4.6.9-6.3 2.3l3.6 6.3.1-.1zM21.5 9c-.9-2.9-3.1-5.3-6-6.3L11.9 9h9.6zm.3 1h-7.5l.3.5 4.8 8.3C21 17 22 14.6 22 12c0-.7-.1-1.3-.2-2zM8.5 12L4.6 5.3C3 7 2 9.4 2 12c0 .7.1 1.3.2 2h7.5l-1.2-2zm-6 3c.9 2.9 3.1 5.3 6 6.3l3.6-6.3H2.5zm11.2 0l-3.9 6.8c.7.1 1.4.2 2.2.2 2.4 0 4.6-.9 6.3-2.3l-3.6-6.3-1 1.6z' })
    )
  );
};

exports.default = Icon;