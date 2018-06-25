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
      _react2.default.createElement('path', { d: 'M16.9 16.9l-2.1-2.1c.8-.7 1.2-1.7 1.2-2.8 0-.7-.2-1.4-.6-2l2.2-2.2C18.5 9 19 10.4 19 12c0 1.9-.8 3.7-2.1 4.9zM12 5c1.6 0 3 .5 4.2 1.4L14 8.6c-.6-.4-1.3-.6-2-.6-2.2 0-4 1.8-4 4 0 1.1.4 2.1 1.2 2.8L7 16.9c-1.2-1.2-2-3-2-4.9 0-3.9 3.1-7 7-7zm0-3C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z' })
    )
  );
};

exports.default = Icon;