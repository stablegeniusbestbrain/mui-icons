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
        _react2.default.createElement('path', { d: 'M236 112c28.5 0 54 9.4 73.6 27.1 17.7 15.9 30.4 38.3 35.8 63l2.9 13.3 13.7-.9c1.6-.1 3.7-.1 5.1-.1h7.2c23.6 0 46 9.8 63.1 27.5 17.1 17.8 26.5 41 26.5 65.4 0 24.3-9.4 47.7-26.4 65.1-17 17.3-39.8 27.4-63.6 27.4H116c-18.1 0-34.6-7.9-47.7-21.4-13.1-13.3-20.3-31.3-20.3-50 0-17.9 6.6-35.5 18.5-49.4 11.8-13.8 27.4-22.3 43.9-23.7l16.1-1.5-1.6-16c-.3-3.4-.7-7.3-.7-11.3 0-30.3 11.8-59 33.1-80.8C178.6 124 206.6 112 236 112m0-16c-70 0-127.8 59.7-127.8 130.8 0 4.3.3 8.6.8 12.8-43.2 3.9-77 44-77 88.4 0 47 37.9 88 84.6 88h257.8c58.3 0 105.6-49.4 105.6-108s-47.3-108.8-105.6-108.8c-2.3 0-4.8-.2-7.2-.2-2.1 0-4.2 0-6.1.1C349.3 145.6 306 96 236 96z' })
      )
    )
  );
};

exports.default = Icon;