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
      _react2.default.createElement('path', { d: 'M2 3h8c0-1.1.9-2 2-2s2 .9 2 2h8v2h-1v11h-5.7l1.7 6h-2l-1.7-6h-2.5L9 22H7l1.8-6H3V5H2V3zm3 2v9h14V5H5zm6.9 6.9c-.1 0-.3.1-.4.1-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5.1 0 .3.1.4.1l1.4 1.4c.3.4.6.7.6 1 0 .3-.3.6-.6 1l-1.4 1.4z' })
    )
  );
};

exports.default = Icon;