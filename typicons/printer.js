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
      _react2.default.createElement('path', { d: 'M17 5V3c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v2C4.3 5 3 6.3 3 8v10c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3zM8 4h7v5H8V4zM6 7v3c0 .6.4 1 1 1h9c.6 0 1-.4 1-1V7c.6 0 1 .5 1 1v2.5c0 .8-.7 1.5-1.5 1.5h-10c-.8 0-1.5-.7-1.5-1.5V8c0-.5.5-1 1-1zm11 12H6c-.5 0-1-.4-1-1v-5.5c.4.3.9.5 1.5.5h10c.6 0 1.1-.2 1.5-.5V18c0 .6-.4 1-1 1zM13.5 7h-4c-.3 0-.5.2-.5.5s.2.5.5.5h4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm1.5 9H8c-.3 0-.5.2-.5.5s.2.5.5.5h7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM13.5 5h-4c-.3 0-.5.2-.5.5s.2.5.5.5h4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z' })
    )
  );
};

exports.default = Icon;