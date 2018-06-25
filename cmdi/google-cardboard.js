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
      _react2.default.createElement('path', { d: 'M20.7 6H3.2C2.6 6 2 6.6 2 7.3v10.4c0 .7.6 1.3 1.2 1.3H8c.5 0 1-.3 1.2-.8l1.4-3.5c.2-.5.7-1 1.4-1s1.2.5 1.4 1l1.4 3.5c.2.5.7.8 1.2.8h4.7c.7 0 1.3-.6 1.3-1.3V7.3c0-.7-.6-1.3-1.3-1.3zM7.2 14.6c-1.2 0-2.2-1-2.2-2.3C5 11 6 10 7.2 10c1.2 0 2.2 1 2.2 2.3 0 1.3-1 2.3-2.2 2.3zm9.6 0c-1.2 0-2.2-1.1-2.2-2.3 0-1.3 1-2.3 2.2-2.3 1.2 0 2.2 1 2.2 2.3 0 1.3-1 2.3-2.2 2.3z' })
    )
  );
};

exports.default = Icon;