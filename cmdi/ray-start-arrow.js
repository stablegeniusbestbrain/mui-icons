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
      _react2.default.createElement('path', { d: 'M23 12l-4 4v-3H6.8c-.4 1.2-1.5 2-2.8 2-1.7 0-3-1.3-3-3s1.3-3 3-3c1.3 0 2.4.8 2.8 2H19V8l4 4z' })
    )
  );
};

exports.default = Icon;