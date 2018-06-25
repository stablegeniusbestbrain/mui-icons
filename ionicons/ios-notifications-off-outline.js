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
        _react2.default.createElement('path', { d: 'M288 400c0 18-14.4 32-32 32s-32.2-14-32.2-32h-16c0 27 21.6 48 48.1 48s48.1-21 48.1-48h-16zM133.8 32L120 40.1 378.2 480l13.8-8.1zm102.5 72.2c16.8-2.1 22.2-2.4 39.7 0 20.8 2.9 41.6 14 55.2 30.4 17.7 21.4 26.7 53.2 26.7 94.6 0 51.4 4.4 84.9 14.2 108.7 5.2 12.6 11.7 22 19 30h-41.5l9.4 16h73c-35.4-32-58.1-39-58.1-154.9 0-99.1-49-132.9-94.9-140.6 0-.6.1-1.1.1-1.7 0-12.7-10.3-23-23-23s-23 10.3-23 23c0 .6 0 1.2.1 1.8-13.1 2.2-26.5 6.6-38.9 14l8 13.7c10.2-6.2 21.9-10.5 34-12zM121.1 368c7.2-8 13.7-17.3 18.9-29.9 9.8-23.8 14.1-57.3 14.1-108.8 0-30.2 4.8-55.4 14.4-75.1L159 138c-12.8 21.4-20.9 50.9-20.9 91.2C138.1 345.1 115.6 352 80 384h222.9l-9.4-16H121.1z' })
      )
    )
  );
};

exports.default = Icon;