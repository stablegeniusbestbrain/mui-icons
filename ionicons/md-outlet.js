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
        _react2.default.createElement('path', { d: 'M369.5 32H142.4C81.5 32 32 82.6 32 144.6v222.8c0 62 49.5 112.6 110.4 112.6h227.2c60.9 0 110.5-50.6 110.5-112.6V144.6C480 82.6 430.5 32 369.5 32zM175 251v.7c0 10.9-9.1 20.4-19.9 20.4h-23.3c-10.8 0-19.9-9.5-19.9-20.4V148.1c1-10.8 9.2-20.2 19.9-20.2h23.3c10.9 0 19.9 9.8 19.9 20.8V251zm122 147.4c0 11.4-8.9 17.6-20.1 17.6h-41.8c-11.2 0-20.1-8.1-20.1-19.6v-29.3c0-23.3 18.1-42.3 41-42.3s41 19 41 42.3v31.3zM400 251v.7c0 10.9-9.1 20.4-19.9 20.4h-24.3c-10.8 0-19.9-9.5-19.9-20.4V148.1c1-10.8 9.2-20.2 19.9-20.2h24.3c10.8 0 19.9 9.8 19.9 20.8V251z' })
      )
    )
  );
};

exports.default = Icon;