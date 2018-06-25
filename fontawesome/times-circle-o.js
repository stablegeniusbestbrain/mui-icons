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
      _react2.default.createElement('path', { d: 'M16.4 14.5l-1.9 1.9q-.2.1-.4.1t-.3-.1L12 14.6l-1.8 1.8q-.2.1-.3.1t-.4-.1l-1.9-1.9q-.1-.2-.1-.4t.1-.3L9.4 12l-1.8-1.8q-.1-.2-.1-.3t.1-.4l1.9-1.9q.2-.1.4-.1t.3.1L12 9.4l1.8-1.8q.2-.1.3-.1t.4.1l1.9 1.9q.1.2.1.4t-.1.3L14.6 12l1.8 1.8q.1.2.1.3t-.1.4zm2.9-2.5q0-2-1-3.7t-2.6-2.6-3.7-1-3.7 1-2.6 2.6-1 3.7 1 3.7 2.6 2.6 3.7 1 3.7-1 2.6-2.6 1-3.7zm3 0q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;