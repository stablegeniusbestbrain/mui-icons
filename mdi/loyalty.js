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
      _react2.default.createElement('path', { d: 'M21.4 11.6l-9-9c-.3-.4-.8-.6-1.4-.6H4c-1.1 0-2 .9-2 2v7c0 .6.2 1.1.6 1.4l9 9c.3.4.8.6 1.4.6.6 0 1.1-.2 1.4-.6l7-7c.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4zM5.5 7C4.7 7 4 6.3 4 5.5S4.7 4 5.5 4 7 4.7 7 5.5 6.3 7 5.5 7zm11.8 8.3L13 19.5l-4.3-4.2c-.4-.5-.7-1.1-.7-1.8 0-1.4 1.1-2.5 2.5-2.5.7 0 1.3.3 1.8.7l.7.8.7-.8c.5-.4 1.1-.7 1.8-.7 1.4 0 2.5 1.1 2.5 2.5 0 .7-.3 1.3-.7 1.8z' })
    )
  );
};

exports.default = Icon;