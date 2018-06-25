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
      _react2.default.createElement('path', { d: 'M18 12c0 1.7-.7 3.2-1.8 4.3l-1-1c.9-.9 1.4-2 1.4-3.3 0-1.2-.5-2.4-1.4-3.2l1-1A6 6 0 0 1 18 12zm-6.4-8.6L6 9H3c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h3l5.6 5.6c.7.7 1.9.2 1.9-.8V4.2c0-1-1.2-1.5-1.9-.8zm8.9.1l-1 1a10.5 10.5 0 0 1 3.1 7.5c0 2.9-1.2 5.6-3.1 7.5l1 1A12 12 0 0 0 24 12c0-3.3-1.3-6.3-3.5-8.5zm-2.1 2.2l-1.1 1a7.6 7.6 0 0 1 2.3 5.3c0 2.1-.9 4-2.3 5.4l1.1 1A9 9 0 0 0 21 12c0-2.4-1-4.7-2.6-6.3z' })
    )
  );
};

exports.default = Icon;