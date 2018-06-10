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
        _react2.default.createElement('path', { d: 'M84.255 413h1.063c34.123 0 63.977-19.02 85.305-42.494 21.325 23.473 51.18 42.762 85.304 42.762s63.98-19.334 85.305-42.806C362.56 393.934 392.412 413 426.535 413h1.062l51.253-138.78c2.126-5.33 1.063-11.64-1.07-16.976-2.136-5.333-7.237-8.487-12.567-10.623L427 234.134v-98.15C427 112.51 407.344 93 383.884 93h-63.98l-15.992-53h-95.97L191.95 93h-63.98C104.512 93 85 112.51 85 135.982v98.15l-38.074 12.533c-5.33 2.136-10.582 5.334-12.718 10.667-2.135 5.335-3.158 10.49-1.03 16.887L84.254 413zM128 136h256v84.26l-128-41.604-128 41.605V136z' }),
        _react2.default.createElement('path', { d: 'M341.23 408.007c-52.252 36.267-118.355 36.258-170.607-.01 0 0-57.638 64.003-106.632 64.003H85.32c29.854 0 58.646-11.726 85.305-25.594 53.315 27.734 117.293 27.728 170.608-.007 26.66 13.868 55.45 25.6 85.305 25.6h21.328c-47.65 0-106.632-63.993-106.632-63.993z' })
      )
    )
  );
};

exports.default = Icon;