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
      _react2.default.createElement('path', { d: 'M11 10v2h-1v2H8v-2H5.8c-.4 1.2-1.5 2-2.8 2-1.7 0-3-1.3-3-3s1.3-3 3-3c1.3 0 2.4.8 2.8 2H11zm-8 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm13 4c2.7 0 8 1.3 8 4v2H8v-2c0-2.7 5.3-4 8-4zm0-2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z' })
    )
  );
};

exports.default = Icon;