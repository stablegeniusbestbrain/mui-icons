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
        _react2.default.createElement('path', { d: 'M341.334 128v234.666C341.334 409.604 302.938 448 256 448c-46.937 0-85.333-38.396-85.333-85.334V117.334C170.667 87.47 194.135 64 224 64c29.864 0 53.333 23.47 53.333 53.334v245.333c0 11.73-9.605 21.333-21.334 21.333-11.73 0-21.334-9.604-21.334-21.333V160h-32v202.667C202.666 392.53 226.136 416 256 416c29.865 0 53.334-23.47 53.334-53.333V117.334C309.334 70.4 270.938 32 224 32s-85.334 38.4-85.334 85.334v245.332C138.666 427.73 190.938 480 256 480c65.062 0 117.334-52.27 117.334-117.334V128h-32z' })
      )
    )
  );
};

exports.default = Icon;