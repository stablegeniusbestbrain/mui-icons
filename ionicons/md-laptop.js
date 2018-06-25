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
        _react2.default.createElement('path', { d: 'M437.334 416c23.47 0 42.666-19.197 42.666-42.666V106.668C480 83.198 460.803 64 437.334 64H74.666C51.196 64 32 83.2 32 106.668v266.666C32 396.804 51.197 416 74.666 416H0c0 23.47 64 32 96 32h320c32 0 96-8.53 96-32h-74.666zM74.666 106.668h362.668v271.998H74.666V106.668zM256 434.666c-11.73 0-21.333-9.604-21.333-21.334S244.27 392 256 392s21.333 9.604 21.333 21.332c0 11.73-9.604 21.334-21.333 21.334z' })
      )
    )
  );
};

exports.default = Icon;