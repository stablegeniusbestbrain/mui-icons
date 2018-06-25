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
      _react2.default.createElement('path', { d: 'M8.6 13.5v-3q0-.2-.2-.2H7.1q-.2 0-.2.2v3q0 .2.2.2h1.3q.2 0 .2-.2zm6.8 0v-3q0-.2-.2-.2h-1.3q-.2 0-.2.2v3q0 .2.2.2h1.3q.2 0 .2-.2zm6.9.4V24h-8.6v-4.3q0-1.1-.7-1.8t-1.9-.8-1.8.8-.7 1.8V24H0V13.9q0-.2.2-.2h1.3q.2 0 .2.2v1.5h1.7V7.1q0-.2.2-.2h1.3q.2 0 .2.2v1.5h1.8V7.1q0-.2.2-.2h1.3q.2 0 .2.2v1.5h1.7V7.1q0-.2.2-.2h.2V1.6q-.4-.3-.4-.7 0-.4.2-.6t.6-.3.6.3.3.6q0 .4-.4.7v.1h3.6q.2 0 .2.2v3q0 .2-.2.2h-3.6v1.8h.2q.2 0 .2.2v1.5h1.7V7.1q0-.2.2-.2h1.3q.2 0 .2.2v1.5h1.7V7.1q0-.2.3-.2h1.2q.3 0 .3.2v8.3h1.7v-1.5q0-.2.2-.2h1.3q.2 0 .2.2z' })
    )
  );
};

exports.default = Icon;