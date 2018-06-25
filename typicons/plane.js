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
      _react2.default.createElement('path', { d: 'M20 13.5l-6-3.4v-6c0-.8-.7-1.5-1.5-1.5S11 3.3 11 4.1v6l-6 3.4c-.4.3-.6.8-.4 1.3.2.4.7.7 1.2.5l5.2-1.5v4.5l-1.6 1.3c-.4.3-.5.9-.3 1.3s.8.6 1.3.4l2.1-.8 2.1.8c.2.1.3.1.4.1.3 0 .7-.2.9-.5.2-.5.1-1-.3-1.3L14 18.3v-4.5l5.2 1.5.3.1c.4 0 .8-.3.9-.6.2-.5 0-1-.4-1.3zm-7.5-9.1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z' })
    )
  );
};

exports.default = Icon;