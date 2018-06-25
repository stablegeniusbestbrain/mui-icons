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
      _react2.default.createElement('path', { d: 'M13 16.2c-.8 0-1.6-.3-2.1-.9l-1 3.2v.2h-.1c-.2.3-.5.5-.9.5-.6 0-1.1-.5-1.1-1.1v-.2l.1-.1 1.8-5.6s-.2-.6-.2-1.5c0-1.7.9-2.2 1.7-2.2.7 0 1.4.3 1.4 1.3 0 1.4-.9 2-.9 3 0 .8.6 1.4 1.3 1.4 2.4 0 3.2-1.8 3.2-3.5 0-2.1-1.9-3.9-4.2-3.9-2.3 0-4.2 1.8-4.2 3.9 0 .7.2 1.4.5 2 .1.1.2.3.2.5 0 .5-.5 1-1 1-.4 0-.7-.2-.9-.5-.5-.9-.8-1.9-.8-3 0-3.2 2.8-5.9 6.2-5.9 3.4 0 6.2 2.7 6.2 5.9 0 2.7-1.6 5.5-5.2 5.5zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;