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
      _react2.default.createElement('path', { d: 'M24.9 12.9q-.1.4-3.9 1.2l-4.7.5-3 .8h-.9l-3.9 4.7h.9q.4 0 .6.1t.3.2-.3.1-.6.1H5.1v-.5H6v-5.5H3.9l-2.6 3H0l-.4-.5v-2.5H0v-.5h1.7V14l-2.6-.3V12l2.6-.3v-.1H0v-.5h-.4V8.6l.4-.5h1.3l2.6 3H6V5.6h-.9v-.5h4.3q.4 0 .6.1t.3.2-.3.1-.6.1h-.9l3.9 4.7h.9l3 .8 4.7.5q3.5.7 3.8 1.2z' })
    )
  );
};

exports.default = Icon;