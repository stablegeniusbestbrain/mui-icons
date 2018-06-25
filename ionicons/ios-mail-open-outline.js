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
        _react2.default.createElement('path', { d: 'M256 64L64 192v256h384V192L256 64zm176 368H80V218.4l114.9 87.1-67.9 77.2 2 2 78.7-69.4L256 352l48.1-36.7 78.8 69.5 2-2-68-77.3 115-87.8V432zM256 331.8L102.7 214H192v-3.2L82.1 198.1l-.3-.2L256 84.1l174.6 114L320 210.8v3.2h90.4L256 331.8z' })
      )
    )
  );
};

exports.default = Icon;