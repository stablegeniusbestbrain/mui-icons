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
      _react2.default.createElement('path', { d: 'M14.3 15.1q.2.2 0 .4-.7.7-2.3.7t-2.3-.7q-.2-.2 0-.4.1-.1.2-.1t.2.1q.5.6 1.9.6t1.9-.6q.1-.1.2-.1t.2.1zM10.8 13q0 .4-.3.8t-.8.3-.7-.3-.3-.8q0-.4.3-.7t.7-.3.8.3.3.7zm4.5 0q0 .4-.3.8t-.7.3-.8-.3-.3-.8q0-.4.3-.7t.8-.3.7.3.3.7zm2.9-1.3q0-.6-.4-1t-1-.4q-.6 0-1 .4-1.5-1-3.6-1.1l.8-3.3 2.3.6q0 .4.3.7t.7.3q.4 0 .7-.3t.3-.7-.3-.8-.7-.3q-.7 0-.9.6l-2.6-.6q-.2 0-.3.2l-.8 3.6q-2 .1-3.5 1.1-.4-.4-1-.4t-1 .4-.4 1q0 .4.2.7t.6.5q-.1.3-.1.6 0 1.7 1.6 2.8t3.9 1.2q2.3 0 3.9-1.2t1.6-2.8q0-.3-.1-.6.4-.2.6-.5t.2-.7zm4.1-6.1v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;