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
      _react2.default.createElement('path', { d: 'M18 10h-5V7.6l9.1-1.5-.2-1.5-5.5.9c.1-.2.1-.3.1-.5 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .4.1.7.3.9l-.8.2V5h-2v1.4l-.6.1c.1-.2.1-.3.1-.5 0-.8-.7-1.5-1.5-1.5S7.5 5.2 7.5 6c0 .4.1.7.3.9l-5.9 1 .2 1.5L11 7.9V10H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM6 12h2.3v4H6v-4zm3.8 4v-4h4.5v4H9.8zm8.2 0h-2.2v-4H18v4z' })
    )
  );
};

exports.default = Icon;