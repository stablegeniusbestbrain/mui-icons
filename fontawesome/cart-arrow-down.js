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
      _react2.default.createElement('path', { d: 'M18 9.4q0-.3-.3-.6t-.6-.2-.6.2l-1.9 2V6.9q0-.4-.3-.6t-.6-.3-.6.3-.2.6v3.9l-2-2q-.3-.2-.6-.2t-.6.2-.3.6.3.6l3.4 3.5q.3.2.6.2t.6-.2l3.4-3.5q.3-.2.3-.6zM9.4 20.6q0 .7-.5 1.2t-1.2.5-1.2-.5-.5-1.2.5-1.2 1.2-.5 1.2.5.5 1.2zm12 0q0 .7-.5 1.2t-1.2.5-1.2-.5-.5-1.2.5-1.2 1.2-.5 1.2.5.5 1.2zM23.1 6v6.9q0 .3-.2.5t-.5.3l-14 1.6q0 .1.1.3t0 .4.1.3q0 .2-.3.8h12.3q.3 0 .6.3t.2.6-.2.6-.6.3H6.9q-.4 0-.6-.3T6 18q0-.2.1-.5t.4-.8.3-.5L4.4 5.1H1.7q-.3 0-.6-.2t-.2-.6.2-.6.6-.3h3.4q.3 0 .4.1t.3.2.2.4.1.3 0 .4.1.3h16.1q.3 0 .6.3t.2.6z' })
    )
  );
};

exports.default = Icon;