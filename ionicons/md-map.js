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
        _react2.default.createElement('path', { d: 'M437.333 64c-2.176 0-4.396 1.37-9.176 3.207S320 108.802 320 108.802L192 64 71.47 104.53c-4.273 1.074-7.47 5.334-7.47 10.667v322.136C64 443.73 68.27 448 74.666 448c1.828 0 6.505-2.33 9.087-3.32L192 403.198 320 448l120.53-40.53c4.272-1.074 7.47-5.335 7.47-10.668V74.666C448 68.27 443.73 64 437.333 64zM320 405.333L192 360.53V106.667l128 44.803v253.863z' })
      )
    )
  );
};

exports.default = Icon;