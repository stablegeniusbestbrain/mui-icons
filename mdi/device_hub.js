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
      _react2.default.createElement('path', { d: 'M17 16l-4-4V8.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3S9 4.3 9 6c0 1.3.8 2.4 2 2.8V12l-4 4H3v5h5v-3.1l4-4.1 4 4.1V21h5v-5h-4z' })
    )
  );
};

exports.default = Icon;