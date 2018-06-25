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
      _react2.default.createElement('path', { d: 'M12 20.5c-4.7 0-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5zm0-15c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5zm0 3c1.9 0 3.5 1.6 3.5 3.5 0 .2 0 .4-.1.6l-4-4c.2-.1.4-.1.6-.1m0-1c-.9 0-1.7.3-2.4.7l6.2 6.2c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5zm-3.4 3.9l4 4c-.2.1-.4.1-.6.1-1.9 0-3.5-1.6-3.5-3.5 0-.2 0-.4.1-.6m-.4-1.8c-.4.7-.7 1.5-.7 2.4 0 2.5 2 4.5 4.5 4.5.9 0 1.7-.3 2.4-.7L8.2 9.6z' })
    )
  );
};

exports.default = Icon;