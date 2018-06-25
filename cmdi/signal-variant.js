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
      _react2.default.createElement('path', { d: 'M4 6V4h.1C12.9 4 20 11.1 20 19.9v.1h-2v-.1C18 12.2 11.8 6 4 6zm0 4V8c6.6 0 12 5.4 12 12h-2c0-5.5-4.5-10-10-10zm0 4v-2c4.4 0 8 3.6 8 8h-2c0-3.3-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4H4v-4z' })
    )
  );
};

exports.default = Icon;