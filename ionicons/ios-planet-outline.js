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
        _react2.default.createElement('path', { d: 'M396.2 288.9c-1.1 4.5-2.3 9-3.9 13.4 5.8 4.5 11.4 8.9 16.8 13.3 36 29.1 59 57.2 53.2 57.2-7.9.5-27.6-1.1-71.1-17.1-12.2-4.5-25.2-9.7-38.8-15.6 19.7-22.5 31.6-52 31.6-84.2 0-70.7-57.3-128-128-128-57 0-105.2 37.2-121.8 88.6-12-8.6-23.2-17.1-33.3-25.2-36-29.1-47.6-45.2-51.2-52.2-4.3-7 32.6-.9 76.1 15.1 6.8 2.5 13.9 5.2 21.1 8 2.8-3.3 5.8-6.5 8.9-9.5C89.9 125.2 41.6 115 33.3 129.8c-9 15.9 30.8 56.7 96.8 103.4-1.3 7.4-2 14.9-2 22.7 0 70.7 57.3 128 128 128 32.3 0 61.8-11.9 84.3-31.7 74 32.6 129.5 45.7 138.5 29.8 8.2-14.7-25.3-50.7-82.7-93.1zM176.8 176.8C198 155.6 226.1 144 256 144s58 11.7 79.2 32.8C356.3 198 368 226.1 368 256c0 29.1-11 56.4-31 77.3-30.7-13.9-63.7-30.8-96.8-49.5-33-18.7-64.5-38.3-92.3-57.5 5.1-18.5 14.9-35.5 28.9-49.5zM256 368c-29.9 0-58-11.7-79.2-32.8C155.7 314 144 285.9 144 256c0-4.2.2-8.4.7-12.5 26.2 17.8 55.8 36.2 87.7 54.3 31.9 18.1 62.9 34 91.7 47.2-19.5 14.9-43.2 23-68.1 23z' })
      )
    )
  );
};

exports.default = Icon;