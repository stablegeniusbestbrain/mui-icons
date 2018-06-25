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
      _react2.default.createElement('path', { d: 'M11 2h2v2h.5c.8 0 1.5.7 1.5 1.5V9l-.4.4 1.6 2.9C17.3 11.2 18 9.7 18 8h2c0 2.4-1.1 4.6-2.8 6.1l3.2 5.4.1 2.2-1.9-1.2-3-5.3c-1.1.5-2.3.8-3.6.8-1.3 0-2.5-.3-3.6-.8l-3 5.3-1.9 1.2.1-2.2L9.4 9.4 9 9V5.5c0-.8.7-1.5 1.5-1.5h.5V2zM9.4 13.4c.8.4 1.7.6 2.6.6s1.8-.2 2.6-.6l-1.5-2.5c-.6.6-1.6.6-2.2 0l-1.5 2.5zM12 6c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;