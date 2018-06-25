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
      _react2.default.createElement('path', { d: 'M5.5 7C6.3 7 7 6.3 7 5.5S6.3 4 5.5 4 4 4.7 4 5.5 4.7 7 5.5 7zm15.9 4.6c.4.3.6.8.6 1.4 0 .6-.2 1.1-.6 1.4l-7 7c-.3.4-.8.6-1.4.6-.6 0-1.1-.2-1.4-.6l-9-9c-.4-.3-.6-.8-.6-1.4V4c0-1.1.9-2 2-2h7c.6 0 1.1.2 1.4.6l9 9zM13 20l7-7-8.5-8.5-7 7L13 20zM10.1 8.9l1.4-1.4L17 13l-1.4 1.4-5.5-5.5zm-2.5 2.5L9 10l4 4-1.4 1.4-4-4z' })
    )
  );
};

exports.default = Icon;