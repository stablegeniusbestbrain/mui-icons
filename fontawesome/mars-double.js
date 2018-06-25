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
      _react2.default.createElement('path', { d: 'M19.7 5.6q0-.2.1-.3t.3-.2H24q.3 0 .6.3t.3.6v3.9q0 .1-.2.3t-.3.1h-.8q-.2 0-.3-.1t-.2-.3V8.1l-3.4 3.4q1.1 1.3 1.5 2.8t.1 3.4q-.4 2.4-2.2 4.1t-4.3 2.1q-2.8.4-5.1-1.1t-3.3-4q-1.5 0-2.9-.7t-2.4-1.8-1.5-2.6-.4-3.1q.1-1.8 1-3.4t2.4-2.5T6 3.5q1.5-.2 3 .2t2.7 1.4l3.4-3.4h-1.8q-.2 0-.3-.1t-.1-.3V.4q0-.2.1-.3t.3-.1h3.8q.4 0 .6.3t.3.6v3.8q0 .2-.1.3t-.3.1h-.9q-.2 0-.3-.1t-.1-.3V2.9l-3.4 3.4q.8 1 1.2 2.3 2.5.1 4.4 1.7l3.4-3.4h-1.8q-.1 0-.3-.2t-.1-.3v-.8zm-6.8 5.5q0-.2-.1-.7-2.2.3-3.6 2t-1.5 3.9q0 .3.1.8 2.1-.4 3.6-2t1.5-4zm-12 0q0 2.3 1.4 4t3.7 2v-.8q0-2.8 1.8-5t4.5-2.6q-.7-1.6-2.2-2.6t-3.2-1q-2.5 0-4.3 1.8T.9 11.1zm12.8 11.2q2.5 0 4.3-1.8t1.7-4.2q0-2.3-1.5-4t-3.7-1.9q.1.3.1.7 0 2.9-1.8 5t-4.6 2.6q.7 1.6 2.2 2.6t3.3 1z' })
    )
  );
};

exports.default = Icon;