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
      _react2.default.createElement('path', { d: 'M10.9 21c-.8 0-1.5-.3-2.1-.9L1.7 13l7.1-7.1c1.1-1.2 3.1-1.2 4.2 0 .6.5.9 1.3.9 2.1 0 .7-.2 1.4-.7 2H18c1.7 0 3 1.3 3 3s-1.3 3-3 3h-4.8c.5.6.7 1.3.7 2 0 .8-.3 1.6-.9 2.1-.5.6-1.3.9-2.1.9zm-6.4-8l5.7 5.7c.4.4 1.1.4 1.4 0 .2-.2.3-.4.3-.7s-.1-.5-.3-.7L8.3 14H18c.6 0 1-.4 1-1s-.4-1-1-1H8.3l3.3-3.3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.3-.4-1-.4-1.4 0L4.5 13z' })
    )
  );
};

exports.default = Icon;