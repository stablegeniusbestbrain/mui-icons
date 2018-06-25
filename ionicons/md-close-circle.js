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
        _react2.default.createElement('path', { d: 'M256 48C140.56 48 48 140.56 48 256c0 115.436 92.56 208 208 208 115.435 0 208-92.564 208-208 0-115.44-92.564-208-208-208zm104.002 282.88L330.882 360 256 285.118l-74.88 74.88-29.122-29.117L226.88 256 152 181.12l29.12-29.117L256 226.88l74.88-74.877L360 181.12 285.12 256 360 330.88z' })
      )
    )
  );
};

exports.default = Icon;