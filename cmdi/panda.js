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
      _react2.default.createElement('path', { d: 'M12 3c1.7 0 3.4.5 4.7 1.3.7-.8 1.7-1.3 2.8-1.3C21.4 3 23 4.6 23 6.5c0 1.5-.9 2.8-2.3 3.3.2.7.3 1.4.3 2.2 0 5-4 9-9 9s-9-4-9-9c0-.8.1-1.5.3-2.2C1.9 9.3 1 8 1 6.5 1 4.6 2.6 3 4.5 3c1.1 0 2.1.5 2.8 1.3C8.6 3.5 10.3 3 12 3zm0 2c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm4.2 5.3c.3 1.3-.1 2.6-1.1 2.9-.9.2-1.9-.7-2.3-2-.3-1.3.1-2.6 1.1-2.9.9-.2 1.9.7 2.3 2zm-8.4 0c.4-1.3 1.4-2.2 2.3-2 1 .3 1.4 1.6 1.1 2.9-.4 1.3-1.4 2.2-2.3 2-1-.3-1.4-1.6-1.1-2.9zM12 14c.6 0 1.1.2 1.5.5l-1 1c0 .4.3.8.8.8s.7-.4.7-.8c0-.3.2-.5.5-.5s.5.2.5.5c0 1-.8 1.8-1.7 1.8-.5 0-1-.2-1.3-.6-.3.3-.8.6-1.2.6-1 0-1.8-.8-1.8-1.8 0-.3.2-.5.5-.5s.5.2.5.5c0 .4.3.8.8.8s.7-.4.7-.8l-1-1c.4-.3.9-.5 1.5-.5z' })
    )
  );
};

exports.default = Icon;