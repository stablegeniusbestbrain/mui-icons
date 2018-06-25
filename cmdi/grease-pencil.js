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
      _react2.default.createElement('path', { d: 'M18.6 1.5c-.5 0-1 .2-1.4.6l-6.4 6.4 4.2 4.2 6.4-6.4c.8-.8.8-2.1 0-2.8L20 2.1c-.4-.4-.9-.6-1.4-.6zm-8.8 8l-6.6 6.6.7.7c-.5.4-1 1-1.5 1.5-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l1.5-1.5.7.7 6.6-6.6' })
    )
  );
};

exports.default = Icon;