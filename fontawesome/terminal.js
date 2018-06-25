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
      _react2.default.createElement('path', { d: 'M8.7 13.2l-6.2 6.2q-.2.1-.4.1t-.3-.1l-.6-.7q-.2-.1-.2-.3t.2-.3l5.2-5.2-5.2-5.3Q1 7.5 1 7.3t.2-.3l.6-.7q.2-.1.3-.1t.4.1l6.2 6.2q.1.2.1.4t-.1.3zm14.4 6.1v.8q0 .2-.1.4t-.3.1H9.9q-.2 0-.4-.1t-.1-.4v-.8q0-.2.1-.3t.4-.1h12.8q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;