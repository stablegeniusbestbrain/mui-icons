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
      _react2.default.createElement('path', { d: 'M17.7 8l.2-2.3H6.1l.6 7.1h8.2l-.3 3.1-2.6.7-2.7-.7-.1-1.9H6.8l.3 3.7L12 19l4.8-1.3.7-7.3H8.9L8.7 8h9zM2.6 1.7h18.8L19.7 21 12 23.1 4.3 21z' })
    )
  );
};

exports.default = Icon;