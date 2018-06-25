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
      _react2.default.createElement('path', { d: 'M11 6c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0-2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm6 16h-4v-1.2c1.6-.4 3.1-1.2 4.4-2.4 1.7-1.7 2.6-4 2.6-6.4 0-2.1-.7-4-2-5.6l.7-.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-2.1 2 .7.7c1.4 1.4 2.1 3.1 2.1 5s-.7 3.6-2.1 4.9-3 2.1-4.9 2.1-3.6-.7-5-2.1c-.3-.3-1-.3-1.4 0-.4.4-.4 1.1 0 1.5 1.7 1.7 4 2.6 6.4 2.6v1H7c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;