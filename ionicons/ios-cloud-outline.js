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
        _react2.default.createElement('path', { d: 'M413.012 226.113C406.146 161.895 354.042 112 288 112c-44.838 0-86.535 22.812-109.396 57.715A62.24 62.24 0 0 0 152.5 164c-34.208 0-61.98 27.487-62.477 61.577C55.093 236.613 32 268.157 32 304c0 43.906 35.594 80 79.5 80h289c43.906 0 79.5-36.094 79.5-80 0-39.648-29.027-71.884-66.988-77.887zM400.5 368h-289C76.486 368 48 339.152 48 304c0-14.272 4.443-27.047 12.85-38.6 8.47-11.64 20.226-20.154 33.994-24.504l11.01-3.51.168-11.562c.18-12.274 5.093-23.795 13.837-32.425 8.75-8.638 20.343-13.397 32.64-13.397a46.08 46.08 0 0 1 19.41 4.246l12.524 5.765 7.555-11.533c20.806-31.768 57.856-50.732 95.76-50.732 27.814 0 52.48 10.265 73.09 28.904 20.467 18.51 33.345 43.737 36.264 71.035l1.303 12.187 12.107 1.915c14.727 2.33 28.253 9.922 38.087 21.38C458.53 274.745 464 288.76 464 304c0 35.152-28.486 64-63.5 64z' })
      )
    )
  );
};

exports.default = Icon;