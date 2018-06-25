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
      _react2.default.createElement('path', { d: 'M18 16.2v-1.9c0-1.9-1.6-3.5-3.5-3.5-.8 0-1.5-.6-1.5-1.5V7.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3S9 3.3 9 5c0 1.3.8 2.4 2 2.8v1.5c0 .9-.7 1.5-1.5 1.5-1.9 0-3.5 1.6-3.5 3.5v1.9c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8v-1.9c0-.8.7-1.5 1.5-1.5 1 0 1.9-.4 2.5-1 .6.6 1.5 1 2.5 1 .8 0 1.5.7 1.5 1.5v1.9c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8zM7 20c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm5-16c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm5 16c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;