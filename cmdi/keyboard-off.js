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
      _react2.default.createElement('path', { d: 'M1 4.3L2.3 3 20 20.7 18.7 22l-3-3H4c-1.1 0-2-.9-2-2V7c0-.5.2-.9.5-1.3L1 4.3zM19 10V8h-2v2h2zm0 3v-2h-2v2h2zm-3-3V8h-2v2h2zm0 3v-2h-2v1.2L11.8 10H13V8h-2v1.2L9.8 8l-3-3H20c1.1 0 2 .9 2 2v10c0 .9-.5 1.6-1.3 1.9L14.8 13H16zm-8 2v2h5.7l-2-2H8zm-3-5h1.7L5 8.3V10zm2 3v-2H5v2h2zm1 0h1.7L8 11.3V13z' })
    )
  );
};

exports.default = Icon;