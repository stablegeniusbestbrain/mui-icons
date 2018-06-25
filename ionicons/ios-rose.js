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
        _react2.default.createElement('path', { d: 'M416 137.1c-18.9 3.9-36.8 8.2-53.7 12.8-40.5 11-75.5 23.9-105.4 37.2-19.3 8.6-26.2 12.4-51.5 25.9C147 243.9 112 277.3 112 345c0 67.8 55.6 119 144 119s144-51.2 144-119c0-67.7-61-118.7 16-207.9zM96 107.4c41.5 43.7 44.6 96.5 39.4 134.4 12.8-10.5 31.2-23.9 56.1-38.4 6.4-3.8 13.3-7.6 20.6-11.4 11.6-6.1 23.5-11.9 35.8-17.4-9.1-10.1-22.1-19.1-36.6-27C162.6 121.1 96 107.4 96 107.4zm256-29.7s-78.6 2.2-130.7 58c16.6 9.2 29.7 19 39 29.3l2.7 3c37.2-15.6 88.1-31.7 121-39-6.4-21.7-32-51.3-32-51.3zM176 48c-15.3 20.8-25.7 42.1-30.3 55.7 21.1 5.9 35.5 12.3 61.4 24.7 9.5-10.6 20.4-20.1 32.6-28.4C210.3 62.5 176 48 176 48z' })
      )
    )
  );
};

exports.default = Icon;