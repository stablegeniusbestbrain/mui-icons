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
      _react2.default.createElement('path', { d: 'M21.4 11.6l-9-9C12 2.2 11.5 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .5.2 1 .6 1.4l.4.4c.9-.5 1.9-.8 3-.8 3.3 0 6 2.7 6 6 0 1.1-.3 2.1-.8 3l.4.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l7-7c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4zM5.5 7C4.7 7 4 6.3 4 5.5S4.7 4 5.5 4 7 4.7 7 5.5 6.3 7 5.5 7zm2.6 14.5L6 19.4l-2.1 2.1-1.4-1.4L4.6 18l-2.1-2.1 1.4-1.4L6 16.6l2.1-2.1 1.4 1.4L7.4 18l2.1 2.1-1.4 1.4z' })
    )
  );
};

exports.default = Icon;