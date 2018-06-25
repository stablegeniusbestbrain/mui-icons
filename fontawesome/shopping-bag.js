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
      _react2.default.createElement('path', { d: 'M23.5 18.9L24 23q0 .4-.2.7-.3.3-.7.3H.9q-.4 0-.7-.3-.2-.3-.2-.7l.5-4.1h23zM22.3 7.6L23.4 18H.6L1.7 7.6q.1-.3.3-.5t.6-.2H6v1.7q0 .7.5 1.2t1.2.5 1.2-.5.5-1.2V6.9h5.2v1.7q0 .7.5 1.2t1.2.5 1.2-.5.5-1.2V6.9h3.4q.4 0 .6.2t.3.5zm-5.2-2.5v3.5q0 .3-.2.6t-.6.2-.6-.2-.3-.6V5.1q0-1.4-1-2.4t-2.4-1-2.4 1-1 2.4v3.5q0 .3-.3.6t-.6.2-.6-.2-.2-.6V5.1q0-2.1 1.5-3.6T12 0t3.6 1.5 1.5 3.6z' })
    )
  );
};

exports.default = Icon;