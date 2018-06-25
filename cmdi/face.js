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
      _react2.default.createElement('path', { d: 'M9 11.8c-.7 0-1.2.5-1.2 1.2s.5 1.3 1.2 1.3 1.3-.6 1.3-1.3-.6-1.2-1.3-1.2zm6 0c-.7 0-1.2.5-1.2 1.2s.5 1.3 1.2 1.3 1.3-.6 1.3-1.3-.6-1.2-1.3-1.2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8v-.9c2.4-1 4.3-2.9 5.3-5.3 1.8 2.5 4.8 4.2 8.1 4.2.8 0 1.6-.1 2.3-.3.2.7.3 1.5.3 2.3 0 4.4-3.6 8-8 8z' })
    )
  );
};

exports.default = Icon;