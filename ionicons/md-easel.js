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
        _react2.default.createElement('path', { d: 'M128 176h256v128H128z' }),
        _react2.default.createElement('path', { d: 'M448 96H64c-8.8 0-16 7.2-16 16v256c0 8.8 6.9 16 15.8 16H448c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16zm-32 240H96V144h320v192zM80 464h57l22.5-64h-56.4zM279.4 48h-46.8l-11.5 32h69.8zM375 464h57l-23-64h-56.5zm-143-64h48v32h-48z' })
      )
    )
  );
};

exports.default = Icon;