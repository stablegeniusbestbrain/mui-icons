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
      _react2.default.createElement('path', { d: 'M5.5 9C6.3 9 7 8.3 7 7.5S6.3 6 5.5 6 4 6.7 4 7.5 4.7 9 5.5 9zm11.9 2.6c.4.3.6.8.6 1.4 0 .6-.2 1.1-.6 1.4l-5 5c-.3.4-.8.6-1.4.6-.6 0-1.1-.2-1.4-.6l-7-7c-.4-.3-.6-.8-.6-1.4V6c0-1.1.9-2 2-2h5c.6 0 1.1.2 1.4.6l7 7zm-3.9-5.9l1-1 6.9 6.9c.4.3.6.8.6 1.4 0 .6-.2 1.1-.6 1.4L16 19.8l-1-1 5.8-5.8-7.3-7.3z' })
    )
  );
};

exports.default = Icon;