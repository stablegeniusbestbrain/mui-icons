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
        _react2.default.createElement('path', { d: 'M219.2 400.9l7.2 22.4 14.4-9zm66.7 22.5l7.3-22.8-22 13.7zm-45.1-161.5l-.6-.4c-20.1-2.5-36.9-9.8-49.1-21.9-4.1 5-11.8 9-20 11.6L181 282l4.6 14.2 9.2-5.7 46-28.6zm-46.1 47.6l-4.1 2.5 15.4 47.8 34.8-21.7zm61.3 38.1l-45 27.9-1.1.7 1.7 1.1 44.4 27.6 44.8-27.9 1.3-.8-.8-.5zm46.1-47.6L256 271.4 209.9 300l46.1 28.7zm18.8-60.3c-12.2 12.1-29 19.4-49.1 21.9l-.6.4 46.1 28.7 9.5 5.9 4.8-14.8 9.8-30.3c-8.4-2.7-16.3-6.7-20.5-11.8zM231.4 439l2.6 8s7.5 19 22 19c15 0 22.2-19 22.2-19l2.5-7.8-24.7-15.5-24.6 15.3zm39.8-100.9l35.1 21.9 15.5-47.8-4.5-2.7z' }),
        _react2.default.createElement('path', { d: 'M380.4 163.9c-11 12.7-28.1 16.8-28.1 16.8 8.7-6 15.6-21.6 15.6-21.6v-.8C368 96.3 317.9 46 256 46S144 96.7 144 158.7v1.3h.3s7 15.1 15.6 21.1c0 0-17.2-4.3-28.2-17.1-11.8 7-19.8 19.7-19.8 34.5 0 22.1 17.9 40 40 40 12.5 0 31.7-5.8 39.1-14.9 15.3 15.2 37.8 22.8 64.9 22.8s49.7-7.7 64.9-22.9c7.3 9.1 26.5 14.8 39.1 14.8 22.1 0 40-18 40-40.1.1-14.5-7.8-27.3-19.5-34.3z' })
      )
    )
  );
};

exports.default = Icon;