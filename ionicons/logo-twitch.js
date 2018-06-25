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
        _react2.default.createElement('path', { d: 'M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm336 256l-64 64h-96l-64 64v-64h-80V80h304v208z' }),
        _react2.default.createElement('path', { d: 'M320 143h48v129h-48zm-112 0h48v129h-48z' })
      )
    )
  );
};

exports.default = Icon;