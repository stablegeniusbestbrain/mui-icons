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
      _react2.default.createElement('path', { d: 'M12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.7-3.6c-.3-.2-.6-.3-.9-.4.3-.1.6-.2.9-.4 1.9-1.1 3-3.1 3-5.2-1.8-1-4.1-1.1-6 0-.3.2-.5.4-.8.5.1-.3.1-.6.1-.9 0-2.2-1.2-4.2-3-5.2-1.8 1.1-3 3-3 5.2 0 .3 0 .6.1 1-.3-.2-.5-.4-.8-.6-1.9-1.1-4.2-1-6 0 0 2.1 1.1 4.1 3 5.2.3.2.6.3.9.4-.3.1-.6.2-.9.4-1.9 1.1-3 3.1-3 5.2 1.8 1 4.1 1.1 6 0 .3-.2.5-.4.8-.6-.1.4-.1.7-.1 1 0 2.2 1.2 4.2 3 5.2 1.8-1 3-3 3-5.2 0-.3 0-.6-.1-.9.3.2.5.3.8.5 1.9 1.1 4.2 1 6 0 0-2.1-1.1-4.1-3-5.2z' })
    )
  );
};

exports.default = Icon;