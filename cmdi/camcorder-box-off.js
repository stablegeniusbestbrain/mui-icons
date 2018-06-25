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
      _react2.default.createElement('path', { d: 'M6 8h.7l7.3 7.3v.7H6M2.3 1L1 2.3l2 2c-.6.3-1 1-1 1.7v12c0 1.1.9 2 2 2h14.7l2 2 1.3-1.3M20 4H7.8l4 4H14v2.2l.6.5L18 8v6.2l4 4V6c0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;