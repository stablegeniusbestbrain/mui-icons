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
      _react2.default.createElement('path', { d: 'M12.4 7.6C9.6 4.9 7.3 5.7 6.3 6.1c.8-.7 1.6-1.3 2.6-1.7 2.8-.1 5.9.4 7.7 2.9 0 0 2.4 4.2 3.3 2.4.2.7.3 1.5.3 2.3v.9c-2.1-.3-4.9-2.6-7.8-5.3zm6.7 8.5c-.9.4-2.1 1-4 1-1.8 0-3.5-.8-5.5-1.4-1.9-.6-2.6-1.5-3.9-1.5-.6 0-1 .7-1.1 1.2-.5-1-.8-2.2-.8-3.4 0-.8.1-1.6.3-2.3 1.3-1.6 3.2-2.6 6-.4 0 0 6.2 4.6 9.8 4.9-.2.7-.5 1.3-.8 1.9zM12 20.2c-1.1 0-2.2-.2-3.2-.6-.6-1.5-.6-2.7 1.2-2.1 0 0 3.9 1.5 8 .1-1.5 1.6-3.6 2.6-6 2.6zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z' })
    )
  );
};

exports.default = Icon;