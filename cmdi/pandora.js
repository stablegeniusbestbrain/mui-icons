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
      _react2.default.createElement('path', { d: 'M16.9 7.7c0 2.2-1.2 4-3.8 4h-2.6v-8h2.6c2.6 0 3.8 1.8 3.8 4zm-6.4 8v-2.3h2.6c4.7 0 7.4-2.5 7.4-5.7 0-3.3-2.7-5.7-7.4-5.7H3.5v.9c3.1 0 3.7.8 3.7 5.4v7.4c0 4.6-.6 5.4-3.7 5.4v.9h10.6v-.9c-3.1 0-3.6-.8-3.6-5.4z' })
    )
  );
};

exports.default = Icon;