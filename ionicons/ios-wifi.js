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
        _react2.default.createElement('path', { d: 'M256 96c-83 0-166.1 35.8-224 93.7l37.3 39.6c24.3-24.3 52.5-43.3 83.9-56.6C185.8 159 220.3 152 256 152s70.2 7 102.7 20.7c31.4 13.3 59.7 32.3 83.9 56.6l37.3-39.6C422.1 131.8 339 96 256 96z' }),
        _react2.default.createElement('path', { d: 'M256 209c-57.2 0-109 23.1-146.6 60.4L149 309c28.7-28.4 66.6-44 107-44 40.4 0 78.3 15.6 107 44l39.6-39.6C365 232.1 313.2 209 256 209zm0 112c-25.9 0-48.9 12.3-63.6 31.4L256 416l63.6-63.6C304.9 333.3 281.9 321 256 321z' })
      )
    )
  );
};

exports.default = Icon;