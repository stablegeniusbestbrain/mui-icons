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
      _react2.default.createElement('path', { d: 'M13.8 17.5s-.5.2-1 .2c-.3 0-.4 0-.4-.1-.2-.1-.5-.3 0-1.4l1-2c.6-1.1.7-2.3.3-3.2-.4-.7-1-1.2-1.9-1.4-.3-.1-.7-.1-1-.1-1.8 0-3.1 1.1-3.1 1.1-.2.2-.3.4-.1.7.1.2.3.3.6.2 0 0 .5-.2 1-.2.3 0 .4 0 .4.1.2.1.5.3 0 1.4l-1 2c-.6 1.1-.7 2.3-.3 3.2.4.7 1 1.2 1.9 1.4.3.1.7.1 1 .1 1.8 0 3.1-1.1 3.1-1.1.2-.2.2-.4.1-.7-.1-.2-.3-.2-.6-.2z' }),
      _react2.default.createElement('circle', { cx: '13', cy: '6.001', r: '2.5' })
    )
  );
};

exports.default = Icon;