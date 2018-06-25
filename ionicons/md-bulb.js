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
        _react2.default.createElement('path', { d: 'M256 170.136c25.5 0 49.567 10.025 67.77 28.23 18.205 18.202 28.23 42.27 28.23 67.77 0 17.62-4.422 34.03-13.144 48.773-8.34 14.097-20.437 26.035-34.985 34.525L288 358.697V448h-64v-89.303l-15.87-9.262c-29.69-17.325-48.13-49.243-48.13-83.3 0-25.498 10.025-49.566 28.23-67.77 18.203-18.204 42.27-28.23 67.77-28.23M277.333 32h-42.666v64h42.666V32zm129.063 53.864L368 124.27l29.864 29.866 38.406-38.396-29.874-29.876zm-300.792 0L75.73 115.74l38.405 38.395L144 124.27l-38.396-38.406zM256 138.136c-70.396 0-128 57.604-128 128 0 46.938 25.604 88.53 64 110.938V480h128V377.073c38.396-22.406 64-62.938 64-110.938 0-70.396-57.604-128-128-128zm224 106.666h-64v42.667h64V244.8zm-384 0H32v42.667h64V244.8z' })
      )
    )
  );
};

exports.default = Icon;