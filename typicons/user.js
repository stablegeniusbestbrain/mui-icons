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
      _react2.default.createElement('path', { d: 'M17 9c0-1.4-.6-2.6-1.5-3.5C14.6 4.6 13.4 4 12 4s-2.6.6-3.5 1.5C7.6 6.4 7 7.6 7 9s.6 2.6 1.5 3.5c.9.9 2.1 1.5 3.5 1.5s2.6-.6 3.5-1.5c.9-.9 1.5-2.1 1.5-3.5zM6 19c0 1 2.3 2 6 2 3.5 0 6-1 6-2 0-2-2.4-4-6-4-3.7 0-6 2-6 4z' })
    )
  );
};

exports.default = Icon;