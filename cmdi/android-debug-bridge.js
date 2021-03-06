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
      _react2.default.createElement('path', { d: 'M15 9c-.6 0-1-.5-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM9 9c-.6 0-1-.5-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm7.1-4.6l2.1-2.1-.8-.9-2.3 2.3c-.9-.4-2-.7-3.1-.7s-2.2.3-3.1.7L6.6 1.4l-.8.9 2.1 2.1C6.1 5.6 5 7.7 5 10v1h14v-1c0-2.3-1.1-4.4-2.9-5.6zM5 16c0 3.9 3.1 7 7 7s7-3.1 7-7v-4H5v4z' })
    )
  );
};

exports.default = Icon;