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
        _react2.default.createElement('path', { d: 'M417.5 160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3 0-22.2 12-54.5 48H145v-16h-34v16H97.5C79.9 160 64 173.2 64 190.7v176c0 17.5 15.9 33.3 33.5 33.3h320c17.6 0 30.5-15.8 30.5-33.3v-176c0-17.5-12.9-30.7-30.5-30.7zM256 360.5c-47.1 0-85.5-38.4-85.5-85.5s38.4-85.5 85.5-85.5 85.5 38.4 85.5 85.5-38.4 85.5-85.5 85.5zM369 209h-17v-17h17v17z' }),
        _react2.default.createElement('path', { d: 'M256 205.5c-38.4 0-69.5 31.1-69.5 69.5s31.1 69.5 69.5 69.5 69.5-31.1 69.5-69.5-31.1-69.5-69.5-69.5zm0 101.5c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z' })
      )
    )
  );
};

exports.default = Icon;