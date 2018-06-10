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
        _react2.default.createElement('path', { d: 'M386.2 144c-60.6 0-109.8 50.1-109.8 112 0 40.4 21 75.7 52.5 95.4H183.1c31.5-19.7 52.5-55 52.5-95.4 0-61.9-49.2-112-109.8-112C65.2 144 16 194.1 16 256s49.2 112 109.8 112h260.4c60.6 0 109.8-50.1 109.8-112s-49.2-112-109.8-112zM32.3 256c0-52.6 42-95.4 93.5-95.4 51.6 0 93.5 42.8 93.5 95.4s-42 95.4-93.5 95.4c-51.6 0-93.5-42.8-93.5-95.4zm353.9 95.4c-51.6 0-93.5-42.8-93.5-95.4s42-95.4 93.5-95.4 93.5 42.8 93.5 95.4-41.9 95.4-93.5 95.4z' }),
        _react2.default.createElement('path', { d: 'M384 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48m0-16c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm-256 16c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48m0-16c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z' })
      )
    )
  );
};

exports.default = Icon;