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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22l-1.2-1.2C16.1 22.2 14.1 23 12 23c-4.4 0-8-3.6-8-8v-4h3.7l-2-2H4c0-.5.1-1.1.2-1.6L2 5.3zm9-4.2V9h-.2l-5-5C7.1 2.4 8.9 1.3 11 1.1zm9 9.9v4c0 .9-.2 1.9-.5 2.7L12.8 11H20zm-7-9.9c3.9.5 7 3.8 7 7.9h-7V1.1z' })
    )
  );
};

exports.default = Icon;