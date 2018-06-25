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
        _react2.default.createElement('path', { d: 'M437.333 32H74.667C51.197 32 32 51.197 32 74.666v282.667C32 380.803 51.198 400 74.667 400h138.666l-42.666 48v32h170.666v-32l-42.666-48h138.666c23.47 0 42.667-19.198 42.667-42.667V74.666C480 51.196 460.802 32 437.333 32zm0 288H74.667V74.666h362.666V320z' })
      )
    )
  );
};

exports.default = Icon;