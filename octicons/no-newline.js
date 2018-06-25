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
      _react2.default.createElement('path', { d: 'M24 7.5V12c0 .8-.7 1.5-1.5 1.5H18v3L13.5 12 18 7.5v3h3v-3h3zM12 12c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6zm-9.7 2.5l6.2-6.2c-.7-.5-1.6-.8-2.5-.8-2.5 0-4.5 2-4.5 4.5 0 .9.3 1.8.8 2.5zm8.2-2.5c0-.9-.3-1.8-.7-2.5l-6.3 6.3c.7.4 1.6.7 2.5.7 2.5 0 4.5-2 4.5-4.5z' })
    )
  );
};

exports.default = Icon;