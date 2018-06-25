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
      _react2.default.createElement('path', { d: 'M13.5 12c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm0-9c4.7 0 8.5 3.6 8.5 8 0 1.6 0 3-.9 5-4.1 0-5.1 4-8.6 4-2.2 0-3.2-1.7-3.5-4h-.8L7 20.3c-.2.5-.7.8-1.2.7H3c-.6 0-1-.4-1-1s.4-1 1-1v-3c-.6 0-1-.4-1-1s.4-1 1-1h3.8l.4-1.6c-.5-.3-1.1-.4-1.7-.4h-.4L5 11c0-4.4 3.8-8 8.5-8zM5 16v3h.3l.9-3H5z' })
    )
  );
};

exports.default = Icon;