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
      _react2.default.createElement('path', { d: 'M18.9 4.1l-4.1 7.8.3.4h3.8v5.5h-6.8l-.6.4-1.9 3.7-.4.4H5.1v-4.1l4.1-7.8-.3-.4H5.1V4.5h6.8l.6-.4L14.4.4l.4-.4h4.1v4.1z' })
    )
  );
};

exports.default = Icon;