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
        _react2.default.createElement('path', { d: 'M368 416H80V144h224.117l16-16H64v304h320V191.883l-16 16z' }),
        _react2.default.createElement('path', { d: 'M237.623 284.084l-9.706-9.707L399.24 103.054 387.927 91.74 208 271.65V304h32.216L420.26 124.016l-11.313-11.286zm206.59-203.772l-12.465-12.466c-2.664-2.38-6.192-3.846-10.002-3.846a14.758 14.758 0 0 0-9.93 3.85L399.667 80l.08.08 11.293 11.293 21.02 21.02 12.15-12.15c2.382-2.625 3.79-6.117 3.79-9.93 0-3.81-1.408-7.338-3.787-10z' })
      )
    )
  );
};

exports.default = Icon;