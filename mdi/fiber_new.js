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
      _react2.default.createElement('path', { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.5 15H7.3l-2.5-3.5V15H3.5V9h1.3l2.5 3.5V9h1.2v6zm5-4.7H11v1.1h2.5v1.2H11v1.1h2.5V15h-4V9h4v1.3zm7 3.7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V9h1.3v4.5h1.1V10h1.2v3.5h1.2V9h1.2v5z' })
    )
  );
};

exports.default = Icon;