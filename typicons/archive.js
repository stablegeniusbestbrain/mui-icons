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
      _react2.default.createElement('path', { d: 'M13 12h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm7-7H3c-.6 0-1 .4-1 1s.4 1 1 1h17c.6 0 1-.4 1-1s-.4-1-1-1zm-2 3H5c-.6 0-1 .4-1 1v8c0 1.7 1.3 3 3 3h9c1.7 0 3-1.3 3-3V9c0-.6-.4-1-1-1zm-2 10H7c-.6 0-1-.4-1-1v-7h11v7c0 .6-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;