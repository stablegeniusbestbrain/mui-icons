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
      _react2.default.createElement('path', { d: 'M5.8 2C4.8 2.1 4 3 4 4v16c0 1 1 2 2 2h12c1 0 2-1 2-2V4c0-1.1-.9-2-2-2h-6v7L9.5 7.5 7 9V2H5.8zM12 13h1c.6 0 1 .4 1 1v4h-1v-2h-1v2h-1v-4c0-.6.4-1 1-1zm0 1v1h1v-1h-1zm3 1h3v1l-2 3h2v1h-3v-1l2-3h-2v-1z' })
    )
  );
};

exports.default = Icon;