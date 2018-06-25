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
      _react2.default.createElement('path', { d: 'M21.6 21.9l-5.1-11.4v-6H18V3H4.5v1.5H6v6L.9 21.9A1.5 1.5 0 0 0 2.3 24h17.9c1.1 0 1.8-1.1 1.4-2.1zM5.6 15l1.9-4.5v-6H15v6l1.9 4.5H5.6zm6.4-3h1.5v1.5H12V12zm-1.5-1.5H9V9h1.5v1.5zm0-4.5H12v1.5h-1.5V6zm0-4.5H9V0h1.5v1.5z' })
    )
  );
};

exports.default = Icon;