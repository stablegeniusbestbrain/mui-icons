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
      _react2.default.createElement('path', { d: 'M18 16.2V7.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.3.8 2.4 2 2.8v8.4c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8zM17 4c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm0 16c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM10 5c0-1.7-1.3-3-3-3S4 3.3 4 5c0 1.3.8 2.4 2 2.8v8.4c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8V7.8c1.2-.4 2-1.5 2-2.8zM7 4c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm0 16c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;