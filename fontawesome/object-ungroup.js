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
      _react2.default.createElement('path', { d: 'M27.4 10.3h-1.7v8.6h1.7V24h-5.1v-1.7h-12V24H5.1v-5.1h1.8v-1.8H1.7v1.8h-5.1v-5.2h1.7V5.1h-1.7V0h5.1v1.7h12V0h5.2v5.1h-1.8v1.8h5.2V5.1h5.1v5.2zM24 6.9v1.7h1.7V6.9H24zm-8.6-5.2v1.7h1.7V1.7h-1.7zm-17.1 0v1.7H0V1.7h-1.7zM0 17.1v-1.7h-1.7v1.7H0zm17.1-1.7h-1.7v1.7h1.7v-1.7zm-15.4 0h12v-1.7h1.7V5.1h-1.7V3.4h-12v1.7H0v8.6h1.7v1.7zm6.9 6.9v-1.7H6.9v1.7h1.7zm17.1 0v-1.7H24v1.7h1.7zM24 18.9v-8.6h-1.7V8.6h-5.2v5.1h1.8v5.2h-5.2v-1.8H8.6v1.8h1.7v1.7h12v-1.7H24z' })
    )
  );
};

exports.default = Icon;