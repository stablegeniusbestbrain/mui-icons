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
      _react2.default.createElement('path', { d: 'M16.4 14c0-.7.1-1.3.1-2s-.1-1.3-.1-2h3.3c.2.6.3 1.3.3 2s-.1 1.4-.3 2m-5.1 5.6c.6-1.2 1-2.4 1.4-3.6h2.9c-.9 1.7-2.5 2.9-4.3 3.6zm-.3-5.6H9.7c-.1-.7-.2-1.3-.2-2s.1-1.3.2-2h4.6c.1.7.2 1.3.2 2s-.1 1.3-.2 2zM12 20c-.8-1.2-1.5-2.6-1.9-4h3.8c-.4 1.4-1.1 2.8-1.9 4zM8 8H5.1C6 6.3 7.6 5.1 9.4 4.4 8.8 5.5 8.3 6.7 8 8zm-2.9 8H8c.3 1.2.8 2.4 1.4 3.6-1.8-.7-3.4-1.9-4.3-3.6zm-.8-2c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h3.3c0 .7-.1 1.3-.1 2s.1 1.3.1 2M12 4c.8 1.2 1.5 2.6 1.9 4h-3.8c.4-1.4 1.1-2.8 1.9-4zm6.9 4H16c-.3-1.3-.8-2.4-1.4-3.6 1.8.7 3.4 1.9 4.3 3.6zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z' })
    )
  );
};

exports.default = Icon;