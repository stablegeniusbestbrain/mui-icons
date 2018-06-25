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
      _react2.default.createElement('path', { d: 'M5 1h14c1.1 0 2 .9 2 2v13c0 .7-.4 1.3-.9 1.7L12 23l-8.1-5.3c-.5-.4-.9-1-.9-1.7V3c0-1.1.9-2 2-2zm5 15l9-9-1.4-1.4-7.6 7.6-3.6-3.6L5 11l5 5z' })
    )
  );
};

exports.default = Icon;