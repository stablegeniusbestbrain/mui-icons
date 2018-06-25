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
      _react2.default.createElement('path', { d: 'M16 17v-6.5C16 8 14 6 11.5 6S7 8 7 10.5V17h9zm2-1l2 2v1H3v-1l2-2v-5.5c0-3.1 2.1-5.6 5-6.3v-.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v.7c2.9.7 5 3.2 5 6.3V16zm-6.5 6c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zM20 10c-.2-2.7-1.5-5-3.6-6.4l1.5-1.5C20.2 4 21.8 6.8 22 10h-2zM6.6 3.6C4.5 5 3.2 7.3 3 10H1c.2-3.2 1.8-6 4.2-7.9l1.4 1.5z' })
    )
  );
};

exports.default = Icon;