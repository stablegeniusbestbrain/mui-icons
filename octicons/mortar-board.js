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
      _react2.default.createElement('path', { d: 'M11.7 13.8L6 12c-6-12 0 2.3 0 3.8S8.7 18 12 18s6-.7 6-2.2V12l-5.7 1.8a1.1 1.1 0 0 1-.6 0zm.5-9.6a.5.5 0 0 0-.3 0L.4 7.8a.5.5 0 0 0 0 1l2.6.8v2.7c-.5.2-.7.7-.7 1.2 0 .3 0 .6.2.8-.2.2-.2.5-.2.7v3.9c0 .8 3 .8 3 0V15c0-.2-.1-.5-.3-.7.2-.2.3-.5.3-.8 0-.5-.3-1-.8-1.2v-2.2l7.3 2.3h.3l11.5-3.6a.5.5 0 0 0 0-1L12.1 4.2h.1zM12 9c-.8 0-1.5-.3-1.5-.7s.7-.8 1.5-.8 1.5.3 1.5.8-.6.7-1.5.7z' })
    )
  );
};

exports.default = Icon;