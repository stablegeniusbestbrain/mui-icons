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
      _react2.default.createElement('path', { d: 'M17.4 5c-.5 0-1.2.1-2 .8-1-.5-2.2-.8-3.4-.8-4.4 0-8 3.6-8 8s3.6 8 8 8c4.3 0 8-3.3 8-8V8.1C20 6 18.6 5 17.4 5zm.6 8h-5.1c-1.2 0-1.4-.6-.6-1.4l1.4-1.4c-.5-.3-1.2-.5-1.9-.5-.9 0-1.8.4-2.5 1-.6.7-1 1.6-1 2.5 0 .9.4 1.8 1 2.5.7.6 1.6 1 2.5 1s1.8-.4 2.5-1c.1-.2.3-.4.4-.6.3-.4.6-.6 1-.6.2 0 .5.1.6.2.6.4.7 1.1.4 1.6-.2.4-.5.7-.8 1-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-.6-4.1-1.7C6.6 16.2 6 14.7 6 13.2c0-1.6.6-3 1.7-4.1 1.1-1.1 2.6-1.7 4.1-1.7 1.3 0 2.6.4 3.6 1.2l1.1-1.1c.3-.4.6-.5.9-.5.3 0 .6.4.6 1.1V13zm-7.1.1c.2.3.7.9 2 .9h1.3s-.2.5-.6.9-1.1.8-1.8.8-1.3-.3-1.8-.8c-.4-.4-.7-1.1-.7-1.7s.3-1.2.7-1.6c.5-.5 1.1-.6 1.8-.6l-.2.1c-1 1-.8 1.6-.7 2z' })
    )
  );
};

exports.default = Icon;