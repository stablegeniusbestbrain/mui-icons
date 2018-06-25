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
      _react2.default.createElement('path', { d: 'M12 1c-.4 0-.8.2-1 .8L9.9 4.9c.5.5 1.4.6 2.1.6.7 0 1.6-.1 2.1-.6L13 1.8c-.2-.5-.6-.8-1-.8zM8.4 8.9l-1.4 4c1.1 1.4 3.3 1.6 5 1.6 1.7 0 3.9-.2 5-1.6l-1.4-4c-.8.9-2.4 1.1-3.6 1.1-1.2 0-2.8-.2-3.6-1.1zm-3 6.1c-.8 0-1.6.6-1.9 1.4l-1.4 5.2c-.3.8.2 1.4 1 1.4h17.8c.8 0 1.3-.6 1-1.4l-1.4-5.2c-.3-.8-1.1-1.4-1.9-1.4h-.8l.3 1c.1.3.2.7 0 1-1.3 1.7-4 2-6.1 2-2.1 0-4.8-.3-6.1-2-.2-.3-.1-.7 0-1l.4-1h-.9z' })
    )
  );
};

exports.default = Icon;