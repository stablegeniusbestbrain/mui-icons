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
      _react2.default.createElement('path', { d: 'M12.1 22c-2.5 0-4.7-.9-6.4-2.4l-4.3.6 1.7-4.1c-.6-1.2-.9-2.6-.9-4.1 0-5.5 4.4-10 9.9-10S22 6.5 22 12s-4.4 10-9.9 10zm5.4-10v-.1c0-2.8-2-4.9-5.5-4.9H8.2v10h3.7c3.5 0 5.6-2.1 5.6-5zM12 14.5h-1.1v-5H12c1.6 0 2.7.9 2.7 2.5s-1.1 2.5-2.7 2.5z' })
    )
  );
};

exports.default = Icon;