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
      _react2.default.createElement('path', { d: 'M18.1 4.8c-.1-.5-.5-.8-1-.8H13l.2 3h-2.4l.2-3H6.8c-.5 0-.9.4-1 .8l-2.7 14c-.1.6.4 1.2 1 1.2H10l.3-5h3.4l.3 5h5.8c.6 0 1.1-.6 1-1.2l-2.7-14zM10.4 13l.2-4h2.6l.2 4h-3z' })
    )
  );
};

exports.default = Icon;