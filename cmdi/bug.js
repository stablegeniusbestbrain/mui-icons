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
      _react2.default.createElement('path', { d: 'M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.8c-.5-.8-1.1-1.5-1.8-2L17 4.4 15.6 3l-2.2 2.2C13 5.1 12.5 5 12 5c-.5 0-1 .1-1.4.2L8.4 3 7 4.4 8.6 6c-.7.5-1.3 1.2-1.8 2H4v2h2.1c-.1.3-.1.7-.1 1v1H4v2h2v1c0 .3 0 .7.1 1H4v2h2.8c1.1 1.8 3 3 5.2 3s4.1-1.2 5.2-3H20v-2h-2.1c.1-.3.1-.7.1-1v-1h2v-2h-2v-1c0-.3 0-.7-.1-1H20V8z' })
    )
  );
};

exports.default = Icon;