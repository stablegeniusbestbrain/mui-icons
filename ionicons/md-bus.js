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
        _react2.default.createElement('path', { d: 'M80 352c0 19.198 13.864 24.53 26.667 36.27v38.397c0 11.73 9.6 21.334 21.333 21.334h21.333c11.734 0 21.334-9.603 21.334-21.333v-21.333h170.666v21.333c0 11.73 9.604 21.334 21.334 21.334H384c11.73 0 21.333-9.603 21.333-21.333V388.27C418.136 376.53 432 370.137 432 352V148.334C432 73.667 349.864 64 256 64S80 73.667 80 148.334V352zm80 15.99c-18.136 0-32-13.865-32-32 0-18.136 13.864-32 32-32s32 13.864 32 32c0 18.135-13.864 32-32 32zm192 0c-18.136 0-32-13.865-32-32 0-18.136 13.864-32 32-32s32 13.864 32 32c0 18.135-13.864 32-32 32zm32-122.657H128V138.667h256v106.666z' })
      )
    )
  );
};

exports.default = Icon;