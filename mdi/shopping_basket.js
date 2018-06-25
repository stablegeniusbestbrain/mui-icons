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
      _react2.default.createElement('path', { d: 'M17.2 9l-4.4-6.6c-.2-.2-.5-.4-.8-.4-.3 0-.6.2-.8.5L6.8 9H2c-.6 0-1 .4-1 1v.3l2.6 9.2c.2.9 1 1.5 1.9 1.5h13c.9 0 1.7-.6 1.9-1.5l2.6-9.2V10c0-.6-.4-1-1-1h-4.8zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' })
    )
  );
};

exports.default = Icon;