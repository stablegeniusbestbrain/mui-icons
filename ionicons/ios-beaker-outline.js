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
        _react2.default.createElement('path', { d: 'M445.2 48H128.4C74.1 48 64 75.9 64 88.2c30.3 4.2 32 4.2 32 36.2v275.5c0 35.3 28.8 64 64.2 64H368c35.4 0 63-29.2 63-64.5V89.2c2-17.5 12.5-31.6 13.6-33.3 1.2-1.9 3.4-4.4 3.4-5.5 0-1.2-.3-2.4-2.8-2.4zM415 89.3v310.2c0 13-4.7 24.4-13.7 33.7-9 9.3-20.5 14.8-33.2 14.8h-208c-26.4 0-48.1-21.9-48.1-48.5v-275c0-16.7.3-30.8-8.3-40.4-4.3-4.8-10.6-6.3-17.3-8.2 5.7-5 17.7-12 42.1-12h293.6c0 .1-7.1 6.4-7.1 25.4z' }),
        _react2.default.createElement('path', { d: 'M383 176v208c0 10.2-1.8 18-5.5 21.9-5.7 5.8-13.8 10.2-20.1 10.2h-187c-8.8 0-15.4-2.7-19.5-7.9-4.4-5.4-6.9-14.3-6.9-25.1V176h239m16-16H128v223c0 28.3 13.7 49 42.4 49h187c11.4 0 23.4-6.7 31.5-15 8.1-8.4 10.1-21.3 10.1-33V160z' })
      )
    )
  );
};

exports.default = Icon;