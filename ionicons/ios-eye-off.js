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
        _react2.default.createElement('path', { d: 'M120.4 40l257.4 440 13.8-8L134.2 32zM256 144c-12.3 0-24 1.3-35.5 3.8l20.4 35c4.9-.9 9.9-1.4 15.1-1.4 42.4 0 76.8 33.5 76.8 74.7 0 19.2-7.5 36.7-19.8 50l24.3 41.5c45.8-23.3 82.4-62.9 110.7-91.5C403.6 204.6 340.6 144 256 144zm0 186.7c-42.4 0-76.8-33.5-76.8-74.7 0-19.2 7.5-36.7 19.8-50l-24.1-41.2C138.4 183.9 103.3 215.4 64 256c57.8 59.2 106.3 112 192 112 12.3 0 24.1-1.4 35.5-3.9l-20.4-34.9c-4.9 1-9.9 1.5-15.1 1.5z' }),
        _react2.default.createElement('path', { d: 'M300.7 253.4c-3.9 1.7-8.2 2.6-12.7 2.6-1.5 0-3-.1-4.4-.3l12 20.6c3.3-6.1 5.2-13 5.2-20.3 0-.9 0-1.8-.1-2.6zm-84.3-17.7c-3.3 6.1-5.2 13-5.2 20.3 0 23.3 18.8 42.3 42.5 43.5l-37.3-63.8z' })
      )
    )
  );
};

exports.default = Icon;