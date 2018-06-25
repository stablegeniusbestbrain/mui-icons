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
      _react2.default.createElement('path', { d: 'M12 6c0-.5-.4-1-1-1H5.8l.7-3.2v-.2c0-.3-.1-.6-.3-.8L5.4 0l-5 4.9C.2 5.2 0 5.6 0 6v6.5c0 .8.7 1.5 1.5 1.5h6.8c.6 0 1.1-.4 1.3-.9l2.3-5.3c.1-.2.1-.4.1-.5V6zm10.5 4h-6.7c-.7 0-1.2.4-1.4.9l-2.3 5.3c-.1.2-.1.4-.1.6V18c0 .6.5 1 1 1h5.2l-.7 3.2v.2c0 .3.1.6.3.8l.8.8 5-4.9c.2-.3.4-.7.4-1.1v-6.5c0-.8-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;