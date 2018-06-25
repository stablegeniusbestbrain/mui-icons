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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M389.5 93l-11.3 11.6L449 176H192v16h257l-70.8 70.9 11.3 11.2 90.5-90.6zm-267 143.9l11.3 11.6L63 320h257v16H63l70.8 70.9-11.3 11.1L32 327.5z' })
      )
    )
  );
};

exports.default = Icon;