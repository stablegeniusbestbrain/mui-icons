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
      _react2.default.createElement('path', { d: 'M15.9 16.2c2.4 0 3.6-.8 3.6-2.4 0-1.3-.7-2.1-2.3-2.5l-1.1-.2c-.6-.2-.9-.5-.9-1 0-.6.4-.9 1.2-.9.8 0 1.3.3 1.3 1l1.7-.2c-.1-1.5-1.1-2.2-2.9-2.2-2 0-3 .8-3 2.5 0 1.2.6 1.9 1.9 2.3l1.2.2c.8.2 1.2.6 1.2 1.1 0 .6-.6.9-1.9.9-1.5 0-2.4-.7-2.9-2.2l-.6-1.7c-.4-1.1-.8-1.9-1.3-2.4-.6-.4-1.4-.7-2.6-.7-1 0-2 .4-2.8 1.2-.8.8-1.2 1.8-1.2 3.1s.4 2.3 1.2 3c.7.7 1.6 1.1 2.7 1.1s1.9-.3 2.6-.8l-.6-1.5c-.5.6-1.2.9-1.9.9s-1.2-.3-1.7-.8c-.4-.5-.6-1.1-.6-1.9 0-1 .2-1.7.7-2.2.5-.4 1.1-.7 1.7-.7.7 0 1.1.2 1.4.6.3.3.6.9.8 1.6l.6 1.8c.6 2 2.1 3 4.5 3' })
    )
  );
};

exports.default = Icon;