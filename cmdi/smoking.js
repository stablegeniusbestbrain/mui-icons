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
      _react2.default.createElement('path', { d: 'M2 16h15v3H2v-3zm18.5 0H22v3h-1.5v-3zM18 16h1.5v3H18v-3zm.9-8.3c.6-.6 1-1.4 1-2.3 0-1.9-1.5-3.4-3.4-3.4v1.5c1 0 1.9.8 1.9 1.8s-.9 1.9-1.9 1.9v1.5c2.2 0 4 1.8 4 4.1V15H22v-2.2c0-2.3-1.3-4.2-3.1-5.1zM16 10.2h-1.5c-1 0-1.8-1-1.8-2s.8-1.7 1.8-1.7V5c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4H16c1.1 0 2 .7 2 2V15h1.5v-1.6c0-1.9-1.6-3.2-3.5-3.2z' })
    )
  );
};

exports.default = Icon;