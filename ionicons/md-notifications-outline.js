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
        _react2.default.createElement('path', { d: 'M257 120.47c7.083 0 23.91 4.48 23.91 4.48 45.59 10.447 77.68 52.44 77.68 99.85v127.612l9.32 9.364 7.788 7.823H136.302l7.788-7.824 9.32-9.364V224.8c0-47.41 32.09-89.403 77.68-99.85 0 0 18.042-4.48 23.91-4.48M256 48c-17.602 0-31.06 13.518-31.06 31.2v14.56c-59.014 13.522-103.53 67.6-103.53 131.04v114.4L80 380.8v20.8h352v-20.8l-41.41-41.6V224.8c0-63.44-44.517-117.518-103.53-131.04V79.2C287.06 61.518 273.6 48 256 48zm41.41 374.4h-82.82c0 22.88 18.633 41.6 41.412 41.6s41.41-18.72 41.41-41.6z' })
      )
    )
  );
};

exports.default = Icon;