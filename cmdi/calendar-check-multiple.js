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
      _react2.default.createElement('path', { d: 'M21 17V8H7v9h14zm0-14c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1zm-3.5 8.1l-4.4 4.4-2.7-2.7 1.1-1 1.6 1.6 3.4-3.4 1 1.1zM3 21h14v2H3c-1.1 0-2-.9-2-2V9h2v12z' })
    )
  );
};

exports.default = Icon;