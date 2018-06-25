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
      _react2.default.createElement('path', { d: 'M22.7 22.7L1.3 1.3 0 2.5l4.4 4.4 2.2 4.7L5.3 14c-.2.3-.3.6-.3 1 0 1.1.9 2 2 2h7.5l1.3 1.4c-.5.3-.8.9-.8 1.6 0 1.1.9 2 2 2 .7 0 1.3-.3 1.6-.8l2.9 2.8 1.2-1.3zM7.4 15c-.1 0-.2-.1-.2-.2v-.2l.9-1.6h2.4l2 2H7.4zm8.2-2c.7 0 1.4-.4 1.7-1l3.6-6.5c.1-.2.1-.3.1-.5 0-.5-.4-1-1-1H6.5l9.1 9zM7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;