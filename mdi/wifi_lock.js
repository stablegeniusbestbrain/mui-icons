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
      _react2.default.createElement('path', { d: 'M20.5 9.5c.3 0 .6 0 .8.1L24 6c-3.3-2.5-7.5-4-12-4S3.3 3.5 0 6l12 16 3.5-4.7v-2.8c0-2.8 2.2-5 5-5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z' })
    )
  );
};

exports.default = Icon;