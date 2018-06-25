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
      _react2.default.createElement('path', { d: 'M15 3H8C6.3 3 5 4.3 5 6v12c0 1.7 1.3 3 3 3h7c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1 15c0 .6-.4 1-1 1H8c-.5 0-1-.4-1-1V6c0-.5.5-1 1-1h7c.6 0 1 .5 1 1v12zM14 6H9c-.6 0-1 .5-1 1v9c0 .6.4 1 1 1h1.5c0 .6.4 1 1 1s1-.4 1-1H14c.6 0 1-.4 1-1V7c0-.5-.4-1-1-1zm0 10H9V7h5v9z' })
    )
  );
};

exports.default = Icon;