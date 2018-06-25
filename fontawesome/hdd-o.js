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
      _react2.default.createElement('path', { d: 'M15.6 16.3q0 .4-.3.7t-.7.4-.8-.4-.3-.7.3-.8.8-.3.7.3.3.8zm3.5 0q0 .4-.3.7t-.8.4-.8-.4-.3-.7.3-.8.8-.3.8.3.3.8zm1.5 2.1v-4.3q0-.1-.2-.3t-.3-.1H3.9q-.2 0-.3.1t-.2.3v4.3q0 .2.2.3t.3.2h16.2q.2 0 .3-.2t.2-.3zM4.1 12h15.8l-2.1-6.5-.2-.2q-.1-.1-.4-.2H6.8q-.2 0-.4.2t-.2.2zm18.2 2.1v4.3q0 .9-.6 1.5t-1.6.7H3.9q-.9 0-1.6-.7t-.6-1.5v-4.3q0-.3.2-1L4.6 5q.2-.7.8-1.1t1.4-.5h10.4q.8 0 1.4.5t.8 1.1l2.7 8.1q.2.7.2 1z' })
    )
  );
};

exports.default = Icon;