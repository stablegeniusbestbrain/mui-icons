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
      _react2.default.createElement('path', { d: 'M24 12q0 .3-.3.6L20.3 16q-.2.3-.6.3t-.6-.3-.2-.6v-1.7h-5.2v5.2h1.7q.4 0 .6.2t.3.6-.3.6l-3.4 3.4q-.3.3-.6.3t-.6-.3L8 20.3q-.3-.2-.3-.6t.3-.6.6-.2h1.7v-5.2H5.1v1.7q0 .4-.2.6t-.6.3-.6-.3L.3 12.6Q0 12.3 0 12t.3-.6L3.7 8q.2-.3.6-.3t.6.3.2.6v1.7h5.2V5.1H8.6q-.4 0-.6-.2t-.3-.6.3-.6L11.4.3q.3-.3.6-.3t.6.3L16 3.7q.3.2.3.6t-.3.6-.6.2h-1.7v5.2h5.2V8.6q0-.4.2-.6t.6-.3.6.3l3.4 3.4q.3.3.3.6z' })
    )
  );
};

exports.default = Icon;