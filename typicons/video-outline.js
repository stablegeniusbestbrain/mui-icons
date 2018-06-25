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
      _react2.default.createElement('circle', { cx: '7', cy: '11', r: '1' }),
      _react2.default.createElement('path', { d: 'M21.6 7.2c-.3-.2-.6-.3-.9-.1l-1.7.5C18.8 6.1 17.5 5 16 5H5C3.3 5 2 6.3 2 8v6c0 1.7 1.3 3 3 3h3V18.2c.1.7.4 1.4.9 1.9.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9c.6-.5.9-1.3.9-2.1v-1h2c1.5 0 2.8-1.1 3-2.6l1.7.5c.3.2.6.1.9-.1.2-.2.4-.5.4-.8V8c0-.3-.2-.6-.4-.8zM12 18c0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.2 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7v-2h2v2zm5-4c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v6zm3-1.4s-1.9-.6-2-.6v-2c.1 0 2-.6 2-.6v3.2z' })
    )
  );
};

exports.default = Icon;