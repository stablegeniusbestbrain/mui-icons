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
      _react2.default.createElement('path', { d: 'M17 7H6c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zm1 10c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-4h13v4zm0-6H5v-1c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v1zm-4 5h2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5s.2.5.5.5z' })
    )
  );
};

exports.default = Icon;