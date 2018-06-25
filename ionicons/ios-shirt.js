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
        _react2.default.createElement('path', { d: 'M372.5 92.7C352 78 332 64 310 64s-22 8-54 8-32-8-54-8-42 14-62.5 28.7C107.9 115.4 48 179 48 179s34.6 41.3 51.7 61c12.7 14.7 16 17.8 16 0 0-42.7 0-48 6.3-48s6 3.6 6 8v248h256V200c0-4.4-.3-8 6-8s6.3 5.3 6.3 48c0 17.8 3.3 14.7 16 0 17-19.7 51.7-61 51.7-61s-59.9-63.6-91.5-86.3zM256 141c-30 0-54-20.7-54-44 0-30 24-8.7 54-8.7 29.8 0 54-21.3 54 8.7 0 23.3-24.2 44-54 44z' })
      )
    )
  );
};

exports.default = Icon;