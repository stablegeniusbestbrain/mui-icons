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
        _react2.default.createElement('path', { d: 'M271 64.8V64c0-8.8-6.8-16-15-16s-15 7.2-15 16v.7c-108 8-192.8 103.7-192.8 222 0 .4-.2.8-.2 1.3h3.2c6.4-23 26.2-39.8 49.6-39.8 23.3 0 43 16.9 49.5 39.8h4.9c6.4-23 26.4-39.8 49.8-39.8 18.4 0 35 10.5 44 26.3V424c0 13.2-11 24-24.2 24s-24.1-10.8-24.1-24c0-4.4-3.6-8-8.1-8-4.4 0-8 3.6-8 8 0 22.1 18.2 40 40.2 40s40.2-17.9 40.2-40V275.2c9-16.2 25.3-27 44-27 23.3 0 42.8 16.9 49.3 39.8h4.9c6.4-23 26.2-40 49.6-40 23.5 0 43.4 16.9 49.7 40h1.6C462.1 171.4 378 73.2 271 64.8z' })
      )
    )
  );
};

exports.default = Icon;