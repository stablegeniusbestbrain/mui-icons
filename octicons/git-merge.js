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
      _react2.default.createElement('path', { d: 'M18 10.5c-1.1 0-2.1.6-2.6 1.5-1.6 0-3.4-.5-4.7-1.5-1.1-.9-2.2-2.4-2.8-3.7A3 3 0 0 0 6 1.5c-1.7 0-3 1.3-3 3a3 3 0 0 0 1.5 2.6v9.8c-.9.5-1.5 1.5-1.5 2.6 0 1.7 1.3 3 3 3a3 3 0 0 0 1.5-5.6v-5.4c1 1.1 2.2 1.9 3.4 2.5 1.3.7 3.1 1 4.5 1 .5.9 1.5 1.5 2.6 1.5 1.7 0 3-1.3 3-3s-1.3-3-3-3zm-10.2 9c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8zM6 6.3c-1 0-1.8-.8-1.8-1.8S5 2.7 6 2.7s1.8.8 1.8 1.8S7 6.3 6 6.3zm12 9c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z' })
    )
  );
};

exports.default = Icon;