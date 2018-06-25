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
      _react2.default.createElement('path', { d: 'M12 14c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm8 9c1.4 0 2.5-1.1 2.5-2.5S21.4 10 20 10s-2.5 1.1-2.5 2.5S18.6 15 20 15zm0-4c.8 0 1.5.7 1.5 1.5S20.8 14 20 14s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm0 4.6c-1.3 0-2.3.4-2.9 1-1.1-1-2.9-1.6-5.1-1.6-2.3 0-4 .6-5.1 1.6-.6-.6-1.6-1-2.9-1-2.2 0-3.5 1.1-3.5 2.2 0 .5 1.3 1.1 3.5 1.1.6 0 1.1-.1 1.6-.2v.3c0 1 2.4 2 6.4 2 3.8 0 6.4-1 6.4-2v-.3c.5.1 1 .2 1.6.2 2.1 0 3.5-.6 3.5-1.1 0-1.1-1.4-2.2-3.5-2.2zM4 17.9c-1.3 0-2.1-.2-2.4-.4.2-.4 1-.9 2.4-.9 1.1 0 1.8.3 2.2.7l-.2.3c-.5.2-1.1.3-2 .3zm8 1.1c-2.2 0-3.5-.3-4.2-.6.5-.6 1.9-1.4 4.2-1.4 2.2 0 3.6.8 4.1 1.4-.7.3-2.1.6-4.1.6zm8-1.1c-.9 0-1.5-.1-2-.3 0-.1-.1-.2-.2-.3.3-.4 1-.7 2.2-.7 1.3 0 2.1.5 2.4.9-.4.2-1.2.4-2.4.4zM4 15c1.4 0 2.5-1.1 2.5-2.5S5.4 10 4 10s-2.5 1.1-2.5 2.5S2.6 15 4 15zm0-4c.8 0 1.5.7 1.5 1.5S4.8 14 4 14s-1.5-.7-1.5-1.5S3.2 11 4 11z' })
    )
  );
};

exports.default = Icon;