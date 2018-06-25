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
      _react2.default.createElement('path', { d: 'M21 14h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zm-7-5c0 1.4-.6 2.6-1.5 3.5-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5C4.6 11.6 4 10.4 4 9s.6-2.6 1.5-3.5C6.4 4.6 7.6 4 9 4s2.6.6 3.5 1.5c.9.9 1.5 2.1 1.5 3.5zm-5 6c-3.7 0-6 2-6 4 0 1 2.3 2 6 2 3.5 0 6-1 6-2 0-2-2.4-4-6-4z' })
    )
  );
};

exports.default = Icon;