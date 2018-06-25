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
        _react2.default.createElement('path', { d: 'M343.5 191.5c-4.7 0-8.5 3.8-8.5 8.5v157c0 19-7.5 38.2-20.9 52.4-13.7 14.4-33.3 22.6-52.1 22.6h-12c-39.5 0-74-36-74-75V135.9c0-30.6 25.4-54.8 56-54.8s55 24.2 55 54.8v214.3c0 17.2-13.6 33.8-31 33.8s-32-16.5-32-33.8V232c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5v118.2c0 28.8 22.3 49.8 49 49.8s48-20 48-49.8V135.9C304 96 271.6 64 231.7 64S160 96 160 135.9V357c0 23.2 9.5 46.8 27.3 64.3C205 438.7 226.8 448 250 448h12c48 0 90-41.4 90-91V200c0-4.7-3.8-8.5-8.5-8.5z' })
      )
    )
  );
};

exports.default = Icon;