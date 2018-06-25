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
      _react2.default.createElement('path', { d: 'M18.5 1.1c-.5 0-1 .2-1.4.6l-5.8 5.8 5.6 5.7 5.8-5.8c.8-.8.8-2.1 0-2.8l-2.8-2.9c-.4-.4-.9-.6-1.4-.6zm-8.2 7.4l-6 6c-.7.7-.7 2 .1 2.8C3.1 18.5 1.9 19.8.7 21h5.6l.9-.9c.8.8 2 .8 2.8 0l6-5.9' })
    )
  );
};

exports.default = Icon;