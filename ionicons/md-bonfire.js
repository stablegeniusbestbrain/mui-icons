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
        _react2.default.createElement('path', { d: 'M272.2 350.6c-.8-8.2-8.2-14.6-17.3-14.6-8.3 0-15.2 5.4-16.9 12.5L221.1 441c-.5 2.3-.8 4.6-.8 7 0 17.7 15.5 32 34.7 32s34.7-14.3 34.7-32c0-2.9-.4-5.7-1.2-8.4l-16.3-89zm37.9 4.4zm94.2 35.3c-1.9-1.4-3.6-2.9-5.6-3.9l-68.9-47.5c-6.3-3.8-13-3.7-17.9.9-4.5 4.1-5.1 10.4-1.8 15.4l53 65.8c1 1.5 2.3 2.8 3.6 4.2 8.5 9.1 27.2 9.6 37.5 0 10.4-9.8 10.3-27.2.1-34.9zM382.2 335zm68.2-12.5l-64.5-2.3c-4.2-.6-8 2.1-8.7 6-.7 3.6 1.5 7.1 5.1 8.8h.1l62.5 17.8c9 1.9 19.1-2.3 19.1-11.6 0-11.9-3.3-17.5-13.6-18.7zM129.5 335zm0 0c3.6-1.6 5.7-5.2 5.1-8.8-.7-4-4.5-6.6-8.7-6l-64.5 2.3C51 323.7 48 329.3 48 341.1c0 9.3 9.9 13.6 18.8 11.6l62.5-17.8c.1.1.1.1.2.1zm52.7 3.8l-68.9 47.4c-2 1.1-3.9 2.4-5.6 3.9-10.4 9.6-10.4 25.1 0 34.6 10.4 9.6 27.1 9.6 37.5 0 1.4-1.3 2.6-2.7 3.6-4.2l53-65.6c3.3-5 2.7-11.2-1.8-15.3-4.8-4.5-12.6-4.8-17.8-.8zM256 32s30.2 35.4 30.2 64.4c0 27.8-18.2 50.3-45.9 50.3-27.9 0-48.9-22.5-48.9-50.3l.4-6.9c-27.2 32.3-43.5 76.2-43.5 121.8 0 59.6 48.2 107.8 107.8 107.8s107.8-48.2 107.8-107.8C363.8 138.7 328 53.7 256 32zm-3.9 246.7c-24 0-43.4-18.9-43.4-42.3 0-21.8 14.1-37.2 37.9-42 23.8-4.9 48.5-16.3 62.3-34.8 5.3 17.4 7.9 35.7 7.9 54.4 0 35.7-29 64.7-64.7 64.7z' })
      )
    )
  );
};

exports.default = Icon;