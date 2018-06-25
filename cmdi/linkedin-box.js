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
      _react2.default.createElement('path', { d: 'M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14zm-.5 15.5v-5.3c0-1.8-1.5-3.3-3.3-3.3-.8 0-1.8.6-2.3 1.3v-1.1h-2.8v8.4h2.8v-4.9c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v4.9h2.8zM6.9 8.6c.9 0 1.7-.8 1.7-1.7 0-1-.8-1.7-1.7-1.7-1 0-1.7.7-1.7 1.7 0 .9.7 1.7 1.7 1.7zm1.4 9.9v-8.4H5.5v8.4h2.8z' })
    )
  );
};

exports.default = Icon;