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
        _react2.default.createElement('path', { d: 'M120.4 40l257.4 440 13.8-8L134.2 32zM256 144c-12.3 0-24 1.3-35.5 3.8l6.6 11.3c9.4-1.8 19-2.7 28.9-2.7 74 0 131 51.1 174 99.6-26.9 27.3-59.2 60.6-99 80.7l6.3 10.8c45.8-23.3 82.4-62.9 110.7-91.5-44.4-51.4-107.4-112-192-112zm0 211.6c-76.1 0-121.6-45.8-174-99.6 35.8-36.3 67-63.7 99.2-80.5l-6.3-10.8C138.4 183.9 103.3 215.4 64 256c57.8 59.2 106.3 112 192 112 12.3 0 24.1-1.4 35.5-3.9l-6.6-11.3c-9.4 1.8-19 2.8-28.9 2.8z' }),
        _react2.default.createElement('path', { d: 'M313 306c12.3-13.2 19.8-30.8 19.8-50 0-41.2-34.4-74.7-76.8-74.7-5.1 0-10.2.5-15 1.4l6.7 11.5c2.7-.3 5.5-.5 8.3-.5 35.3 0 64 27.9 64 62.2 0 14.5-5.1 27.9-13.7 38.5L313 306zM199 206c-12.3 13.2-19.8 30.8-19.8 50 0 41.2 34.4 74.7 76.8 74.7 5.2 0 10.2-.5 15.1-1.4l-6.7-11.5c-2.7.3-5.5.5-8.3.5-35.3 0-64-27.9-64-62.2 0-14.5 5.1-27.9 13.7-38.5L199 206z' }),
        _react2.default.createElement('path', { d: 'M216.4 235.7c-3.3 6.1-5.2 13-5.2 20.3 0 23.3 18.8 42.3 42.5 43.5l-8.3-14.1c-12.4-4.3-21.4-15.8-21.4-29.3 0-2.1.2-4.2.6-6.2l-8.2-14.2zm79.2 40.6c3.3-6.1 5.2-13 5.2-20.3H288c0 2.1-.2 4.2-.6 6.2l8.2 14.1z' })
      )
    )
  );
};

exports.default = Icon;