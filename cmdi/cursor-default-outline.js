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
      _react2.default.createElement('path', { d: 'M10.1 14.3c.5-.3 1.1-.1 1.3.5l2.3 4.9 1.8-.8-2.3-5c-.2-.5 0-1.1.5-1.3l.3-.1 2.3-.5L8 5.1v10.8l1.8-1.5.3-.1zm3.5 7.7c-.5.2-1.1 0-1.3-.5l-2.2-4.7-2.5 2c-.1.1-.4.2-.6.2-.6 0-1-.4-1-1V3c0-.6.4-1 1-1 .2 0 .5.1.6.2h.1l11.4 9.7c.5.3.5.9.2 1.4-.2.2-.4.3-.6.3l-3.2.6 2.2 4.8c.3.5.1 1.1-.4 1.3L13.6 22z' })
    )
  );
};

exports.default = Icon;