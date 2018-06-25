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
      _react2.default.createElement('path', { d: 'M24 15q0 2.2-1.7 6 0 .1-.1.4t-.2.4-.2.3q-.2.2-.4.2t-.3-.1-.1-.4v-.3q0-.2.1-.4v-1.6q0-1.4-.2-2.4t-.7-1.9-1-1.3-1.4-1-1.8-.5-2.1-.3-2.3-.1h-3v3.4q0 .4-.3.6t-.6.3-.6-.3L.3 9.2Q0 8.9 0 8.6T.3 8l6.8-6.9q.3-.2.6-.2t.6.2.3.6v3.4h3q9.5 0 11.7 5.4.7 1.8.7 4.5z' })
    )
  );
};

exports.default = Icon;