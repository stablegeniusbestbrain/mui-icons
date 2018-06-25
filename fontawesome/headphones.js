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
      _react2.default.createElement('path', { d: 'M23.1 11.9q0 2.2-.8 4.2l-.2.6-2.5.5q-.3 1.1-1.2 1.8t-2.1.7v.4q0 .2-.1.4t-.3.1H15q-.2 0-.3-.1t-.1-.4v-7.7q0-.2.1-.3t.3-.1h.9q.1 0 .3.1t.1.3v.5q.9 0 1.7.4t1.3 1.3l.9-.1q.4-1.3.4-2.6 0-2-1.2-3.8t-3.2-2.8-4.2-1-4.2 1-3.2 2.8-1.2 3.8q0 1.3.4 2.6l.9.1q.5-.8 1.3-1.3t1.7-.4v-.5q0-.2.1-.3t.3-.1H9q.2 0 .3.1t.1.3v7.7q0 .2-.1.4t-.3.1h-.9q-.1 0-.3-.1t-.1-.4v-.4q-1.2 0-2.1-.7t-1.2-1.8l-2.5-.5-.2-.6q-.8-2-.8-4.2 0-2.1.9-3.9t2.4-3.3 3.5-2.2 4.3-.8 4.3.8 3.5 2.2T22.2 8t.9 3.9z' })
    )
  );
};

exports.default = Icon;