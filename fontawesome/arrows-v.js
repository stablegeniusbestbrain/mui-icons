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
      _react2.default.createElement('path', { d: 'M16.3 4.3q0 .3-.3.6t-.6.2h-1.7v13.8h1.7q.4 0 .6.2t.3.6-.3.6l-3.4 3.4q-.3.3-.6.3t-.6-.3L8 20.3q-.3-.2-.3-.6t.3-.6.6-.2h1.7V5.1H8.6q-.4 0-.6-.2t-.3-.6.3-.6L11.4.3q.3-.3.6-.3t.6.3L16 3.7q.3.2.3.6z' })
    )
  );
};

exports.default = Icon;