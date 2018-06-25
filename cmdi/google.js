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
      _react2.default.createElement('path', { d: 'M21.4 11.1h-9.2v2.7h6.5c-.3 3.8-3.5 5.5-6.5 5.5-3.8 0-7.2-3-7.2-7.3 0-4.1 3.2-7.3 7.2-7.3 3.1 0 4.9 2 4.9 2l1.9-2S16.6 2 12.1 2C6.4 2 2 6.8 2 12c0 5.1 4.2 10 10.2 10 5.4 0 9.3-3.7 9.3-9.1 0-1.1-.1-1.8-.1-1.8z' })
    )
  );
};

exports.default = Icon;