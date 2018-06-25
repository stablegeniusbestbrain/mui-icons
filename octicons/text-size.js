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
      _react2.default.createElement('path', { d: 'M18.2 13.4l-2.1-7.2-2 7.2h4.1zM7.6 14.8S6.2 10 6 9.4h-.1l-1.5 5.4h3.2zM23.1 20h-3l-1.3-4.3h-5.4L12.1 20h-3l-.9-3.1H3.8L2.9 20H0L4.4 7.2h3.3l2.9 8.5L14.5 4h3.3l5.3 16z' })
    )
  );
};

exports.default = Icon;