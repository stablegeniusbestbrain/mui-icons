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
      _react2.default.createElement('path', { d: 'M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm.7-7l2.7-2.6c.1-.2.1-.6 0-.8-.2-.1-.6-.1-.8 0L12 11.3 9.4 8.6c-.2-.1-.6-.1-.8 0-.1.2-.1.6 0 .8l2.7 2.6-2.7 2.6c-.1.2-.1.6 0 .8.1.1.3.1.4.1s.3 0 .4-.1l2.6-2.7 2.6 2.7c.1.1.3.1.4.1s.3 0 .4-.1c.1-.2.1-.6 0-.8L12.7 12z' })
    )
  );
};

exports.default = Icon;