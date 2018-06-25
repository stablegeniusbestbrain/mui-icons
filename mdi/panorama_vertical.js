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
      _react2.default.createElement('path', { d: 'M19.9 21.1c-1.1-2.9-1.6-6-1.6-9.1 0-3.1.6-6.2 1.6-9.1.1-.1.1-.2.1-.3 0-.4-.2-.6-.6-.6H4.6c-.4 0-.6.2-.6.6 0 .1 0 .2.1.3 1.1 2.9 1.6 6 1.6 9.1 0 3.1-.5 6.2-1.6 9.1-.1.1-.1.2-.1.3 0 .4.2.6.6.6h14.8c.4 0 .6-.2.6-.6 0-.1 0-.2-.1-.3zM6.5 20c.8-2.6 1.2-5.3 1.2-8s-.4-5.4-1.2-8h10.9c-.7 2.6-1.1 5.3-1.1 8s.4 5.4 1.1 8H6.5z' })
    )
  );
};

exports.default = Icon;