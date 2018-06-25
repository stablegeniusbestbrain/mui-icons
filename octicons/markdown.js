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
      _react2.default.createElement('path', { d: 'M22.3 4.5H1.7C.8 4.5 0 5.3 0 6.2v11.6c0 .9.8 1.7 1.7 1.7h20.6c.9 0 1.7-.8 1.7-1.7V6.2c0-.9-.8-1.7-1.7-1.7zm-8.8 12h-3V12l-2.2 2.9L6 12v4.5H3v-9h3l2.3 3 2.2-3h3v9zm4.5.8L14.3 12h2.2V7.5h3V12h2.3L18 17.3z' })
    )
  );
};

exports.default = Icon;