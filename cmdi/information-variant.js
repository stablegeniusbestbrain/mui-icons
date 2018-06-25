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
      _react2.default.createElement('path', { d: 'M13.5 4c-.8 0-1.5.7-1.5 1.5S12.7 7 13.5 7 15 6.3 15 5.5 14.3 4 13.5 4zm-.4 4.8c-1.2.1-4.4 2.7-4.4 2.7-.2.1-.1.1 0 .4.2.3.2.3.4.1.1-.1.5-.3 1-.6 2.1-1.4.4 1.7-.5 7-.4 2.7 2 1.3 2.6.9.6-.4 2.2-1.5 2.3-1.6.3-.2.1-.3-.1-.5-.1-.2-.2-.1-.2-.1-.7.5-1.9 1.4-2 .8-.2-.6 1-4.5 1.7-7.2.1-.6.4-2-.8-1.9z' })
    )
  );
};

exports.default = Icon;