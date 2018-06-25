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
      _react2.default.createElement('path', { d: 'M21.9 19.7q0 .4-.3.6t-.6.3h-6.2q0 .2.1 1.1t.1 1.5q0 .3-.3.6t-.6.2H9.9q-.4 0-.6-.2t-.3-.6q0-.5.1-1.5t.1-1.1H3q-.3 0-.6-.3t-.3-.6.3-.6l5.4-5.4H4.7q-.3 0-.6-.2t-.2-.6.2-.6l5.4-5.4H6.9q-.4 0-.6-.3T6 6t.3-.6L11.4.3q.3-.3.6-.3t.6.3l5.1 5.1q.3.3.3.6t-.3.6-.6.3h-2.6l5.4 5.4q.2.2.2.6t-.2.6-.6.2h-3.1l5.4 5.4q.3.3.3.6z' })
    )
  );
};

exports.default = Icon;