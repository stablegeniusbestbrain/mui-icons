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
      _react2.default.createElement('path', { d: 'M12 5c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7m0-2c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm4.2 4.8c-.1-.1-.3-.2-.5-.1l-6 1.7c-.1 0-.3.2-.3.3l-1.7 6c-.1.2 0 .4.1.5.1.1.2.1.4.1h.1l6-1.7c.1 0 .3-.2.3-.3l1.7-6c.1-.2 0-.4-.1-.5zm-7.3 7.3l1.4-4.8 3.4 3.4-4.8 1.4z' })
    )
  );
};

exports.default = Icon;