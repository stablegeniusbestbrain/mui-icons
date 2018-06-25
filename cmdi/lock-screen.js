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
      _react2.default.createElement('path', { d: 'M7 3c2.2 0 4 1.8 4 4 0 1.9-1.3 3.4-3 3.9v2.2c.4.1.7.3 1 .5L13.6 9c-.4-.6-.6-1.3-.6-2 0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4c-.7 0-1.4-.2-2-.6L10.5 15c.3.6.5 1.3.5 2 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.9 1.3-3.4 3-3.9v-2.2c-1.7-.5-3-2-3-3.9 0-2.2 1.8-4 4-4zm10 10c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;