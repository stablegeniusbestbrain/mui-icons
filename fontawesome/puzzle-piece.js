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
      _react2.default.createElement('path', { d: 'M23.1 14.7q0 1.1-.6 1.8t-1.6.7q-.6 0-1-.2t-.8-.5-.8-.5-.9-.3q-1.5 0-1.5 1.7 0 .5.2 1.6t.2 1.5v.1h-.4q-.5 0-1.3.1t-1.6.2-1.3.1q-.8 0-1.4-.4t-.5-1.1q0-.5.2-1t.5-.7.5-.8.2-1q0-1.1-.7-1.7t-1.8-.6q-1.1 0-1.9.6T6 16q0 .6.2 1.1t.4.9.5.7.2.7q0 .6-.6 1.2-.5.5-1.6.5-1.3 0-3.3-.4h-.3q-.2 0-.4-.1H.9V6.9h.2q.2 0 .4.1t.3 0q2 .3 3.3.3 1.1 0 1.6-.4.6-.6.6-1.2 0-.3-.2-.7t-.5-.7-.4-.9T6 2.3q0-1.1.8-1.7T8.7 0q1.1 0 1.8.6t.7 1.7q0 .5-.2 1t-.5.8-.5.7-.2 1q0 .7.5 1.1t1.4.4q.8 0 2.4-.2t2.2-.3v.1l-.1.2q-.1.2 0 .4t-.1.3q-.3 2-.3 3.3 0 1.1.5 1.6.6.6 1.2.6.3 0 .6-.2t.8-.5.8-.4 1.1-.2q1.1 0 1.7.8t.6 1.9z' })
    )
  );
};

exports.default = Icon;