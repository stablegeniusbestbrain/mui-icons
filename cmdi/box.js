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
      _react2.default.createElement('path', { d: 'M15.4 14c0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.1-2.5 2.5 0 1.5 1.1 2.6 2.5 2.6s2.6-1.2 2.6-2.6zm1.7 0c0 2.4-1.9 4.3-4.3 4.3-1.6 0-3-.9-3.7-2.3-.8 1.4-2.2 2.3-3.8 2.3-2.4 0-4.3-1.9-4.3-4.2V7c0-.4.4-.8.9-.8.4 0 .8.4.8.8v3.6c.7-.5 1.6-.8 2.6-.8 1.6 0 3 .9 3.8 2.2.7-1.3 2.1-2.2 3.7-2.2 2.4 0 4.3 1.9 4.3 4.2zm-9.3 0c0-1.4-1.1-2.5-2.5-2.5S2.7 12.6 2.7 14c0 1.5 1.2 2.6 2.6 2.6 1.4 0 2.5-1.2 2.5-2.6zm15 3c.2.1.2.3.2.5s-.1.5-.3.6c-.2.2-.4.2-.5.2-.3 0-.6-.1-.7-.3l-1.9-2.5-1.9 2.5c-.2.2-.4.3-.7.3-.2 0-.3 0-.5-.1-.2-.2-.3-.5-.3-.7 0-.2 0-.4.1-.5l2.2-3-2.2-2.9c-.1-.1-.1-.3-.1-.5s.1-.5.3-.7c.4-.2.9-.2 1.2.2l1.9 2.5 1.9-2.5c.3-.4.8-.4 1.2-.2.2.2.3.5.3.7 0 .2 0 .4-.2.5L20.7 14l2.1 3z' })
    )
  );
};

exports.default = Icon;