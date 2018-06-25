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
      _react2.default.createElement('path', { d: 'M2.3 20.3l9.6-9.6-1.4-1.4-.7.7c-.4.4-1 .4-1.4 0l-.7-.7c-.4-.4-.4-1.1 0-1.5l5.6-5.6c.4-.4 1-.4 1.4 0l.7.7c.4.4.4 1 0 1.4l-.7.7 1.4 1.4c.4-.4 1.1-.4 1.5 0 .4.4.4 1.1 0 1.4L19 9.3l.7-.7c.4-.4 1-.4 1.4 0l.7.7c.4.4.4 1 0 1.4l-5.7 5.6c-.3.4-1 .4-1.4 0l-.7-.7c-.4-.4-.4-1 0-1.4l.7-.7-1.4-1.4-9.6 9.6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4zM20 19c1.1 0 2 .9 2 2v1H12v-1c0-1.1.9-2 2-2h6z' })
    )
  );
};

exports.default = Icon;