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
      _react2.default.createElement('path', { d: 'M20.3 10.8c1.6.6 2.7 2.2 2.7 3.9 0 2.4-1.9 4.3-4.3 4.3H5.4C3 19 1 17 1 14.6c0-1.6.9-3 2.2-3.7-.1-.3-.2-.6-.2-.9 0-1.7 1.4-3 3.1-3 .7 0 1.3.2 1.8.6C9 5.5 11.2 4 13.8 4c3.6 0 6.6 2.8 6.6 6.4 0 .1-.1.3-.1.4zm-11.1.1c-1.8 0-3.2 1.2-3.2 2.8s1.4 2.8 3.2 2.8c1.1 0 2-.4 2.6-1.1l-1.1-1.2c-.3.5-.9.8-1.5.8-.8 0-1.4-.6-1.4-1.3 0-.8.6-1.3 1.4-1.3.5 0 .9.2 1.4.5.4.3 1.1 1.3 1.7 1.9 1.5 1.5 2.2 1.6 3.1 1.6 1.8 0 3.2-1.2 3.2-2.8 0-1.6-1.4-2.8-3.2-2.8-1 0-2 .4-2.5 1.1l1 1.1c.3-.4.9-.7 1.5-.7.8 0 1.4.6 1.4 1.3 0 .7-.6 1.3-1.4 1.3-.5 0-.9-.2-1.4-.5-.4-.3-1.1-1.3-1.7-2-1.5-1.4-2.2-1.5-3.1-1.5z' })
    )
  );
};

exports.default = Icon;