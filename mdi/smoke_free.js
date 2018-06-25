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
      _react2.default.createElement('path', { d: 'M2 6l7 7H2v3h10l7 7 1.3-1.2-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.9-8.1c.6-.6 1-1.5 1-2.4h-1.5c0 1-.9 1.9-1.9 1.9v1.5c2.2 0 4 1.8 4 4V12H22V9.9c0-2.2-1.3-4.1-3.1-5zm-4.4 3.8H16c1.1 0 2 .7 2 2.1V12h1.5v-1.6c0-1.8-1.6-3.1-3.5-3.1h-1.5c-1 0-1.8-1-1.8-2s.8-1.8 1.8-1.8V2c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4zm2.5 7.2V13h-2.9z' })
    )
  );
};

exports.default = Icon;