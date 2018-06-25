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
        _react2.default.createElement('path', { d: 'M128 224h16V112h288v288H144V288h-16v128h320V96H128z' }),
        _react2.default.createElement('path', { d: 'M297.9 193.1l11.6-11.6L384 256l-74.5 74.5-11.6-11.6 54.7-54.7H64v-16.4h288.6z' })
      )
    )
  );
};

exports.default = Icon;