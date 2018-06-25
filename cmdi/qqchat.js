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
      _react2.default.createElement('path', { d: 'M3.2 13.5c.6-1.3 1.4-2.4 2-2.6 0-.8.1-1.3.4-1.7 0 0-.1-.3.1-.7C5.9 4.9 8.2 2 12 2s6.1 2.9 6.3 6.5c.2.4.1.7.1.7.3.4.4.9.4 1.7.6.2 1.4 1.3 2 2.6.8 1.8.9 3.5.3 3.8-.4.2-1.1-.3-1.7-1.2-.2 1-.8 1.9-1.7 2.6.9.3 1.5.9 1.5 1.5 0 1-1.6 1.8-3.5 1.8-1.8 0-3.2-.7-3.5-1.5h-.4c-.3.8-1.7 1.5-3.5 1.5-1.9 0-3.5-.8-3.5-1.8 0-.6.6-1.2 1.5-1.5-.9-.7-1.5-1.6-1.7-2.6-.6.9-1.3 1.4-1.7 1.2-.6-.3-.5-2 .3-3.8z' })
    )
  );
};

exports.default = Icon;