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
        _react2.default.createElement('path', { d: 'M384 224c-32.7 0-59.7 24.6-63.5 56.2-9.1 0-29.6-1.3-55.5-11.3-32.6-12.7-79.9-42.2-121.5-110.8C171.3 151.2 192 126 192 96c0-35.3-28.7-64-64-64S64 60.7 64 96c0 32.3 23.9 59 55 63.4v193.3c-31.1 4.3-55 31-55 63.3 0 35.3 28.7 64 64 64s64-28.7 64-64c0-33-24.9-60.1-57-63.6V174.8c42.7 66.5 90.6 95.9 124.2 109 27.8 10.8 50.1 12.4 61 12.4h.4c4 31.4 30.9 55.8 63.5 55.8 35.3 0 64-28.7 64-64s-28.8-64-64.1-64zM80 96c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm96 320c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm208-80c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z' })
      )
    )
  );
};

exports.default = Icon;