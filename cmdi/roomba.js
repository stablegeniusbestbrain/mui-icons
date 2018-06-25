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
      _react2.default.createElement('path', { d: 'M12 2c2.7 0 5.2 1.1 7.1 2.9l-1.4 1.4C16.2 4.8 14.1 4 12 4s-4.2.8-5.7 2.3L4.9 4.9C6.8 3.1 9.3 2 12 2zM3.7 6.5l1.4 1.4C4.4 9.2 4 10.6 4 12c0 4.4 3.6 8 8 8s8-3.6 8-8c0-1.4-.4-2.8-1.1-4.1l1.4-1.4C21.4 8.1 22 10 22 12c0 5.5-4.5 10-10 10S2 17.5 2 12c0-2 .6-3.9 1.7-5.5zM12 6c3.3 0 6 2.7 6 6 0 1.6-.6 3.1-1.8 4.2l-1.4-1.4c-.7.8-1.7 1.2-2.8 1.2s-2.1-.4-2.8-1.2l-1.4 1.4C6.6 15.1 6 13.6 6 12c0-3.3 2.7-6 6-6zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;