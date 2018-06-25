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
      _react2.default.createElement('path', { d: 'M20.5 0C21.9 0 23 1.1 23 2.5V3c.6 0 1 .5 1 1v4c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V4c0-.5.4-1 1-1v-.5C18 1.1 19.1 0 20.5 0zM12 11L4 6v2l8 5 4.2-2.6c.5.4 1.1.6 1.8.6h4v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h11v4c0 .4.1.7.2 1L12 11zm8.5-10c-.8 0-1.5.7-1.5 1.5V3h3v-.5c0-.8-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;