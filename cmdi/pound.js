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
      _react2.default.createElement('path', { d: 'M5.4 21l.7-4h-4l.4-2h4l1-6h-4l.4-2h4l.7-4h2l-.7 4h6l.7-4h2l-.7 4h4l-.4 2h-4l-1 6h4l-.4 2h-4l-.7 4h-2l.7-4h-6l-.7 4h-2zM9.5 9l-1 6h6l1-6h-6z' })
    )
  );
};

exports.default = Icon;