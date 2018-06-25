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
      _react2.default.createElement('path', { d: 'M19 3c1.1 0 2 .9 2 2v6h-2v2h-2v2h-2v2h-2v2h-2v2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14zm2 12v4c0 1.1-.9 2-2 2h-4v-2h2v-2h2v-2h2zm-2-6.5c0-.3-.2-.5-.5-.5h-13c-.3 0-.5.2-.5.5v7c0 .3.2.5.5.5H11v-1h2v-2h2v-2h2V9h2v-.5z' })
    )
  );
};

exports.default = Icon;