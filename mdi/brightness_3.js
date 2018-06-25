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
      _react2.default.createElement('path', { d: 'M9 2c-1 0-2 .2-3 .5 4.1 1.2 7 5 7 9.5s-2.9 8.3-7 9.5c1 .3 2 .5 3 .5 5.5 0 10-4.5 10-10S14.5 2 9 2z' })
    )
  );
};

exports.default = Icon;