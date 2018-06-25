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
        _react2.default.createElement('path', { d: 'M400 188.8C400 110.9 333.9 48 256 48s-144 62.9-144 140.8c0 31.1 13.2 59.1 30.2 83.1h-.3c10.9 15 21.4 27.7 31.5 45 22 37.8 18.6 74.3 18.7 81.5v1.5h128v-1.5c0-8.9-3.6-43.7 18.4-81.5 10.1-17.3 20.6-30 31.5-45h-.1c16.9-23.9 30.1-52 30.1-83.1zm-49 81.5c-.6.8-1.1 1.5-1.7 2.3-8.1 10.9-16.5 22.2-24.7 36.2-17.3 29.7-20.4 58.2-20.8 75.2H288V271.9l32-63.9h-16.6L272 271.9V384h-32V271.9L208.6 208H192l32 63.9V384h-15.9c-.5-17-3.9-45.7-20.9-75-4.5-7.7-9.1-15-13.7-21h.2l-18.6-25.6c-15.8-21.6-27.1-47.1-27.1-73.6 0-33.4 16-64.9 39.6-88.5 23.6-23.6 55-36.5 88.4-36.5s64.8 12.8 88.4 36.4c23.6 23.6 39.6 55 39.6 88.4 0 26.5-11.3 51.9-27.1 73.6l-5.9 8.1zM224 448h64v16h-64zm-16-32h96v16h-96z' })
      )
    )
  );
};

exports.default = Icon;