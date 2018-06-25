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
      _react2.default.createElement('path', { d: 'M14 20c0 1.1-.9 2-2 2s-2-.9-2-2h4zM12 2c.6 0 1 .4 1 1v1.1c2.8.5 5 2.9 5 5.9v6l3 3H3l3-3v-6c0-3 2.2-5.4 5-5.9V3c0-.6.4-1 1-1z' })
    )
  );
};

exports.default = Icon;