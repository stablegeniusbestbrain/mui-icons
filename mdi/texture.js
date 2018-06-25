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
      _react2.default.createElement('path', { d: 'M19.5 3.1L3.1 19.5c.1.4.3.7.5.9.2.2.6.4.9.5L20.9 4.5c-.2-.7-.7-1.2-1.4-1.4zM11.9 3L3 11.9v2.8L14.7 3h-2.8zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.6 0 1.1-.2 1.4-.6.4-.3.6-.8.6-1.4v-2l-4 4h2zm-9.7 0h2.8l8.9-8.9V9.3L9.3 21z' })
    )
  );
};

exports.default = Icon;