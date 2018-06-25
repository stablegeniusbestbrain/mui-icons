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
        _react2.default.createElement('path', { d: 'M448 64V32H288L32 320l160 160 23.47-23.904L240 480l240-272V64h-32zM192 457.37L54.39 320 294.62 48H432v137.377l-216.555 247.99-11.34 11.363L192 457.37zm272-255.993L240 457.37l-13.182-12.65L448 192V80h16v121.377z' }),
        _react2.default.createElement('path', { d: 'M352 160c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-48c8.836 0 16 7.163 16 16s-7.164 16-16 16-16-7.163-16-16 7.164-16 16-16z' })
      )
    )
  );
};

exports.default = Icon;