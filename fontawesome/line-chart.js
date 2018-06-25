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
      _react2.default.createElement('path', { d: 'M25.7 20.6v1.7H-1.7V1.7H0v18.9h25.7zM24 3.9v5.8q0 .3-.3.4t-.4-.1l-1.7-1.6-8.4 8.4q-.2.2-.3.2t-.4-.2l-3.1-3.1-5.5 5.6-2.6-2.6 7.8-7.8q.2-.2.3-.2t.3.2l3.2 3.1 6.2-6.2-1.6-1.6q-.3-.2-.1-.5t.3-.3h5.9q.2 0 .3.1t.1.4z' })
    )
  );
};

exports.default = Icon;