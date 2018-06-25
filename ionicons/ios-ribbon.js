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
        _react2.default.createElement('path', { d: 'M256 288c70.7 0 128-57.3 128-128S326.7 32 256 32 128 89.3 128 160s57.3 128 128 128zm0-216c48.5 0 88 39.5 88 88s-39.5 88-88 88-88-39.5-88-88 39.5-88 88-88z' }),
        _react2.default.createElement('path', { d: 'M256 232c39.7 0 72-32.3 72-72s-32.3-72-72-72-72 32.3-72 72 32.3 72 72 72zm0 72c-43.5 0-82.5-19.3-108.9-49.8L64 400h96l48 80 48-105.8 33.6-74.2c-10.8 2.6-22 4-33.6 4zm108.9-49.8c-15.1 17.4-34.3 31.2-56 39.8l-44.8 98.1L304 480l48-80h96l-83.1-145.8z' })
      )
    )
  );
};

exports.default = Icon;