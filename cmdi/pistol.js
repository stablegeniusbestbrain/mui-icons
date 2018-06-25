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
      _react2.default.createElement('path', { d: 'M7 5h16v4h-1v1h-6c-.6 0-1 .4-1 1v1c0 1.1-.9 2-2 2H9.6c-.4 0-.7.2-.9.6l-2.4 4.8c-.2.4-.5.6-.9.6H2s-3 0 1-6c0 0 3-4-1-4V5h1l.5-1h3L7 5zm7 7v-1c0-.6-.4-1-1-1h-1s-1 1 0 2c-1.1 0-2-.9-2-2-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h3c.6 0 1-.4 1-1z' })
    )
  );
};

exports.default = Icon;