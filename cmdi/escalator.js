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
      _react2.default.createElement('path', { d: 'M20 8h-1.1l-12 12H4c-1.1 0-2-.9-2-2s.9-2 2-2h1.3L7 14.3V10c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v1.3L17.3 4H20c1.1 0 2 .9 2 2s-.9 2-2 2zM8.5 5c.8 0 1.5.7 1.5 1.5S9.3 8 8.5 8 7 7.3 7 6.5 7.7 5 8.5 5z' })
    )
  );
};

exports.default = Icon;