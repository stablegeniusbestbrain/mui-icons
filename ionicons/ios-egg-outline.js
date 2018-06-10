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
        _react2.default.createElement('path', { d: 'M256 48c11.6 0 26.5 6.8 42 19.2 16.7 13.4 33.6 32.6 48.6 55.6 15.8 24.1 29 51.3 38.2 78.8 10.1 30.1 15.2 59.4 15.2 87.2 0 28.7-3.6 54.7-10.8 77.2-6.7 21.3-16.6 39.5-29.3 54.2-12.3 14.2-27.3 25.1-44.6 32.4-17.6 7.4-37.5 11.2-59.3 11.2s-41.7-3.8-59.3-11.2c-17.3-7.3-32.3-18.2-44.6-32.4-12.7-14.7-22.6-32.9-29.3-54.2-7.1-22.6-10.8-48.5-10.8-77.2 0-27.8 5.1-57.2 15.2-87.2 9.2-27.5 22.4-54.7 38.2-78.8 15.1-23 31.9-42.2 48.6-55.6C229.5 54.8 244.4 48 256 48m0-16C192 32 96 165.2 96 288.9S160 480 256 480s160-67.4 160-191.1S320 32 256 32z' })
      )
    )
  );
};

exports.default = Icon;