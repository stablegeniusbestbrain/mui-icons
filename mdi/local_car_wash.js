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
      _react2.default.createElement('path', { d: 'M17 5c.8 0 1.5-.7 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .8.7 1.5 1.5 1.5zm-5 0c.8 0 1.5-.7 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .8.7 1.5 1.5 1.5zM7 5c.8 0 1.5-.7 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.3 6.2 5 7 5zm11.9 3c-.2-.6-.7-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 14v8c0 .6.5 1 1 1h1c.5 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8l-2.1-6zM6.5 18c-.8 0-1.5-.7-1.5-1.5S5.7 15 6.5 15s1.5.7 1.5 1.5S7.3 18 6.5 18zm11 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z' })
    )
  );
};

exports.default = Icon;