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
      _react2.default.createElement('path', { d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.1 0-3.8-1.2-4.6-3h1.7c.7.9 1.7 1.5 2.9 1.5 1.9 0 3.5-1.6 3.5-3.5S13.9 9.5 12 9.5c-1.3 0-2.5.8-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.7 8.9 10.2 8 12 8c2.8 0 5 2.2 5 5s-2.2 5-5 5z' })
    )
  );
};

exports.default = Icon;