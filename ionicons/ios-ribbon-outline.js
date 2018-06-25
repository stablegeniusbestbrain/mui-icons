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
        _react2.default.createElement('path', { d: 'M256 88c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72m0-16c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z' }),
        _react2.default.createElement('path', { d: 'M256 48c29.9 0 58 11.7 79.2 32.8S368 130.1 368 160s-11.7 58-32.8 79.2S285.9 272 256 272s-58-11.7-79.2-32.8S144 189.9 144 160s11.7-58 32.8-79.2S226.1 48 256 48m0-16c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 32 256 32z' }),
        _react2.default.createElement('path', { d: 'M150.6 280.4C179.6 305.8 217 320 256 320c2.4 0 4.7-.1 7.1-.2l-21.7 47.7-35.4 78-32.3-53.8-4.7-7.8H91.5l59.1-103.5m-3.5-26.2L64 400h96l48 80 48-105.8 33.6-74.2c-10.8 2.6-22.1 4-33.6 4-43.5 0-82.5-19.3-108.9-49.8zm214.3 26.2L420.5 384h-77.6l-4.7 7.8-32.2 53.8-24.3-53.5 39.1-85.8c14.7-6.5 28.5-15.3 40.6-25.9m3.5-26.2c-15.1 17.4-34.3 31.2-56 39.8l-44.8 98.1L304 480l48-80h96l-83.1-145.8z' })
      )
    )
  );
};

exports.default = Icon;