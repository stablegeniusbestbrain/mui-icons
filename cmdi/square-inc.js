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
      _react2.default.createElement('path', { d: 'M6 3h12c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3zm1 3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H7zm2.5 3h5c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5v-5c0-.3.2-.5.5-.5z' })
    )
  );
};

exports.default = Icon;