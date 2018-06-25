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
      _react2.default.createElement('path', { d: 'M16 12v4c0 .6-.4 1-1 1-.2 0-.3 0-.9-.5-.7-.5-1.7-1.5-2.8-2-1-.5-2-.5-3-.5l1.2 3.3v.2c0 .3-.2.5-.5.5H7c-.2 0-.4-.1-.5-.3L5.2 14H5c-.6 0-1-.4-1-1-1.1 0-2-.9-2-2s.9-2 2-2c0-.6.4-1 1-1h3c1.1 0 2.2 0 3.3-.5 1.1-.5 2.1-1.5 2.8-2 .6-.5.7-.5.9-.5.6 0 1 .4 1 1v4c.6 0 1 .4 1 1s-.4 1-1 1zm5-1c0 1.4-.6 2.6-1.5 3.5l-1.4-1.4c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.1l1.4-1.4c.9.9 1.5 2.1 1.5 3.5z' })
    )
  );
};

exports.default = Icon;