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
      _react2.default.createElement('path', { d: 'M20.5 5.2l-1.4-1.6c-.2-.4-.6-.6-1.1-.6H6c-.5 0-.9.2-1.2.5L3.5 5.2c-.3.4-.5.8-.5 1.3V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.5-.2-.9-.5-1.3zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.1 5l.8-1h12l1 1H5.1z' })
    )
  );
};

exports.default = Icon;