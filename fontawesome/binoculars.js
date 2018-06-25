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
      _react2.default.createElement('path', { d: 'M9.4 4.3v10.3q0 .3-.2.6t-.6.2v7.7q0 .4-.3.6t-.6.3H.9q-.4 0-.6-.3t-.3-.6v-6.8L3.3 4.6q.1-.3.5-.3h5.6zm4.3 0v9.4h-3.4V4.3h3.4zm10.3 12v6.8q0 .4-.3.6t-.6.3h-6.8q-.4 0-.6-.3t-.3-.6v-7.7q-.3 0-.6-.2t-.2-.6V4.3h5.6q.4 0 .5.3zM9.9.4v3H5.1v-3q0-.2.2-.3t.3-.1h3.8q.2 0 .3.1t.2.3zm9 0v3h-4.8v-3q0-.2.2-.3t.3-.1h3.8q.2 0 .3.1t.2.3z' })
    )
  );
};

exports.default = Icon;