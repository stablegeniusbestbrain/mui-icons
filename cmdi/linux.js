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
      _react2.default.createElement('path', { d: 'M13.2 14.5c-.7.8-1.7.8-2.4 0l-3.4-4c-.2.8-.4 1.6-.4 2.5 0 1.7.6 3.2 1.5 4.3 1.5.1 2.8.7 3.3 1.7h.4c.5-1 1.8-1.6 3.3-1.7.9-1.1 1.5-2.6 1.5-4.3 0-.9-.2-1.7-.4-2.5l-3.4 4zm6.8 6.3c0 .5-.7 1.2-1.2 1.2h-5.5c-.6 0-1.3-.7-1.3-1.2 0 .5-.7 1.2-1.2 1.2H5.3c-.6 0-1.3-.7-1.3-1.2 0-1.4.9-2.5 2.3-3.2C5.5 16.3 5 14.7 5 13c-1 2-2.3 2.6-2.9 2-.6-.6-.3-2.2 1-3.6.7-.8 1.9-1.8 2.7-2.1.3-.7.7-1.4 1.2-1.9V7c0-2.8 2.2-5 5-5s5 2.2 5 5v.4c.5.5.9 1.2 1.2 1.9.8.3 2 1.3 2.7 2.1 1.3 1.4 1.6 3 1 3.6-.6.6-1.9 0-2.9-2 0 1.8-.5 3.4-1.3 4.7 1.3.6 2.3 1.7 2.3 3.1zM9.9 9c-.4.5-.4 1.3 0 1.8l1.2 1.5c.4.4 1.1.4 1.5 0l1.3-1.5c.4-.5.4-1.3 0-1.8h-4zm.1-3.7c-.6 0-1 .6-1 1.7s.4 1.8 1 1.8 1-.7 1-1.8-.4-1.7-1-1.7zm4 0c-.6 0-1 .6-1 1.7s.4 1.8 1 1.8 1-.7 1-1.8-.4-1.7-1-1.7z' })
    )
  );
};

exports.default = Icon;