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
      _react2.default.createElement('path', { d: 'M21 21.8L4.2 5 3 6.2l2 2.1c-.6.3-1 1-1 1.7v10c0 1.1.9 2 2 2h12c.2 0 .4-.1.7-.1l1.1 1.1 1.2-1.2zM8.9 6c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1v2H9.7L20 18.3V10c0-1.1-.9-2-2-2h-1V6c0-2.8-2.2-5-5-5-2.6 0-4.6 1.9-4.9 4.4l1.8 1.8V6z' })
    )
  );
};

exports.default = Icon;