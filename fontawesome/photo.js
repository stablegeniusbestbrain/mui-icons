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
      _react2.default.createElement('path', { d: 'M7.7 7.7q0 1.1-.7 1.8t-1.9.8-1.8-.8-.7-1.8.7-1.8 1.8-.8 1.9.8.7 1.8zm13.7 5.2v6H2.6v-2.6L6.9 12 9 14.1l6.9-6.8zm1.3-9.5H1.3q-.2 0-.3.2t-.1.3v16.2q0 .2.1.3t.3.2h21.4q.2 0 .3-.2t.1-.3V3.9q0-.2-.1-.3t-.3-.2zm2.2.5v16.2q0 .9-.7 1.6t-1.5.6H1.3q-.9 0-1.5-.6t-.7-1.6V3.9q0-.9.7-1.6t1.5-.6h21.4q.9 0 1.5.6t.7 1.6z' })
    )
  );
};

exports.default = Icon;