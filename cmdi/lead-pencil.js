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
      _react2.default.createElement('path', { d: 'M16.8 2.7c-.4 0-.7.2-1 .5l-2.1 2.1 5.3 5.3 2.1-2.1c.6-.6.6-1.6 0-2.1l-3.2-3.2c-.3-.3-.7-.5-1.1-.5zM12.9 6l-8.1 8.1 2.6.3.2 2.3 2.3.2.2 2.5 8.1-8.1M4.3 15l-1.8 6.7 6.7-1.8-.2-2.1-2.4-.2-.1-2.3' })
    )
  );
};

exports.default = Icon;