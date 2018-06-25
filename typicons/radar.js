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
      _react2.default.createElement('path', { d: 'M12 20c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7zM11 8.1V10c0 .6.4 1 1 1s1-.4 1-1V8.1c2 .4 3.5 1.9 3.9 3.9H15c-.6 0-1 .4-1 1s.4 1 1 1h1.9c-.4 2-1.9 3.5-3.9 3.9V16c0-.6-.4-1-1-1s-1 .4-1 1v1.9C9 17.5 7.5 16 7.1 14H9c.6 0 1-.4 1-1s-.4-1-1-1H7.1C7.5 10 9 8.5 11 8.1z' })
    )
  );
};

exports.default = Icon;