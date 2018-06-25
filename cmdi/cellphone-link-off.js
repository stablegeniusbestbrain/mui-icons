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
      _react2.default.createElement('path', { d: 'M23 8h-6c-.6 0-1 .4-1 1v4.2l2 2V10h4v7h-2.2l3 3h.2c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zM4 6.3L14.7 17H4V6.3zM1.9 1.6L.7 2.9l1.8 1.8c-.3.4-.5.8-.5 1.3v11H0v3h17.7l2.4 2.4 1.3-1.3L3.9 3.6l-2-2zM22 6V4H6.8l2 2H22z' })
    )
  );
};

exports.default = Icon;