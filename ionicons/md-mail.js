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
        _react2.default.createElement('path', { d: 'M437.332 80H74.668C51.198 80 32 99.198 32 122.667v266.666C32 412.803 51.2 432 74.668 432h362.664c23.47 0 42.668-19.198 42.668-42.667V122.667C480 99.197 460.8 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z' })
      )
    )
  );
};

exports.default = Icon;