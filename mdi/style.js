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
      _react2.default.createElement('path', { d: 'M2.5 19.6l1.4.6v-9L1.4 17c-.4 1.1.1 2.2 1.1 2.6zM22 15.9L17.1 4c-.3-.8-1.1-1.2-1.8-1.2-.3 0-.6 0-.8.1L7.1 6c-.8.3-1.2 1-1.2 1.8 0 .2 0 .5.1.8l5 11.9c.3.8 1 1.2 1.8 1.3.3 0 .5-.1.8-.2l7.3-3C22 18.1 22.5 17 22 16zM7.9 8.8c-.6 0-1-.5-1-1s.4-1 1-1 1 .4 1 1-.5 1-1 1zm-2 11c0 1.1.9 2 2 2h1.4l-3.4-8.4v6.4z' })
    )
  );
};

exports.default = Icon;