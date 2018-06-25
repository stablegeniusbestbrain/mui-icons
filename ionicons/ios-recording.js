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
        _react2.default.createElement('path', { d: 'M386.2 144c-60.6 0-109.8 49.9-109.8 111.8 0 40.4 21 76.2 52.5 95.2H183.1c31.5-19 52.5-54.8 52.5-95.2 0-61.9-49.2-111.9-109.8-111.9-60.6 0-109.8 50.2-109.8 112C16 317.8 65.2 368 125.8 368h260.4c60.6 0 109.8-50.1 109.8-112s-49.2-112-109.8-112zM128 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm256 0c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z' }),
        _react2.default.createElement('path', { d: 'M384 208c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-256 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z' })
      )
    )
  );
};

exports.default = Icon;