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
      _react2.default.createElement('path', { d: 'M18 7c0-1.7-1.3-3-3-3H9C7.3 4 6 5.3 6 7c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM9 6h6c.6 0 1 .5 1 1H8c0-.5.4-1 1-1zm10 11c0 .6-.4 1-1 1H6c-.5 0-1-.4-1-1v-1h14v1zM5 15v-5c0-.6.5-1 1-1h12c.6 0 1 .4 1 1v5H5zm8-3h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;