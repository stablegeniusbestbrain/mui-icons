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
      _react2.default.createElement('path', { d: 'M6.7 10.9c.4.4 1.9 2 1.9 2l.9-.9-1.3-1.3L10.7 8s-1.1-1.1-.6-.7c.4-1.8 0-3.8-1.4-5.2C7.4.8 5.5.3 3.8.8l2.9 3-.8 2.9-2.8.8-2.9-3c-.5 1.8 0 3.7 1.3 5.1 1.4 1.5 3.4 1.9 5.2 1.3zm9.7 2.9l-3.5 3.5 5.7 5.9c.5.5 1.1.8 1.8.8.6 0 1.2-.3 1.7-.8.9-.9.9-2.5 0-3.5l-5.7-5.9zm7.6-10L20.3 0 9.5 11.2l1.3 1.4-6.4 6.6-1.5.8-2.1 3.4.5.6 3.3-2.2.8-1.5 6.5-6.7 1.3 1.4L24 3.8z' })
    )
  );
};

exports.default = Icon;