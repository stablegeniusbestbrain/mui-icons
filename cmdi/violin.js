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
      _react2.default.createElement('path', { d: 'M11 2c-.6 0-1 .4-1 1v6c0 .3.2.5.5.5H12c.3 0 .5.2.5.5s-.2.5-.5.5h-1.5C9.7 10.5 9 9.8 9 9V5.2C7.3 5.6 6 7.1 6 9v1.5c1.4 0 2.5 1.1 2.5 2.5S7.4 15.5 6 15.5V17c0 2.8 2.2 5 5 5h2c2.8 0 5-2.2 5-5v-1.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5V9c0-2.2-1.8-4-4-4V3c0-.6-.4-1-1-1h-2zm-.2 14.5h2.5l-.5 3.5h-1.5l-.5-3.5z' })
    )
  );
};

exports.default = Icon;