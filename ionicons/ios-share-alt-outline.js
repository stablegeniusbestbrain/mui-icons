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
        _react2.default.createElement('path', { d: 'M304 291v67.3l120.5-110.5L304 133.3v61.9l-13.7 2c-33.7 4.8-63.8 14.5-89.5 28.8-23.2 12.9-43.5 30-60.4 50.8-17.4 21.4-31.6 47-42.7 77.1 16-14.1 32.7-25.6 51.2-34.7 38-18.9 83.5-28.2 139.1-28.2h16z' }),
        _react2.default.createElement('path', { d: 'M448 248L288 96v85.3C138.7 202.7 85.3 309.3 64 416c53.3-74.7 117.3-108.8 224-108.8v87.5L448 248zm-299.1 71.2c-18.5 9.2-35.2 20.6-51.2 34.7 11.1-30.2 25.3-55.7 42.7-77.1 16.9-20.8 37.2-37.9 60.4-50.8 25.7-14.3 55.8-24 89.5-28.8L304 196v-64l120.5 115.8L304 360v-68l-16-1c-55.6 0-101.1 9.3-139.1 28.2z' })
      )
    )
  );
};

exports.default = Icon;