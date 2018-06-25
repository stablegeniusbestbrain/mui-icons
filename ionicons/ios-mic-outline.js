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
        _react2.default.createElement('path', { d: 'M256 63.9c34.7 0 63 30.3 63 67.6v136.9c0 37.3-28.3 67.6-63 67.6s-63-30.3-63-67.6V131.5c0-37.3 28.3-67.6 63-67.6m0-15.9c-43.7 0-79 37.4-79 83.5v136.9c0 46.1 35.3 83.6 79 83.6s79-37.5 79-83.6V131.5c0-46.1-35.3-83.5-79-83.5z' }),
        _react2.default.createElement('path', { d: 'M368 208v63.8c0 28.4-10.2 55.5-29.3 76.3-19 20.7-46.7 33.2-74.5 35.2l-8.2.6-8.4-.6c-28.5-2.1-53.2-14.6-72.9-35.4-19.7-20.8-30.7-47.8-30.7-76.1V208h-16v63.8c0 67.2 54 122.6 121 127.5V448h-74v16h161v-16h-72v-48.7c66-4.9 120-60.3 120-127.5V208h-16z' })
      )
    )
  );
};

exports.default = Icon;