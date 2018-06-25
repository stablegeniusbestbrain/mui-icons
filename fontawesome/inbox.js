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
      _react2.default.createElement('path', { d: 'M15.4 12.9h4.2v-.2-.1L16.7 6H7.3l-2.9 6.6V12.9h4.2l1.3 2.5h4.2zm6.9.4v6.4q0 .4-.3.6t-.6.3H2.6q-.4 0-.6-.3t-.3-.6v-6.4q0-.9.3-1.7l3.2-7.4q.2-.3.5-.5t.7-.3h11.2q.3 0 .7.3t.5.5l3.2 7.4q.3.8.3 1.7z' })
    )
  );
};

exports.default = Icon;