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
      _react2.default.createElement('path', { d: 'M13 17.5c-2.5 0-4.5-2-4.5-4.5 0-.6-.4-1-1-1s-1 .4-1 1c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5c-.6 0-1 .4-1 1s.4 1 1 1c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5zM10.7 4c.5 0 1 .4 1 1s-.5 1-1 1H7.4l1.7 1.7 4.1 4.1c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L7.7 9.1 6 7.4v3.3c0 .5-.4 1-1 1s-1-.5-1-1V4h6.7' })
    )
  );
};

exports.default = Icon;