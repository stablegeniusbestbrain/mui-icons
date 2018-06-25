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
      _react2.default.createElement('path', { d: 'M19 16c1.7 0 3-1.3 3-3s-1.3-3-3-3h-1.5v-.5C17.5 6.5 15 4 12 4 9.5 4 7.4 5.7 6.7 8H6c-2.2 0-4 1.8-4 4s1.8 4 4 4v-5h12v5h1zm.4-8c2.5.2 4.6 2.4 4.6 5 0 2.8-2.2 5-5 5h-1v4H6v-4c-3.3 0-6-2.7-6-6 0-3.1 2.3-5.6 5.3-6C6.6 3.6 9.1 2 12 2c3.6 0 6.7 2.6 7.4 6zM8 13v7h8v-7H8zm1 5h6v1H9v-1zm6-1H9v-1h6v1zm-6-3h6v1H9v-1z' })
    )
  );
};

exports.default = Icon;