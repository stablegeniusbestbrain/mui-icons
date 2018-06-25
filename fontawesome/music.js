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
      _react2.default.createElement('path', { d: 'M22.3 3v15q0 .7-.5 1.2t-1.1.8-1.4.4-1.3.2-1.3-.2-1.4-.4-1.1-.8-.5-1.2.5-1.2 1.1-.8 1.4-.4 1.3-.2q1.4 0 2.6.6V8.8l-10.3 3.1v9.5q0 .7-.5 1.2t-1.1.8-1.4.5T6 24t-1.3-.1-1.4-.5-1.1-.8-.5-1.2.5-1.2 1.1-.8 1.4-.4 1.3-.1q1.4 0 2.6.5v-13q0-.4.2-.7t.7-.5l11.1-3.4q.2-.1.4-.1.5 0 .9.4t.4.9z' })
    )
  );
};

exports.default = Icon;