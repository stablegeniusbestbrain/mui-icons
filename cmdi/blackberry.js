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
      _react2.default.createElement('path', { d: 'M5.4 10.3c1 0 2.1.7 2.1 1.7s-1.1 1.7-2.1 1.7H2l.7-3.4h2.7zm.7-5.5c1 0 2.1.7 2.1 1.7 0 .9-1.1 1.7-2.1 1.7H2.7l.7-3.4h2.7zm6.9 0c1 0 2.1.7 2.1 1.7 0 .9-1.1 1.7-2.1 1.7H9.4l.7-3.4H13zm-.7 5.5c1 0 2.1.7 2.1 1.7s-1.1 1.7-2.1 1.7H8.7l.7-3.4h2.9zM11 15.8c.9 0 2 .8 2 1.7 0 1-1.1 1.7-2 1.7H7.5l.7-3.4H11zm7.6-2.1c.9 0 2 .8 2 1.7 0 1-1.1 1.8-2 1.8h-3.5l.7-3.5h2.8zm1.3-5.5c1 0 2.1.8 2.1 1.7 0 1-1.1 1.8-2.1 1.8h-3.4l.7-3.5h2.7z' })
    )
  );
};

exports.default = Icon;