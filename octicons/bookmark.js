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
      _react2.default.createElement('path', { d: 'M18 0H6C4.9 0 4.5.4 4.5 1.5V24l7.5-4.6 7.5 4.6V1.5C19.5.4 19.1 0 18 0zm-1.2 6.4l-2.8 2 1.1 3.3c.1.3 0 .4-.3.2l-2.8-2-2.8 2c-.3.2-.4.1-.3-.2L10 8.4l-2.8-2c-.3-.3-.2-.4.1-.4h3.5l1-3.3h.4l1 3.3h3.5c.3 0 .4.1.1.4z' })
    )
  );
};

exports.default = Icon;