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
      _react2.default.createElement('path', { d: 'M12 20.4c-1.2 0-1.9-.5-2.5-.9-.5-.3-.9-.6-1.4-.7-1.2-.1-1.5 0-2.1.1-.1 0-.3 0-.3-.2-.2-.8-.3-1-.4-1-1.3-.2-2.1-.5-2.3-.9 0-.2.1-.3.2-.3 1-.2 2-.7 2.8-1.7.6-.7.9-1.4 1-1.5.1-.3.2-.6.1-.8-.2-.4-.8-.6-1.4-.8-.4-.1-.9-.4-.8-.8 0-.3.4-.5.9-.4.4.1.7.2.9.2.4 0 .5-.1.6-.2-.2-1.7-.3-3.2.1-4.1 1.2-2.6 3.7-2.8 4.6-2.8.9 0 3.4.2 4.6 2.8.4.9.3 2.4.1 4.1.1.1.2.2.6.2.2 0 .5-.1.9-.2.5-.1.9.1.9.4.1.4-.4.7-.8.8-.6.2-1.2.4-1.4.8-.1.2 0 .5.1.8.1.1.4.8 1 1.5.8 1 1.8 1.5 2.8 1.7.1 0 .2.1.2.3-.2.4-1 .7-2.3.9-.2 0-.2.2-.4 1 0 .2-.2.2-.3.2-.6-.1-.9-.2-2.1-.1-.5.1-.9.4-1.4.7-.6.4-1.3 1-2.5.9z' })
    )
  );
};

exports.default = Icon;