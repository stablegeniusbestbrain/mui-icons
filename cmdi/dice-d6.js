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
      _react2.default.createElement('path', { d: 'M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8.4 4.5c-2.5 0-2.5 2-2.5 2s.5-.6 1.6-.6c.7 0 2 .6 2.1 2.5 0 2.1-1.8 2.6-1.8 2.6s-3.5.9-3.5-3.3c0-4.8 4.1-4.4 4.1-4.4v1.2zm-1.5 2.6c-.7-.1-1.1.7-1.1.7v.7c0 .8.6 1.3 1.2 1.3s1-.5 1-1.3-.4-1.4-1.1-1.4z' })
    )
  );
};

exports.default = Icon;