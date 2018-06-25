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
      _react2.default.createElement('path', { d: 'M9.4 19.3V20.2q0 .3-.1.3t-.3.1H4.7q-1.6 0-2.7-1.2T.9 16.7V7.3Q.9 5.7 2 4.6t2.7-1.2H9q.2 0 .3.2t.1.3V4.8q0 .1-.1.3t-.3 0H4.7q-.9 0-1.5.7t-.6 1.5v9.4q0 .9.6 1.5t1.5.7h4.5l.1.1.1.1v.2zM21.9 12q0 .3-.3.6l-7.3 7.3q-.2.2-.6.2t-.6-.2-.2-.6v-3.9h-6q-.4 0-.6-.2t-.3-.6V9.4q0-.3.3-.6t.6-.2h6V4.7q0-.3.2-.6t.6-.2.6.2l7.3 7.3q.3.3.3.6z' })
    )
  );
};

exports.default = Icon;