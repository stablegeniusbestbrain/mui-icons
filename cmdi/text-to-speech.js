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
      _react2.default.createElement('path', { d: 'M8 7c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2zm6 7c0 3-2.2 5.4-5 5.9V22H7v-2.1C4.2 19.4 2 17 2 14h2c0 2.2 1.8 4 4 4s4-1.8 4-4h2zm7.4-4.6l-4.2 4.3 1-3.7H14c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v4c0 .6-.2 1.1-.6 1.4z' })
    )
  );
};

exports.default = Icon;