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
      _react2.default.createElement('path', { d: 'M12 2c1.1 0 2 .9 2 2 0 .7-.4 1.4-1 1.7V7h1c3.9 0 7 3.1 7 7h1c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-1v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-1H2c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h1c0-3.9 3.1-7 7-7h1V5.7c-.6-.3-1-1-1-1.7 0-1.1.9-2 2-2zM7.5 13C6.1 13 5 14.1 5 15.5S6.1 18 7.5 18s2.5-1.1 2.5-2.5S8.9 13 7.5 13zm9 0c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z' })
    )
  );
};

exports.default = Icon;