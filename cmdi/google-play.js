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
      _react2.default.createElement('path', { d: 'M3 20.5v-17c0-.6.3-1.1.8-1.4l9.9 9.9-9.9 9.8c-.5-.2-.8-.7-.8-1.3zm13.8-5.4L6 21.3l8.5-8.5 2.3 2.3zm3.4-4.3c.3.3.6.7.6 1.2s-.3.9-.6 1.2l-2.3 1.3-2.5-2.5 2.5-2.5 2.3 1.3zM6.1 2.7l10.7 6.2-2.3 2.2-8.4-8.4z' })
    )
  );
};

exports.default = Icon;