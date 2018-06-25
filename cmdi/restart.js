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
      _react2.default.createElement('path', { d: 'M11 4c2 0 4.1.8 5.7 2.3 3.1 3.2 3.1 8.2-.1 11.3-1.8 1.9-4.3 2.6-6.7 2.3l.5-1.9c1.8.1 3.5-.5 4.8-1.8 2.4-2.3 2.4-6.1 0-8.5C14.1 6.6 12.5 6 11 6v4.6l-5-5 5-4.9V4zM5.3 17.6C2.7 15 2.3 11 4.1 7.9l1.5 1.5c-1.1 2.2-.7 5 1.2 6.8.5.6 1.1 1 1.7 1.2l-.5 2c-1-.4-1.9-1-2.7-1.8z' })
    )
  );
};

exports.default = Icon;