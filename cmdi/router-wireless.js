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
      _react2.default.createElement('path', { d: 'M4 13h16c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zm5 4h1v-2H9v2zm-4-2v2h2v-2H5zm14-8.1l-1.4 1.4C16.1 6.9 14.1 6 11.9 6s-4.2.9-5.6 2.3L4.9 6.9C6.7 5.1 9.2 4 11.9 4c2.8 0 5.3 1.1 7.1 2.9zm-2.8 2.9l-1.4 1.4C14 10.4 13 10 11.9 10c-1.1 0-2.1.4-2.8 1.2L7.7 9.8C8.8 8.7 10.3 8 11.9 8c1.7 0 3.2.7 4.3 1.8z' })
    )
  );
};

exports.default = Icon;