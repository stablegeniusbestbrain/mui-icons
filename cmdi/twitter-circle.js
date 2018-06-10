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
      _react2.default.createElement('path', { d: 'M17.7 9.3c.5-.4 1-.8 1.3-1.4-.4.2-.9.4-1.4.4.5-.3.9-.8 1.1-1.4-.5.2-1.1.5-1.7.6-1.6-1.9-5.3-.4-4.6 2.4-2.6-.1-4.2-1.3-5.6-2.7-.7 1.2-.1 3 .8 3.5-.4 0-.8-.1-1.1-.3 0 1.6.9 2.3 2.1 2.7-.4.1-.8.1-1.2 0 .4 1.1 1.2 1.8 2.5 1.9-.9.8-2.6 1.3-3.9 1.1 1.1.7 2.5 1.3 4.3 1.2 4.4-.2 7.3-3.4 7.4-8zM12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z' })
    )
  );
};

exports.default = Icon;