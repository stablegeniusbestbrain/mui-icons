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
        _react2.default.createElement('path', { d: 'M448 96c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 32.3 23.9 59 55 63.4h1V219l-120 59.1L136 219v-59.5c31.6-3.9 56-30.8 56-63.5 0-35.3-28.7-64-64-64S64 60.7 64 96c0 32.3 23.9 59 55 63.4h1V229l128 63v60.3c-31.6 3.9-56 30.8-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.3-23.9-59-55-63.4h-1V292l128-63v-69.5c31.6-4 56-30.9 56-63.5zM80 96c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm224 319.8c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM384 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z' })
      )
    )
  );
};

exports.default = Icon;