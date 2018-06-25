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
      _react2.default.createElement('path', { d: 'M8 2h8c-.3.7-.7 1.3-.4 3 .2 1.7 1.1 4.3.7 5.7-.5 1.4-2.1 1.6-3 3.2-.8 1.5-.8 4.6-.2 6 .6 1.4 1.7 1.3 2.3 1.4.6 0 .6.4.6.7H8c0-.3 0-.7.6-.7.6-.1 1.7 0 2.3-1.4.6-1.4.6-4.5-.2-6-.9-1.6-2.5-1.8-2.9-3.2-.5-1.4.4-4 .6-5.7.3-1.7-.1-2.3-.4-3zm2 2c0 1.2-.2 2.2-.4 3h4.7c-.2-.8-.3-1.8-.3-3h-4z' })
    )
  );
};

exports.default = Icon;