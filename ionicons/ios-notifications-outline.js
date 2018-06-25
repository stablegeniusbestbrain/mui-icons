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
        _react2.default.createElement('path', { d: 'M288 400c0 17-14.4 32-32 32s-32.2-15-32.2-32h-16c0 26 21.6 47.9 48.1 47.9S304 426 304 400h-16zm85.9-170.8c0-99-49-132.8-94.9-140.5 0-.6.1-1.1.1-1.7 0-12.7-10.3-23-23-23s-23 10.3-23 23c0 .6 0 1.2.1 1.8-45.9 7.8-94.9 41.9-94.9 140.7C138.1 345 115.6 352 80 384h352c-35.4-32-58.1-39.1-58.1-154.8zM121.1 368c7.2-8 13.7-17.4 18.9-30 9.8-23.7 14.1-57.3 14.1-108.7 0-41.3 9-73.1 26.8-94.5 13.6-16.4 33.7-27.7 55.4-30.5 16.8-2.1 22.2-2.4 39.7 0 20.8 2.9 41.6 14 55.2 30.4 17.7 21.4 26.7 53.2 26.7 94.5 0 51.4 4.4 84.9 14.2 108.7 5.2 12.6 11.7 22.1 19 30.1h-270z' })
      )
    )
  );
};

exports.default = Icon;